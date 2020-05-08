module.exports = [
    {
        query: 'SELECT: Projecting all columns using wildcard selector',
        sql: 'SELECT * FROM {{tableName}} LIMIT 5',
    },
    {
        query: 'SELECT: Count all rows',
        sql: 'SELECT count(*) FROM {{tableName}}',
    },
    {
        query: 'SELECT: Projecting specific columns',
        sql: 'SELECT {{stringColumn}}, {{numericColumn}} FROM {{tableName}} LIMIT 5',
    },
    {
        query: 'SELECT: Projecting columns AND counting all rows',
        sql: 'SELECT {{stringColumn}}, count(*) FROM {{tableName}} LIMIT 5',
    },
    {
        query: 'SELECT: Aliasing aggregate function results such as AVG in SELECT',
        sql: 'SELECT AVG({{numericColumn}}) as alias FROM {{tableName}} LIMIT 5',
    },
    {
        query: 'SELECT: Usage of aggregate functions (AVG) in SELECT',
        sql: 'SELECT AVG({{numericColumn}}) FROM {{tableName}} LIMIT 5',
    },
    {
        query: 'SELECT: Usage of aggregate functions (MAX) in SELECT',
        sql: 'SELECT MAX({{numericColumn}}) FROM {{tableName}} LIMIT 5',
    },
    {
        query: 'SELECT: Usage of aggregate functions (MIN) in SELECT',
        sql: 'SELECT MIN({{numericColumn}}) FROM {{tableName}} LIMIT 5',
    },
    {
        query: 'SELECT: Usage of aggregate functions (SUM) in SELECT',
        sql: 'SELECT SUM({{numericColumn}}) FROM {{tableName}} LIMIT 5',
    },
    {
        query: 'FROM: Using dataset id in FROM statement',
        sql: 'SELECT * FROM {{datasetId}} LIMIT 5',
    },
    {
        query: 'FROM: Using dataset slug in FROM statement',
        sql: 'SELECT * FROM {{slug}} LIMIT 5',
    },
    {
        query: 'FROM: Using dataset tableName in FROM statement',
        sql: 'SELECT * FROM {{tableName}} LIMIT 5',
    },
    {
        query: 'WHERE: Greater than filtering',
        sql: 'SELECT * FROM {{tableName}} WHERE {{numericColumn}} > {{whereLowerValue}} LIMIT 5',
    },
    {
        query: 'WHERE: Greater than or equal filtering',
        sql: 'SELECT * FROM {{tableName}} WHERE {{numericColumn}} >= {{whereLowerValue}} LIMIT 5',
    },
    {
        query: 'WHERE: Equality filtering',
        sql: 'SELECT * FROM {{tableName}} WHERE {{numericColumn}} = {{whereEqValue}} LIMIT 5',
    },
    {
        query: 'WHERE: Lower than filtering',
        sql: 'SELECT * FROM {{tableName}} WHERE {{numericColumn}} < {{whereGreaterValue}} LIMIT 5',
    },
    {
        query: 'WHERE: Lower than or equal filtering',
        sql: 'SELECT * FROM {{tableName}} WHERE {{numericColumn}} <= {{whereGreaterValue}} LIMIT 5',
    },
    {
        query: 'WHERE: Conjunction (AND) filtering',
        sql: 'SELECT * FROM {{tableName}} WHERE {{numericColumn}} <= {{whereGreaterValue}} AND {{numericColumn2}} > {{whereLowerValue2}} LIMIT 5',
    },
    {
        query: 'WHERE: Disjunction (OR) filtering',
        sql: 'SELECT * FROM {{tableName}} WHERE {{numericColumn}} <= {{whereGreaterValue}} OR {{numericColumn2}} > {{whereLowerValue2}} LIMIT 5',
    },
    {
        query: 'WHERE: BETWEEN filtering',
        sql: 'SELECT * FROM {{tableName}} WHERE {{numericColumn}} BETWEEN {{whereLowerValue}} AND {{whereGreaterValue}} LIMIT 5',
    },
    {
        query: 'WHERE: LIKE filtering',
        sql: 'SELECT * FROM {{tableName}} WHERE {{stringColumn}} LIKE {{whereLikeValue}} LIMIT 5',
    },
    {
        query: 'GROUP BY: Group results by a single column',
        sql: 'SELECT {{stringColumn}} FROM {{tableName}} GROUP BY {{stringColumn}} LIMIT 5',
    },
    {
        query: 'GROUP BY: Group results by multiple columns',
        sql: 'SELECT {{stringColumn}}, {{numericColumn}} FROM {{tableName}} GROUP BY {{stringColumn}}, {{numericColumn}} LIMIT 5',
    },
    {
        query: 'GROUP BY: Aggregate functions used with GROUP BY statements',
        sql: 'SELECT {{stringColumn}}, COUNT(*) as count FROM {{tableName}} GROUP BY {{stringColumn}} LIMIT 5',
    },
    {
        query: 'GROUP BY: Special grouping by range function',
        sql: 'SELECT count(*) FROM {{tableName}} GROUP BY range({{numericColumn}}, 0,1,2,3,4) LIMIT 5',
    },
    {
        query: 'ORDER BY: Ordering results by one column',
        sql: 'SELECT {{stringColumn}} FROM {{tableName}} ORDER BY {{stringColumn}} LIMIT 5',
    },
    {
        query: 'ORDER BY: Ordering results by one column descending',
        sql: 'SELECT {{stringColumn}} FROM {{tableName}} ORDER BY {{stringColumn}} DESC LIMIT 5',
    },
    {
        query: 'ORDER BY: Ordering results by multiple column',
        sql: 'SELECT {{stringColumn}}, {{numericColumn}} FROM {{tableName}} ORDER BY {{stringColumn}}, {{numericColumn}} LIMIT 5',
    },
    {
        query: 'ORDER BY: Ordering results by multiple column descending',
        sql: 'SELECT {{stringColumn}}, {{numericColumn}} FROM {{tableName}} ORDER BY {{stringColumn}}, {{numericColumn}} DESC LIMIT 5',
    },
    {
        query: 'LIMIT: Limit the number of returned results',
        sql: 'SELECT {{stringColumn}} FROM {{tableName}} LIMIT 5',
    },
    {
        query: 'OFFSET: Offset the returned results',
        sql: 'SELECT {{stringColumn}} FROM {{tableName}} LIMIT 5 OFFSET 10',
    },
    {
        query: 'OFFSET: Offset the returned results using short syntax',
        sql: 'SELECT {{stringColumn}} FROM {{tableName}} LIMIT 5, 10',
    }
];
