import { resolve } from 'path';
import { fileURLToPath } from 'url';
import { cp } from 'fs/promises';

export const copy = async () => {
    const __filename = fileURLToPath(import.meta.url);
    const sourcePath = resolve(__filename, '../files');
    const destinationPath = resolve(__filename, '../files_copy');
    const options = {
        errorOnExist: true,
        force: false,
        recursive: true
    }

    try {
        await cp(sourcePath, destinationPath, options);
    } catch (error) {
        if (error.code === 'ERR_FS_CP_EEXIST' || error.code ==='ENOENT') {
            throw new Error('FS operation failed');
        }
        throw new Error(error.message);
    }
};

copy();