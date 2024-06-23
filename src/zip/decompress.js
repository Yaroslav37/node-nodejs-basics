import { createGunzip } from 'zlib';
import { pipeline } from 'stream';
import path from 'path';
import { promisify } from 'node:util';
import { createReadStream, createWriteStream } from 'fs';

const gunzip = createGunzip();
const sourcePath = path.join(path.dirname(new URL(import.meta.url).pathname), "files", "archive.gz");
const destinationPath = path.join(path.dirname(new URL(import.meta.url).pathname), "files", "fileToCompress.txt");
const pipe = promisify(pipeline);

const decompress = async () => {
    await pipe(
        createReadStream(sourcePath),
        gunzip,
        createWriteStream(destinationPath)
    );
};

await decompress();