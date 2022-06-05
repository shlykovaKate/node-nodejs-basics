
import { ReadableStream, WritableStream } from 'node:stream/web';
import { readFile } from 'fs/promises';
import { resolve } from 'path';
import { fileURLToPath } from 'url';

export const read = async () => {
    const __filename = fileURLToPath(import.meta.url);
    const path = resolve(__filename, '../files/fileToRead.txt');

    const readableStream = new ReadableStream({
        async start(controller) {
            const file = await readFile(path);
            controller.enqueue(file);
        }
    });

    const writableStream = new WritableStream({
        write(chunk) {
            if (chunk) {
                process.stdout.write(`${chunk}\n\n`);
            }
        }
    });

    readableStream.pipeTo(writableStream);
};

read();