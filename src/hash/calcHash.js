import { resolve } from 'path';
import { fileURLToPath } from 'url';
import { readFile } from 'fs/promises';

export const calculateHash = async () => {
    const { createHash } = await import('crypto');
    const hash = createHash('sha256');

    const __filename = fileURLToPath(import.meta.url);
    const path = resolve(__filename, '../files/fileToCalculateHashFor.txt');

    try {
        const file = await readFile(path, 'utf8');
        hash.update(file);
        console.log(hash.digest('hex'));
    } catch (error) {
        if (error.code ==='ENOENT') {
            throw new Error('FS operation failed');
        }
        throw new Error(error.message);
    }
};

calculateHash();