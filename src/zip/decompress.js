import * as zlib from "node:zlib";
import * as fs from "node:fs";
import * as path from "node:path";
import { fileURLToPath } from "node:url";

const decompress = async () => {
  const sourceFilePath = path.join(
    path.dirname(fileURLToPath(import.meta.url)),
    "files",
    "archive.txt.gz"
  );

  const destinationFilePath = path.join(
    path.dirname(fileURLToPath(import.meta.url)),
    "files",
    "fileToCompress.txt"
  );
  fs.createReadStream(sourceFilePath)
    .pipe(zlib.createGunzip())
    .pipe(fs.createWriteStream(destinationFilePath));
};

await decompress();
