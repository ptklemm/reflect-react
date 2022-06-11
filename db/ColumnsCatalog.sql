SELECT *
FROM information_schema.columns
WHERE table_catalog = 'Adventureworks' AND table_schema != 'pg_catalog' AND table_schema != 'information_schema';