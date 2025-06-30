import { Link } from "react-router-dom";

export default function Footer() {
    return (
        <footer className="p-10 border-t border-gray-200 w-full">
            <div className="w-1/2 mx-auto">
                <ul className="flex items-center justify-center gap-10 mb-16 text-center xl:flex-row flex-col">
                    <li className="w-full text-sm text-gray-600 hover:text-gray-800">
                        <Link to="/terms">規約</Link>
                    </li>
                    <li className="w-full text-sm text-gray-600 hover:text-gray-800">
                        <Link to="/privacy">プライバシーポリシー</Link>
                    </li>
                    <li className="w-full text-sm text-gray-600 hover:text-gray-800">
                        <Link to="/about">会社概要</Link>
                    </li>
                </ul>
            </div>
            <p className="text-xs text-gray-600 text-center">
                &copy; 2025 RAMEEEN
            </p>
        </footer>
    );
}
