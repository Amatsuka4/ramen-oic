import { useParams } from "react-router-dom";
import type { Shop } from "../types";

//ToDO: 検索結果のページを作成
//ToDO: 店舗別ページを作成

export default function Shop() {
	const { id } = useParams();

	return (
		<>
			<main className="py-10 w-full">
				<div className="w-3/4 xl:w-1/2 mx-auto">
					<p className="text-2xl text-center mb-8">ID: {id}</p>
				</div>
			</main>
		</>
	);
}
