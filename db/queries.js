// prettier-ignore
const queries = {
	getTables: 
        `SELECT
            table_schema AS schema,
            table_name AS table
        FROM information_schema.tables
        WHERE 
            table_catalog     = 'Adventureworks' 
            AND table_schema != 'pg_catalog'
            AND table_schema != 'information_schema'
            AND table_type    = 'BASE TABLE'
        ORDER BY
            table_name ASC;`
};

export default queries;
