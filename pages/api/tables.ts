import db from "../../db";
import queries from "../../db/queries";

export default async function tables(req, res) {
	const { rows } = await db.query(queries.getTables);
	res.status(200).json(rows);
}
