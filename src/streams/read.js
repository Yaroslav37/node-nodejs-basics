import fs from "fs";
import * as path from "node:path";
import { fileURLToPath } from "node:url";

const read = async () => {
  const filePath = path.join(
    path.dirname(fileURLToPath(import.meta.url)),
    "files",
    "fileToRead.txt"
  );

  const stream = fs.createReadStream(filePath, { encoding: "utf8" });

  stream.on("data", (chunk) => {
    process.stdout.write(chunk);
  });

  stream.on("end", () => {
    console.log("\nFile reading completed.");
  });

  stream.on("error", (err) => {
    console.error("Error reading the file:", err);
  });
};

await read();
