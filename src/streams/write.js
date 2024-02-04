import fs from "fs";
import * as path from "node:path";
import { fileURLToPath } from "node:url";

const write = async () => {
  const filePath = path.join(
    path.dirname(fileURLToPath(import.meta.url)),
    "files",
    "fileToWrite.txt"
  );
  const stream = fs.createWriteStream(filePath, { flags: 'a' });

  process.stdin.pipe(stream);

  stream.on('finish', () => {
    console.log('Data has been written to fileToWrite.txt.');
  });

  stream.on('error', (err) => {
    console.error('Error writing to the file:', err);
  });
};

await write();
