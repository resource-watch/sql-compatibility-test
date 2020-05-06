# SQL Compatibility Test Script

## What is this repository for?

Use this repository to batch run SQL queries on WRI API datasets, in order to test the support for different SQL statements.

The result of running this test script is a Markdown table, which you can then copy as-is to the documentation of the WRI API.

## How do I get set up?

* Install [node](https://nodejs.org/en/)
* Clone this repository
* To install the project dependencies run: `npm install`
* To run test script, execute the following command on the root of the project: `node index.js`

## How to extend the script?

### queries.js

In the `queries.js` file, there's a list of the different SQL queries that are used to run the test. You can modify the existing queries or add new ones.

The script will generate **one table row** per each query in the `queries.js` file.

### connectorTypes.js

In the `connectorTypes.js` file, there's a list of the connector types against which the test script will be run. Use it to modify the connector type or dataset you want to test.

The script will generate **one table** per each connector type in the `connectorTypes.js` file.
