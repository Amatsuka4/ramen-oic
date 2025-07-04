import { Link } from "react-router-dom";

export default function History({
    ramen_history,
}: {
    ramen_history: [string, string][];
}) {
    if (ramen_history === undefined) {
        return null;
    }
    return (
        <div className="border-b border-gray-200 pt-2 pb-4">
            <p className="text-center text-sm">最近の履歴</p>
            <div className="flex h-16 items-center justify-center flex-row-reverse gap-4">
                {ramen_history.map((item, index) => (
                    <Link
                        key={index}
                        to={`/shop/${item[1]}`}
                        className="hover:opacity-80"
                    >
                        <img
                            src={item[0]}
                            alt={item[1]}
                            className="w-12 h-12 border border-gray-400 rounded-sm"
                        />
                    </Link>
                ))}
            </div>
        </div>
    );
}
