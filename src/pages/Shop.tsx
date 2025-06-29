import { useParams } from "react-router-dom";
import type { Shop } from "../types";

export default function Shop({ ramens }: { ramens: Shop[] }) {
	const { id } = useParams();
	const shop = ramens.find((ramen) => ramen.id === id);

	return (
		<>
			<main className="py-10 w-full">
				<div className="w-3/4 xl:w-1/2 mx-auto">
					<div className="flex justify-center gap-16">
						<div className="w-1/2">
							<img
								className="w-full aspect-square object-cover rounded-md"
								src={shop?.photos?.[0]?.url || "https://placehold.co/600x600"}
								alt="店舗画像"
							/>
						</div>
						<div className="w-1/2">
							<p className="text-2xl text-center mb-8">店名: {shop?.name}</p>
							<p>
								{"APIに説明文が無いため、ダミーの説明文を入れています。".repeat(15)}
							</p>
						</div>
					</div>
				</div>
			</main>
		</>
	);
}
