import { useState, useEffect } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Shop from "./pages/Shop";
import Search from "./pages/Search";
import { getRamen } from "./api/getRamen";
import type { Shop as ShopType } from "./types";

function App() {
	const [ramens, setRamens] = useState<ShopType[]>([]);

	// Vite環境での二重取得防止 完成時に関連コード削除
	const [isFetched, setIsFetched] = useState(false);

	useEffect(() => {
		console.log("Fetching ramens...");
		if (isFetched) return;
		getRamen().then((data: ShopType[]) => {
			setRamens(data);
			setIsFetched(true);
		});
	}, []);

	return (
		<>
			<Header />
			<Routes>
				<Route path="/" element={<Home ramens={ramens} />} />
				<Route path="/search" element={<Search ramens={ramens} />} />
				<Route path="/shop/:id" element={<Shop />} />
			</Routes>
			<Footer />
		</>
	);
}

export default App;
