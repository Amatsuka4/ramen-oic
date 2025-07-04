import { useState, useEffect } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Shop from "./pages/Shop";
import Search from "./pages/Search";
import { getRamen } from "./api/getRamen";
import type { Shop as ShopType } from "./types";
import { useCookies } from "react-cookie";
import History from "./components/History";

//ToDo: 閲覧履歴の保存
//ToDo: お気に入り機能
//ToDo: 検索結果を、useMemoでメモ化

function App() {
    const [ramens, setRamens] = useState<ShopType[]>([]);

    const [cookies, setCookie] = useCookies(["ramen_history"]);

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

    const handleCookie = (shop: ShopType) => {
        const ramen_history = cookies.ramen_history;
        if (!ramen_history) {
            setCookie("ramen_history", [[shop.photos?.[0]?.url, shop.id]]);
            return;
        }
        if (ramen_history.includes([shop.photos?.[0]?.url, shop.id])) {
            return;
        }
        if (ramen_history.length >= 8) {
            ramen_history.shift();
        }
        setCookie(
            "ramen_history",
            [...ramen_history, [shop.photos?.[0]?.url, shop.id]],
            {
                path: "/",
                maxAge: 60 * 60 * 24 * 30,
            }
        );
    };

    return (
        <>
            <Header />
            <History ramen_history={cookies.ramen_history} />
            <Routes>
                <Route path="/" element={<Home ramens={ramens} />} />
                <Route path="/search" element={<Search ramens={ramens} />} />
                <Route
                    path="/shop/:id"
                    element={
                        <Shop ramens={ramens} handleCookie={handleCookie} />
                    }
                />
            </Routes>
            <Footer />
        </>
    );
}

export default App;
