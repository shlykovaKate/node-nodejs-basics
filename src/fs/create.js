import { writeFile } from 'fs/promises';
import { resolve } from 'path';
import { fileURLToPath } from 'url';

export const create = async () => {
    const __filename = fileURLToPath(import.meta.url);
    const path = resolve(__filename, '../files/fresh.txt');

    try {
        await writeFile(path, 'I am fresh and young', { flag: 'wx'});
    } catch (error) {
        if (error.code === 'EEXIST') {
            throw new Error('FS operation failed');
        }
        throw new Error(error.message);
    }
};

create();