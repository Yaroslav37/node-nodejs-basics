import * as fs from "node:fs/promises";
import * as path from "node:path";

const oldFilePath = path.join(import.meta.dirname, "files", "wrongFilename.txt");
const newFilePath = path.join(import.meta.dirname, "files", "properFilename.md");

const rename = async () => {
    try{
        await fs.access(oldFilePath);
        await fs.access(newFilePath);
     }
     catch (err){
         if (err.code === 'ENOENT'){
            await fs.rename(oldFilePath, newFilePath);
         }
         else{
            throw err;
         }
     }
};

await rename();