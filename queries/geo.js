module.exports = [
    {
        query: '[PostGIS: ST_MetaData](https://postgis.net/docs/RT_ST_MetaData.html)',
        sql: 'SELECT ST_METADATA({{rasterCol}}) FROM {{tableName}} LIMIT 5',
    },
    {
        query: '[PostGIS: ST_BandMetaData](https://postgis.net/docs/RT_ST_BandMetaData.html)',
        sql: 'SELECT ST_BANDMETADATA({{rasterCol}}) FROM {{tableName}} LIMIT 5',
    },
    {
        query: '[PostGIS: ST_SummaryStats](https://postgis.net/docs/RT_ST_SummaryStats.html)',
        sql: 'SELECT ST_SUMMARYSTATS({{rasterCol}}, true) FROM {{tableName}} LIMIT 5',
    },
    {
        query: '[PostGIS: ST_Histogram](https://postgis.net/docs/RT_ST_Histogram.html)',
        sql: 'SELECT ST_HISTOGRAM({{rasterCol}}) FROM {{tableName}} LIMIT 5',
    },
    {
        query: '[PostGIS: ST_ValueCount](https://postgis.net/docs/RT_ST_ValueCount.html)',
        sql: 'SELECT ST_VALUECOUNT({{rasterCol}}) FROM {{tableName}} LIMIT 5',
    }
];
