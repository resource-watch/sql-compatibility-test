module.exports = [
    {
        featureName: 'SELECT: Projecting all columns using wildcard selector',
        sql: 'SELECT * FROM {{tableName}} LIMIT 5',
    },
    {
        featureName: 'SELECT: Count all rows',
        sql: 'SELECT count(*) FROM {{tableName}}',
    },
    {
        featureName: 'SELECT: Projecting specific columns',
        sql: 'SELECT region, country FROM {{tableName}} LIMIT 5',
    },
    {
        featureName: 'SELECT: Projecting columns AND counting all rows',
        sql: 'SELECT region, count(*) FROM {{tableName}} LIMIT 5',
    },
    {
        featureName: 'SELECT: Aggregate functions such as AVG in SELECT',
        sql: 'SELECT AVG(overall_score) FROM {{tableName}} LIMIT 5',
    },
    {
        featureName: 'SELECT: Aliasing aggregate function results such as AVG in SELECT',
        sql: 'SELECT AVG(overall_score) as alias FROM {{tableName}} LIMIT 5',
    },
    {
        featureName: 'FROM: Using dataset id in FROM statement',
        sql: 'SELECT * FROM {{datasetId}} LIMIT 5',
    },
    {
        featureName: 'FROM: Using dataset slug in FROM statement',
        sql: 'SELECT * FROM {{slug}} LIMIT 5',
    },
    {
        featureName: 'FROM: Using dataset tableName in FROM statement',
        sql: 'SELECT * FROM {{tableName}} LIMIT 5',
    },
    {
        featureName: 'WHERE: Greater than filtering',
        sql: 'SELECT * FROM {{tableName}} WHERE overall_score > 1 LIMIT 5',
    },
    {
        featureName: 'WHERE: Greater than or equal filtering',
        sql: 'SELECT * FROM {{tableName}} WHERE overall_score >= 1 LIMIT 5',
    },
    {
        featureName: 'WHERE: Equality filtering',
        sql: 'SELECT * FROM {{tableName}} WHERE overall_score = 2.1 LIMIT 5',
    },
    {
        featureName: 'WHERE: Lower than filtering',
        sql: 'SELECT * FROM {{tableName}} WHERE overall_score < 1 LIMIT 5',
    },
    {
        featureName: 'WHERE: Lower than or equal filtering',
        sql: 'SELECT * FROM {{tableName}} WHERE overall_score <= 1 LIMIT 5',
    },
    {
        featureName: 'WHERE: Conjunction (AND) filtering',
        sql: 'SELECT * FROM {{tableName}} WHERE overall_score <= 1 AND justice_pillar_score < 1 LIMIT 5',
    },
    {
        featureName: 'WHERE: Disjunction (OR) filtering',
        sql: 'SELECT * FROM {{tableName}} WHERE overall_score <= 1 OR justice_pillar_score < 1 LIMIT 5',
    },
    {
        featureName: 'WHERE: BETWEEN filtering',
        sql: 'SELECT * FROM {{tableName}} WHERE overall_score BETWEEN 1 AND 2 LIMIT 5',
    },
    {
        featureName: 'WHERE: LIKE filtering',
        sql: 'SELECT * FROM {{tableName}} WHERE region LIKE \'Europ%\' LIMIT 5',
    },
    {
        featureName: 'GROUP BY: Group results by a single column',
        sql: 'SELECT region FROM {{tableName}} GROUP BY region LIMIT 5',
    },
    {
        featureName: 'GROUP BY: Group results by multiple columns',
        sql: 'SELECT region, country FROM {{tableName}} GROUP BY region, country LIMIT 5',
    },
    {
        featureName: 'GROUP BY: Aggregate functions used with GROUP BY statements',
        sql: 'SELECT region, COUNT(*) as count FROM {{tableName}} GROUP BY region LIMIT 5',
    },
    {
        featureName: 'GROUP BY: Special grouping by range function',
        sql: 'SELECT count(*) FROM {{tableName}} GROUP BY range(overall_score, 0,1,2,3,4) LIMIT 5',
    },
    {
        featureName: 'ORDER BY: Ordering results by one column',
        sql: 'SELECT region FROM {{tableName}} ORDER BY region LIMIT 5',
    },
    {
        featureName: 'ORDER BY: Ordering results by one column descending',
        sql: 'SELECT region FROM {{tableName}} ORDER BY region DESC LIMIT 5',
    },
    {
        featureName: 'ORDER BY: Ordering results by multiple column',
        sql: 'SELECT region, country FROM {{tableName}} ORDER BY region, country LIMIT 5',
    },
    {
        featureName: 'ORDER BY: Ordering results by multiple column descending',
        sql: 'SELECT region, country FROM {{tableName}} ORDER BY region, country DESC LIMIT 5',
    },
    {
        featureName: 'LIMIT: Limit the number of returned results',
        sql: 'SELECT region FROM {{tableName}} LIMIT 5',
    },
    {
        featureName: 'OFFSET: Offset the returned results',
        sql: 'SELECT region FROM {{tableName}} LIMIT 5 OFFSET 10',
    },
    {
        featureName: 'OFFSET: Offset the returned results using short syntax',
        sql: 'SELECT region FROM {{tableName}} LIMIT 5, 10',
    }
];
