import { useSearchParams } from "react-router-dom";
import PageLayout from "../components/PageLayout";
import { useEffect, useState } from "react";
import type { Shop } from "../types";

function handleSearch(ramens: Shop[], q: string | null) {
	if (!q) return ramens;
	return ramens.filter((ramen) => ramen.name?.toLowerCase().includes(q.toLowerCase()));
}

export default function Search({ ramens }: { ramens: Shop[] }) {
	const [searchParams] = useSearchParams();
	const [results, setResults] = useState<Shop[]>([]);
	const q = searchParams.get("q");

	useEffect(() => {
		setResults(handleSearch(ramens, q));
	}, [ramens, q]);

	return <PageLayout title={`${q} の検索結果: ${results.length}件`} shops={results} />;
}
