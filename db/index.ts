import { Pool } from "pg";

const DB_CONFIG = {
	PGHOST: "ptk-server",
	PGPORT: 5432,
	PGUSER: "postgres",
	PGPASSWORD: "postgres",
	PGDATABASE: "Adventureworks"
};

const pool = new Pool({
	host: DB_CONFIG.PGHOST,
	port: DB_CONFIG.PGPORT,
	user: DB_CONFIG.PGUSER,
	password: DB_CONFIG.PGPASSWORD,
	database: DB_CONFIG.PGDATABASE
});

export default pool;
