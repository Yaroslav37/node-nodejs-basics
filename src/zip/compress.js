import * as zlib from "node:zlib";
import * as fs from "node:fs";
import * as path from "node:path";
import { fileURLToPath } from "node:url";

const compress = async () => {
  const sourceFilePath = path.join(
    path.dirname(fileURLToPath(import.meta.url)),
    "files",
    "fileToCompress.txt"
  );

  const destinationFilePath = path.join(
    path.dirname(fileURLToPath(import.meta.url)),
    "files",
    "archive.txt.gz"
  );

  fs.createReadStream(sourceFilePath)
    .pipe(zlib.createGzip())
    .pipe(fs.createWriteStream(destinationFilePath));
};

await compress();
