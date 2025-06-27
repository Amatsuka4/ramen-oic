export default function Footer() {
    return (
        <footer className="p-10 bg-gray-100">
            <div className="flex items-center justify-center gap-10 mb-4">
                <a
                    href="/terms"
                    className="text-sm text-gray-600 hover:text-gray-800"
                >
                    規約
                </a>
                <a
                    href="/privacy"
                    className="text-sm text-gray-600 hover:text-gray-800"
                >
                    プライバシーポリシー
                </a>
                <a
                    href="/about"
                    className="text-sm text-gray-600 hover:text-gray-800"
                >
                    会社概要
                </a>
            </div>
            <p className="text-sm text-gray-600 text-center">
                &copy; 2025 RAMEEEN
            </p>
        </footer>
    );
}
