import { useParams } from "react-router-dom";
import type { Shop } from "../types";

//ToDO: 検索結果のページを作成
//ToDO: 店舗別ページを作成

export default function Shop({ ramens }: { ramens: Shop[] }) {
	const { id } = useParams();
	const shop = ramens.find((ramen) => ramen.id === id);

	return (
		<>
			<main className="py-10 w-full">
				<div className="w-3/4 xl:w-1/2 mx-auto">
					<p className="text-2xl text-center mb-8">ID: {shop?.name}</p>
					<div className="flex justify-center">
						<div className="w-1/2">
							<img
								className="w-full aspect-square object-cover"
								src={shop?.photos?.[0]?.url || "https://placehold.co/600x600"}
								alt="店舗画像"
							/>
						</div>
					</div>
				</div>
			</main>
		</>
	);
}
