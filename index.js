const axios = require('axios');
const chalk = require('chalk');
const Promise = require('bluebird');
const cliProgress = require('cli-progress');

const features = require('./features');
const providers = require('./providers');

const performRequest = async (uri) => {
    try {
        const response = await axios.get(uri);
        return response.data && response.data.data ? response.data.data : [];
    } catch (error) {
        // console.error(error.message);
        return [];
    }
};

const processSql = (sql, dataset) => {
    let processedSql = sql;
    Object.keys(dataset).forEach(key => {
        const regex = new RegExp('{{' + key + '}}', 'g');
        processedSql = processedSql.replace(regex, dataset[key]);
    });
    return processedSql;
};

const processURL = (base, sql, dataset) => base + '?sql=' + encodeURIComponent(processSql(sql, dataset));

const formatSupported = (result = []) => result.length > 0 ? chalk.green('Supported') : chalk.red('**Not supported**');

const formatLink = (url, sql, dataset) => `[${processSql(sql, dataset)}](${url})`;

const main = async () => {
    console.log(chalk.bold('\nSQL compatibility checker for different dataset providers!\n'));

    const progress = new cliProgress.SingleBar({}, cliProgress.Presets.shades_grey);
    // console.log(providers.length * features.length);
    progress.start(providers.length * features.length, 0);

    let queryResults = {};

    for (const dataset of providers) {
        queryResults[dataset.provider] = await Promise.map(
            features,
            async ({ featureName, sql }) => {
                const url = processURL('http://api.resourcewatch.org/v1/query/' + dataset.datasetId, sql, dataset);
                const result = await performRequest(url);
                progress.increment();
                return `| ${formatSupported(result)} | ${featureName} | ${formatLink(url, sql, dataset)} |`;
            },
            { concurrency: 2 },
        );
    }

    progress.stop();

    for (const dataset of providers) {
        console.log(`
| Supported | Feature | Example URL |
|-----------|---------|-------------|`);
        queryResults[dataset.provider].map(st => console.log(st));
        console.log('\n\n')
    }
}

main().then(() => {});
