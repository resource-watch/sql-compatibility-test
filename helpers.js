const axios = require('axios');
const chalk = require('chalk');
const Promise = require('bluebird');
const cliProgress = require('cli-progress');

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

const formatSupported = (result = []) => result.length > 0 ? chalk.green('YES') : chalk.red('NO');

const formatLink = (url, sql, dataset) => `[${processSql(sql, dataset)}](${url})`;

const escapeMarkdownSpecialChars = (string) => string.replace(/\*/g, '\\*').replace(/_/g, '\\_');

const executeTest = async (connectors, queries) => {
    console.log(chalk.bold('\nSQL compatibility checker for different dataset connectors!\n'));

    const progress = new cliProgress.SingleBar({}, cliProgress.Presets.shades_grey);
    progress.start(connectors.length * queries.length, 0);

    let queryResults = {};

    for (const dataset of connectors) {
        queryResults[dataset.connectorType] = await Promise.map(
            queries,
            async ({ query, sql, baseURLOverride = undefined }) => {
                const baseURLToUse = baseURLOverride || 'http://api.resourcewatch.org/v1/query/' + dataset.datasetId;
                const url = processURL(baseURLToUse, sql, dataset);
                const result = await performRequest(url);
                progress.increment();
                return { result, query, url, sql };
            },
            { concurrency: 2 },
        );
    }

    progress.stop();

    for (const dataset of connectors) {
        console.log(`
| Supported | Feature | Example URL |
|-----------|---------|-------------|`);
        queryResults[dataset.connectorType].map(({ result, query, url, sql }) => {
            let tableRow = '| ';
            const notSupported = result.length <= 0;
            tableRow += notSupported
                ? '**' + (formatSupported(result)) + '** | '
                : formatSupported(result) + ' | ';

            tableRow += notSupported
                ? '**' + escapeMarkdownSpecialChars(query) + '** | '
                : escapeMarkdownSpecialChars(query) + ' | ';

            tableRow += notSupported
                ? '**' + escapeMarkdownSpecialChars(formatLink(url, sql, dataset)) + '** | '
                : escapeMarkdownSpecialChars(formatLink(url, sql, dataset)) + ' | ';

            console.log(tableRow);
        });
        console.log('\n\n')
    }
}

module.exports = {
    performRequest,
    processSql,
    processURL,
    formatSupported,
    formatLink,
    escapeMarkdownSpecialChars,
    executeTest,
}
