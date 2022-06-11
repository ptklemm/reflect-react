SELECT
	table_catalog AS catalog,
	table_schema AS schema,
	TABLE_NAME AS table,
	table_type
FROM information_schema.tables
WHERE 
	    table_catalog  = 'Adventureworks' 
	AND table_schema  != 'pg_catalog'
	AND table_schema  != 'information_schema'
	AND table_type     = 'BASE TABLE'
;