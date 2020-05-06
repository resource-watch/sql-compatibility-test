const axios = require('axios');
const chalk = require('chalk');
const Promise = require('bluebird');
const cliProgress = require('cli-progress');

const queries = require('./queries');
const connectors = require('./connectorTypes');

const performRequest = async (uri) => {
    try {
        const response = await axios.get(uri);
        return response.data && response.data.data ? response.data.data : [];
    } catch (error) {
        // Uncomment to see errors in the requests
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
    console.log(chalk.bold('\nSQL compatibility checker for different dataset connectors!\n'));

    const progress = new cliProgress.SingleBar({}, cliProgress.Presets.shades_grey);
    progress.start(connectors.length * queries.length, 0);

    let queryResults = {};

    for (const dataset of connectors) {
        queryResults[dataset.connectorType] = await Promise.map(
            queries,
            async ({ query, sql }) => {
                const url = processURL('http://api.resourcewatch.org/v1/query/' + dataset.datasetId, sql, dataset);
                const result = await performRequest(url);
                progress.increment();
                return `| ${formatSupported(result)} | ${query} | ${formatLink(url, sql, dataset)} |`;
            },
            { concurrency: 2 },
        );
    }

    progress.stop();

    for (const dataset of connectors) {
        console.log(`
| Supported | Feature | Example URL |
|-----------|---------|-------------|`);
        queryResults[dataset.connectorType].map(st => console.log(st));
        console.log('\n\n')
    }
}

main().then(() => {});
