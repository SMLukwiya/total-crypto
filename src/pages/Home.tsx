import { useGetAllCoinsQuery } from "../services/apis/crypto"
import CryptoCard from "../shared/components/CryptoCard"
import Shell from "../shared/components/Shell"
import Header from "../shared/components/Header"

export default function HomePage() {
    const {data: crypto, isFetching} = useGetAllCoinsQuery()

    if (isFetching) return <h1>Loading...</h1>
    if (!crypto) return <h1>Somehting went wrong</h1>

    return (
        <Shell>
            <Header />
            <div className="flex items-center justify-between text-gray-300 border-b border-b-slate-400">
                <p>Name</p>
                <p>Market Cap</p>
                <p>Price</p>
            </div>
            {crypto.coins.map((coin) => (
                <CryptoCard
                    key={coin.uuid}
                    details={coin} />
            ))}
        </Shell>
    )
}