import { resolve } from 'path';
import { fileURLToPath } from 'url';
import * as fs from 'fs/promises';

export const rename = async () => {
    const __filename = fileURLToPath(import.meta.url);
    const oldPath = resolve(__filename, '../files/wrongFilename.txt');
    const newPath = resolve(__filename, '../files/properFilename.md');

    try {
        const file = await fs.readFile(newPath);
        throw new Error('FS operation failed');
    } catch (error) {
        if (error.code ==='ENOENT') {
            try {
                await fs.rename(oldPath, newPath);
            } catch (error) {
                if (error.code ==='ENOENT') {
                    throw new Error('FS operation failed');
                }
                throw new Error(error.message);
            }
        } else {
            throw new Error('FS operation failed');
        }
    }
};

rename();
