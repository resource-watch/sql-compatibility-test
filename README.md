# SQL Compatibility Test Script

## What is this repository for?

Use this repository to batch run SQL queries on WRI API datasets, in order to test the support for different SQL statements.

The result of running this test script is a Markdown table, which you can then copy as-is to the documentation of the WRI API.

## How do I get set up?

* Install [node](https://nodejs.org/en/)
* Clone this repository
* To install the project dependencies run: `npm install`
* To run the main test script, execute the following command on the root of the project: `node main`
* To run the test script for geospatial queries, execute the following command on the root of the project: `node geo`

## How to extend the script?

### Extending queries

In the `queries` directory, there are two files with a list of the different SQL queries that are used to run the tests. 
You can modify the existing queries or add new ones. The script will generate **one table row** per each query in the queries files.

### Extending connectors

In the `connectors` directory, there are two files with a list of the connector types against which the test script will be ran. 
Use it to modify the connector type or dataset you want to test. The script will generate **one table** per each connector type in the connector files.
