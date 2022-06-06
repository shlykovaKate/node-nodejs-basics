export const parseEnv = () => {
    let rssVariables = '';
    for (const variable in process.env) {
        if (variable.startsWith('RSS_')) {
            rssVariables += `${variable}=${process.env[variable]}; `;
        }
    }
    if (rssVariables) {
        console.log (rssVariables.substring(0, rssVariables.length - 2));
    } else {
        console.log ('There are not environment variables with prefix RSS_');
    }
};

parseEnv();
