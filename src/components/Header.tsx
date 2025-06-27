import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Header() {
    const [search, setSearch] = useState("");
    const navigate = useNavigate();

    return (
        <header className="border-b border-gray-200">
            <div className="flex items-center">
                <a
                    href="/"
                    className="text-3xl text-white font-bold bg-black px-4 py-2 hover:bg-gray-800"
                >
                    <h1>RAMEEEN</h1>
                </a>
                <div className="flex justify-between items-center gap-4 w-full mx-6">
                    <div className="">
                        <input
                            type="text"
                            className="bg-gray-200 rounded-md py-1 px-4 focus:bg-white transition-all duration-300"
                            placeholder="Input keyword..."
                            value={search}
                            onChange={(e) => setSearch(e.target.value)}
                            onKeyDown={(e) => {
                                if (e.key === "Enter") {
                                    navigate(`/search?q=${search}`);
                                }
                            }}
                        />
                    </div>
                    <div className="">
                        <ul className="flex items-center gap-4">
                            <li>
                                <a href="/">Home</a>
                            </li>
                            <li>
                                <a href="/about">About</a>
                            </li>
                            <li>
                                <a href="/contact">Contact</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </header>
    );
}
