SELECT
	t.table_catalog,
	t.table_schema,
	t.table_name,
	c.column_name,
	c.ordinal_position,
	c.data_type,
	c.is_nullable,
	c.column_default
FROM information_schema.columns AS c
LEFT JOIN information_schema.tables AS t ON c.table_name = t.table_name
WHERE 
	t.table_catalog = 'Adventureworks'
	AND t.table_schema != 'pg_catalog'
	AND t.table_schema != 'information_schema'
	AND t.table_type = 'BASE TABLE'
ORDER BY 
	t.table_schema ASC,
	t.table_name ASC,
	c.ordinal_position ASC
;