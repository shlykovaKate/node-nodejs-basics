import { ReadableStream, TransformStream, WritableStream } from 'node:stream/web';

export const transform = async () => {
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

    const transformStream = new TransformStream({
        transform(chunk, controller) {
            if (chunk) {
                controller.enqueue(chunk.toString().split("").reverse().join(""));
            }
        }
    });

    const writableStream = new WritableStream({
        write(chunk) {
            if (chunk) {
                process.stdout.write(`${chunk}\n\n`);
            }
        }
    });

    readableStream.pipeThrough(transformStream).pipeTo(writableStream);
};

transform();
