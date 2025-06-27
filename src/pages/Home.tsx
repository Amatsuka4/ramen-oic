import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { getRamen } from "../api/getRamen";

type Photo = {
	name: string;
	url: string;
	width: number;
	height: number;
};

type Shop = {
	id: string;
	name?: string;
	photos?: Photo[];
};

const RANDOM_COUNT = 10;

function RamenCard({ shop }: { shop: Shop }) {
	const href = `/shop/${shop.id}`;

	return (
		<div className="w-full h-full" key={shop.id}>
			<Link to={href}>
				<img
					className="w-full aspect-square object-cover rounded-md"
					src={shop.photos?.[0]?.url ?? "https://placehold.co/400x400"}
					alt={shop.name ?? "ラーメン"}
				/>
			</Link>

			<p className="text-center">
				<Link to={href}>{shop.name}</Link>
			</p>
		</div>
	);
}

export default function Home() {
	const [ramens, setRamens] = useState<Shop[]>([]);
	const [randomRamens, setRandomRamens] = useState<Shop[]>([]);

	// Vite環境での二重取得防止 完成時に関連コード削除
	const [isFetched, setIsFetched] = useState(false);
	const [isShuffled, setIsShuffled] = useState(false);

	useEffect(() => {
		if (isFetched) return;
		getRamen().then((data: Shop[]) => {
			setRamens(data);
			setIsFetched(true);
		});
	}, []);

	useEffect(() => {
		// ランダムなお店を10件取得
		if (ramens.length > 0 && !isShuffled) {
			const shuffled = [...ramens].sort(() => Math.random() - 0.5);
			const selected = shuffled.slice(0, RANDOM_COUNT);
			setRandomRamens(selected);
			setIsShuffled(true);
		}
	}, [ramens]);

	return (
		<>
			<main className="py-10 w-full bg-gray-100">
				<div className="w-3/4 xl:w-1/2 mx-auto">
					<p className="text-2xl text-center mb-8">ランダムなお店</p>
					<div className="grid grid-cols-3 md:grid-cols-4 xl:grid-cols-5 gap-4">
						{randomRamens.map((shop) => (
							<RamenCard shop={shop} key={shop.id} />
						))}
					</div>
				</div>
			</main>
		</>
	);
}
