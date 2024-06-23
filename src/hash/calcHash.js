import * as crypto from 'crypto';
import path from 'path';
import { createReadStream } from 'node:fs';

const filePath = path.join(import.meta.dirname, "files", "fileToCalculateHashFor.txt");

const calculateHash = async () => {
    return new Promise((resolve, reject) =>{
        const hash = crypto.createHash('sha256');
        const input = createReadStream(filePath);
    
        input.on('readable', () => {
            const data = input.read();
            if (data)
                hash.update(data);
            else{
                resolve(hash.digest('hex'));
            }
        });
    
        input.on('error', reject);
    });
};

await calculateHash()
    .then(console.log)
    .catch(console.error);