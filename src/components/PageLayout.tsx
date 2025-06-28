import ShopList from "./ShopList";
import type { Shop } from "../types";

interface PageLayoutProps {
	title: string;
	shops: Shop[];
}

export default function PageLayout({ title, shops }: PageLayoutProps) {
	return (
		<main className="py-10 w-full bg-gray-100">
			<div className="w-3/4 xl:w-1/2 mx-auto">
				<p className="text-2xl text-center mb-10">{title}</p>
				<ShopList shops={shops} />
			</div>
		</main>
	);
}
