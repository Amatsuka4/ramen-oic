import { Link } from "react-router-dom";

function DummyCard({ num }: { num: number }) {
    const href = "/";
    const cards = Array.from({ length: num }, (_, i) => {
        return (
            <div className="w-full h-full">
                <Link to={href}>
                    <img
                        className="w-full aspect-square object-cover"
                        src="https://placehold.co/400x700"
                        alt="ランダムなお店"
                    />
                </Link>
                <p className="text-center">
                    <Link to={href}>ラーメン</Link>
                </p>
            </div>
        );
    });
    return cards;
}

export default function Home() {
    return (
        <>
            <main className="p-10 w-full">
                <div className="w-1/2 mx-auto">
                    <p className="text-2xl text-center mb-8">ランダムなお店</p>
                    <div className="grid grid-cols-5 gap-4">
                        <DummyCard num={10} />
                    </div>
                </div>
            </main>
        </>
    );
}
