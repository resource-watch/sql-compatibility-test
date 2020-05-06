const axios = require('axios');
const chalk = require('chalk');
const Promise = require('bluebird');

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

const processSql = (sql, datasetId, tableName, slug) => sql
    .replace('{{datasetId}}', datasetId)
    .replace('{{tableName}}', tableName)
    .replace('{{slug}}', slug);

const processURL = (base, sql, datasetId, tableName, slug) => base + '?sql=' + encodeURIComponent(processSql(sql, datasetId, tableName, slug));

const formatSupported = (result = []) => result.length > 0 ? chalk.green('Supported') : chalk.red('**Not supported**');

const formatLink = (url, sql, datasetId, tableName, slug) => `[${processSql(sql, datasetId, tableName, slug)}](${url})`;

const main = async () => {
    console.log(chalk.bold('\nSQL compatibility checker for different dataset providers!\n'));

    for (const { provider, datasetId, tableName, slug } of providers) {
        console.log(`Executing queries for provider ${provider}`);

        const results = await Promise.map(
            features,
            async ({ featureName, sql }) => {
                const url = processURL('http://api.resourcewatch.org/v1/query/' + datasetId, sql, datasetId, tableName, slug);
                const result = await performRequest(url);
                console.log(`${chalk.green('Done')}: ${featureName}`);
                return `| ${formatSupported(result)} | ${featureName} | ${formatLink(url, sql, datasetId, tableName, slug)} |`;
            },
            { concurrency: 3 },
        );

        console.log('\n');
        results.map(st => console.log(st));

        console.log(chalk.bold('\nEnd!'));
    }
}

main().then(() => {});
