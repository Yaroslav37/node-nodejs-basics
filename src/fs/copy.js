import * as fs from "node:fs/promises";
import * as path from "node:path";

const srcFolderPath = path.join(import.meta.dirname, "files");
const dstFolderPath = path.join(import.meta.dirname, "files_copy");

const copy = async () => {
    try {
        await fs.access(srcFolderPath);
        await fs.cp(srcFolderPath, dstFolderPath, {recursive: true, errorOnExist: true, force: false});
    }
    catch(err){
        throw new Error('FS operation failed');
    }
};

await copy();
