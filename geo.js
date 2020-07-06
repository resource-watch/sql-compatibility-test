const queries = require('./queries/geo');
const connectors = require('./connectors/geo');
const { executeTest } = require('./helpers');

executeTest(connectors, queries).then(() => {});
