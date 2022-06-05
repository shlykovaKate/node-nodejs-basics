import { resolve } from 'path';
import { fileURLToPath } from 'url';
import { readdir } from 'fs/promises';

export const list = async () => {
    const __filename = fileURLToPath(import.meta.url);
    const path = resolve(__filename, '../files');

    try {
        const files = await readdir(path);
        console.log('FILES', files);
    } catch (error) {
        if (error.code ==='ENOENT') {
            throw new Error('FS operation failed');
        }
        throw new Error(error.message);
    }
};

list();
