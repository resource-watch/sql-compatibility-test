module.exports = [
    {
        // The name of the connector type
        connectorType: 'carto',

        // The ID of the dataset to be used
        datasetId: '0b9f0100-ce5b-430f-ad8f-3363efa05481',

        // The table name of the dataset to be used
        tableName: 'edi',

        // The slug of the dataset to be used
        slug: 'Environmental-Democracy-Index-1490086842552',

        // A string column from the data of the dataset
        stringColumn: 'region',

        // An example of a value for the stringColumn in the data of the dataset
        whereLikeValue: '\'Europ%\'',

        // A numeric column from the data of the dataset
        numericColumn: 'overall_score',

        // A second numeric column from the data of the dataset
        numericColumn2: 'justice_pillar_score',

        // There should be at least one row in the data where numericColumn > whereLowerValue
        whereLowerValue: 2,

        // There should be at least one row in the data where numericColumn = whereEqValue
        whereEqValue: 2.1,

        // There should be at least one row in the data where numericColumn < whereGreaterValue
        whereGreaterValue: 2.2,

        // There should be at least one row in the data where numericColumn2 > whereLowerValue2
        whereLowerValue2: 1,
    },
    {
        connectorType: 'document',
        datasetId: '9be3bf63-97fc-4bb0-b913-775ccae3cf9e',
        tableName: 'data',
        slug: 'Glad-Alerts-Daily-Geostore-User-Areas_3',
        stringColumn: 'bra_biome__name',
        numericColumn: 'alert__count',
        numericColumn2: 'alert_area__ha',
        whereLowerValue: 2,
        whereEqValue: 5,
        whereGreaterValue: 8,
        whereLowerValue2: 0.1,
        whereLikeValue: '\'Amaz%\'',
    }
];
