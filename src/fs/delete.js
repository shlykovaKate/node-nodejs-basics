import { resolve } from 'path';
import { fileURLToPath } from 'url';
import { rm } from 'fs/promises';

export const remove = async () => {
    const __filename = fileURLToPath(import.meta.url);
    const path = resolve(__filename, '../files/fileToRemove.txt');    

    try {
        await rm(path);
    } catch (error) {
        if (error.code ==='ENOENT') {
            throw new Error('FS operation failed');
        }
        throw new Error(error.message);
    }
};

remove();
