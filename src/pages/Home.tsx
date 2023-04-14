import { useGetAllCoinsQuery } from "../services/apis/crypto"
import CryptoCard from "../shared/components/CryptoCard"
import Shell from "../shared/components/Shell"

export default function HomePage() {
    const {data: crypto, isFetching} = useGetAllCoinsQuery()

    if (isFetching) return <h1>Loading...</h1>
    if (!crypto) return <h1>Somehting went wrong</h1>
    console.log(crypto)

    return (
        <Shell>
            <div className="flex items-center justify-between">
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