const chalk = require('chalk');
const Promise = require('bluebird');
const cliProgress = require('cli-progress');

const QueryRunner = require('./queryRunner');

const escapeMarkdownSpecialChars = (string) => string.replace(/\*/g, '\\*').replace(/_/g, '\\_');

const executeTest = async (connectors, queries) => {
    console.log(chalk.bold('\nSQL compatibility checker for different dataset connectors!\n'));

    const progress = new cliProgress.SingleBar({}, cliProgress.Presets.shades_grey);
    progress.start(connectors.length * queries.length, 0);

    let queryResults = {};

    for (const dataset of connectors) {
        queryResults[dataset.connectorType] = await Promise.map(
            queries,
            async ({ query, sql, params = {} }) => {
                const queryRunner = new QueryRunner(sql, query, dataset, params);
                await queryRunner.executeQuery();
                progress.increment();
                return { queryRunner };
            },
            { concurrency: 1 },
        );
    }

    progress.stop();

    for (const dataset of connectors) {
        console.log(`
| Supported | Feature | Example URL |
|-----------|---------|-------------|`);
        queryResults[dataset.connectorType].map(({ queryRunner }) => {
            let tableRow = '| ';
            const notSupported = !queryRunner.isSupported();
            tableRow += notSupported ? '**' + chalk.red('NO') + '** | ' : chalk.green('YES') + ' | ';

            tableRow += notSupported
                ? '**' + escapeMarkdownSpecialChars(queryRunner.getQuery()) + '** | '
                : escapeMarkdownSpecialChars(queryRunner.getQuery()) + ' | ';

            tableRow += notSupported
                ? '**' + escapeMarkdownSpecialChars(queryRunner.getFormattedURL()) + '** | '
                : escapeMarkdownSpecialChars(queryRunner.getFormattedURL()) + ' | ';

            console.log(tableRow);
        });
        console.log('\n\n')
    }
}

module.exports = { executeTest };
