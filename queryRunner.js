const axios = require('axios');

class QueryRunner {
    errorReporting = true;

    constructor(sql, query, dataset, params = {}) {
        this.sql = sql;
        this.query = query;
        this.dataset = dataset;
        this.params = params;
    }

    getQuery() {
        return this.query;
    }

    interpolate(string, variables) {
        Object.keys(variables).forEach(key => {
            const regex = new RegExp('{{' + key + '}}', 'g');
            string = string.replace(regex, variables[key]);
        });
        return string;
    }

    processSql() {
        return this.interpolate(this.sql, this.dataset);
    }

    processURL() {
        return 'http://localhost:3000/v1/query/' + this.dataset.datasetId + '?sql=' + this.processSql();
    }

    async performRequests(uri) {
        try {
            if (this.params.calls) {
                return await Promise.all(this.params.calls.map(async callParams => {
                    uri = this.interpolate(uri, callParams);
                    const res = await axios.get(uri);
                    return res.data && res.data.data ? res.data.data : null;
                }));
            } else {
                const response = await axios.get(uri);
                return response.data && response.data.data ? [response.data.data] : null;
            }
        } catch (error) {
            if (this.errorReporting) {
                console.log('ERROR!');
                console.error(error.message);
                console.log(uri);
                console.log(this.sql);
                console.log(error.response.data);
            }

            return null;
        }
    }

    async executeQuery() {
        const url = this.processURL();
        this.queryResults = await this.performRequests(url);
    }

    getFormattedURL() {
        return `[${this.processSql()}](${this.processURL()})`;
    }

    isSupported() {
        if (this.params.validateFunction) {
            return this.params.validateFunction(this.queryResults, this.params);
        }

        return this.queryResults && this.queryResults.length > 0;
    }
}

module.exports = QueryRunner;
