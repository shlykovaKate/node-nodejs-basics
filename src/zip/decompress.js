import { createUnzip } from 'zlib';
import { createReadStream, createWriteStream } from 'fs';
import { resolve } from 'path';
import { fileURLToPath } from 'url';

export const decompress = async () => {
    const __filename = fileURLToPath(import.meta.url);
    const zipPath = resolve(__filename, '../files/fileToCompress.txt');
    const gzPath = resolve(__filename, '../files/archive.gz');
    const unzip = createUnzip();
    const readableStream = createReadStream(gzPath);
    const writableStream = createWriteStream(zipPath);

    readableStream.pipe(unzip).pipe(writableStream);
};

decompress();
