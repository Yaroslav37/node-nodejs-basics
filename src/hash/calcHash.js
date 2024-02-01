import * as fs from "node:fs/promises";
import * as path from "node:path";
import { fileURLToPath } from "node:url";
import { createHash } from "crypto";
import { createReadStream } from 'node:fs';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const filePath = path.join(__dirname, "files", "fileToCalculateHashFor.txt");

const calculateHash = async () => {
    const hash = createHash("sha256");
    const input = createReadStream(filePath, 'utf-8');

    return new Promise((resolve, reject) => {
        input.on('data', (data) => {
            hash.update(data);
        });

        input.on('end', () => {
            console.log(`${hash.digest('hex')}`);
            resolve();
        });

        input.on('error', (error) => {
            reject(error);
        });
    });
};

await calculateHash();