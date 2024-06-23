import { createReadStream } from 'fs';
import path from 'path';

const filePath = path.join(path.dirname(new URL(import.meta.url).pathname), "files", "fileToRead.txt");

const read = async () => {
    const stream = createReadStream(filePath, { encoding: 'utf8' });
    stream.on('data', chunk => process.stdout.write(chunk));
    stream.on('error', console.error);
};

await read().catch(console.error);