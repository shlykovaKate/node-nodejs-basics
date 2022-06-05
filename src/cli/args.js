export const parseArgs = () => {
    let args = '';
    process.argv.forEach((argument, index) => {
        if (argument.startsWith('--')) {
            args += `${argument.substring(2)} is ${process.argv[index + 1]}, `;
        }
    });
    if (args) {
        console.log (args.substring(0, args.length - 2));
    } else {
        console.log ('There are not command line arguments');
    }
};

parseArgs();