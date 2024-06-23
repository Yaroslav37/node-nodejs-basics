import * as fs from "node:fs/promises";
import * as path from "node:path"; 

const filePath = path.join(import.meta.dirname, "files", "fresh.txt");
const fileContent = "I am fresh and young";

const create = async () => {
    try{
        await fs.access(filePath);
        throw new Error('FS operation failed');
    }
    catch(err){
        if (err.code === 'ENOENT'){
            await fs.writeFile(filePath, fileContent);
        }
        else{
            throw err;
        }
    }
};

await create();