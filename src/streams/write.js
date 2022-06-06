import { appendFile } from 'fs/promises';
import { resolve } from 'path';
import { fileURLToPath } from 'url';
import { ReadableStream, WritableStream } from 'node:stream/web';

export const write = async () => {
    const __filename = fileURLToPath(import.meta.url);
    const path = resolve(__filename, '../files/fileToWrite.txt');

    const readableStream = new ReadableStream({
        pull(controller) {
            process.stdin.once('readable', () => {
                const chunk = process.stdin.read();
                if (chunk) {
                    controller.enqueue(chunk);
                }
            });
        }
    });

    const writableStream = new WritableStream({
       async write(chunk) {
            if (chunk) {
               await appendFile(path, chunk.toString('utf-8'));
            }
        }
    });

    readableStream.pipeTo(writableStream);
};

write();
