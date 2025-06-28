import { Link } from "react-router-dom";

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

function ShopCard({ shop }: { shop: Shop }) {
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
export default function ShopList({ shops }: { shops: Shop[] }) {
	return (
		<div className="grid grid-cols-3 md:grid-cols-4 xl:grid-cols-5 gap-4">
			{shops.map((shop) => (
				<ShopCard shop={shop} key={shop.id} />
			))}
		</div>
	);
}
