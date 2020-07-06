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
    },
    {
        connectorType: 'featureservice',
        datasetId: '0b9e546c-f42a-4b26-bad3-7d606f58961c',
        tableName: 'cdonexradMapServer0',
        slug: 'NOAA-NEXt-Generation-RADar-NEXRAD-Products-Locations-1490086842546',
        stringColumn: 'STATION_NAME',
        numericColumn: 'ELEVATION',
        numericColumn2: 'LATITUDE',
        whereLowerValue: 3587,
        whereEqValue: 5870,
        whereGreaterValue: 5000,
        whereLowerValue2: 35.23333,
        whereLikeValue: '\'AMARI%\'',
    },
    {
        connectorType: 'gee',
        datasetId: 'c12446ce-174f-4ffb-b2f7-77ecb0116aba',
        tableName: 'users/resourcewatch_wri/foo_024_vegetation_health_index',
        slug: 'foo024nrt-Vegetation-Health-Index_replacement_4',
        stringColumn: 'system:index',
        numericColumn: 'system:asset_size',
        numericColumn2: 'system:time_start',
        whereLowerValue: 36975655,
        whereEqValue: 37153685,
        whereGreaterValue: 37180450,
        whereLowerValue2: 1572739200000,
        whereLikeValue: '\'foo_024_vegetation_health_index%\'',
    }
];
