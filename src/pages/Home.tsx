import { useState, useEffect } from "react";
import PageLayout from "../components/PageLayout";
import type { Shop } from "../types";

const RANDOM_COUNT = 10;

export default function Home({ ramens }: { ramens: Shop[] }) {
	const [randomRamens, setRandomRamens] = useState<Shop[]>([]);
	const [isShuffled, setIsShuffled] = useState(false);

	useEffect(() => {
		// ランダムなお店を10件取得
		if (ramens.length > 0 && !isShuffled) {
			const shuffled = [...ramens].sort(() => Math.random() - 0.5);
			const selected = shuffled.slice(0, RANDOM_COUNT);
			setRandomRamens(selected);
			setIsShuffled(true);
		}
	}, [ramens]);

	return <PageLayout title="ランダムなお店" shops={randomRamens} />;
}
