const queries = require('./queries/main');
const connectors = require('./connectors/main');
const { executeTest } = require('./helpers');

executeTest(connectors, queries).then(() => {});
