import { createWriteStream } from 'fs';
import path from 'path';

const filePath = path.join(path.dirname(new URL(import.meta.url).pathname), "files", "fileToWrite.txt");

const write = () => {
    const stream = createWriteStream(filePath, { encoding: 'utf8' });
    process.stdin.pipe(stream);
};

write();