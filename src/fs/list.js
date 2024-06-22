import * as fs from "node:fs/promises";
import * as path from "node:path";

const dirPath = path.join(import.meta.dirname, "files");

const list = async () => {
    try{
        const files = await fs.readdir(dirPath);
        for (const file of files)
          console.log(file);
     }
     catch (err){
        throw err;
     }
};

await list();