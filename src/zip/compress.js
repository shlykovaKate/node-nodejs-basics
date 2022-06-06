import { createGzip } from 'zlib';
import { createReadStream, createWriteStream } from 'fs';
import { resolve } from 'path';
import { fileURLToPath } from 'url';

export const compress = async () => {
    const __filename = fileURLToPath(import.meta.url);
    const zipPath = resolve(__filename, '../files/fileToCompress.txt');
    const gzPath = resolve(__filename, '../files/archive.gz');
    const zip = createGzip();
    const readableStream = createReadStream(zipPath);
    const writableStream = createWriteStream(gzPath);

    readableStream.pipe(zip).pipe(writableStream);
};

compress();
