import { useRouter } from "next/router";

const Table = () => {
	const router = useRouter();
	const { tableName } = router.query;

	return <p>Table: {tableName}</p>;
};

export default Table;
