import * as fs from "node:fs/promises";
import * as path from "node:path"; 

const filePath = path.join(import.meta.dirname, "files", "fileToRead.txt");


const read = async () => {
    try {
        const contents = await fs.readFile(filePath, { encoding: 'utf8' });
        console.log(contents);
      } catch (err) {
        console.error(err.message);
      }

};

await read();