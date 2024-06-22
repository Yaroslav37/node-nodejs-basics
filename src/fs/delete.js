import * as fs from "node:fs/promises";
import * as path from "node:path";

const filePath = path.join(import.meta.dirname, "files", "fileToRemove.txt");

const remove = async () => {
    try{
        await fs.access(filePath);
     }
     catch (err){
         if (err.code === 'ENOENT'){
            await fs.rm(filePath);
         }
         else{
            throw err;
         }
     }
};

await remove();