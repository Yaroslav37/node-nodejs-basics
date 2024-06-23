import  {createGzip} from 'zlib';
import {pipeline} from 'stream';
import path from 'path';
import { promisify } from 'node:util';

import { createReadStream, createWriteStream } from 'fs';

const gzip = createGzip;
const sourcePath = path.join(import.meta.dirname, "files", "fileToCompress.txt");
const destinationPath = path.join(import.meta.dirname, "files", "archive.gz");
const pipe = promisify(pipeline);

const compress = async () => {
    const gzip = createGzip();
    const source = createReadStream(sourcePath);
    const destination = createWriteStream(destinationPath);
    await pipe(source, gzip, destination);
};

await compress();