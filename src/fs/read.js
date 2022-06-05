import { resolve } from 'path';
import { fileURLToPath } from 'url';
import { readFile } from 'fs/promises';

export const read = async () => {
    const __filename = fileURLToPath(import.meta.url);
    const path = resolve(__filename, '../files/fileToRead.txt');

    try {
        const file = await readFile(path, 'utf8');
        console.log(file);
    } catch (error) {
        if (error.code ==='ENOENT') {
            throw new Error('FS operation failed');
        }
        throw new Error(error.message);
    }
}

read();
