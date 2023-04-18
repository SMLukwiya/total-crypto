import { useGetAllCoinsQuery } from "../services/apis/crypto"
import {Shell, Header, Loader, CryptoCard} from "../shared/components"

export default function HomePage() {
    const {data: crypto, isFetching} = useGetAllCoinsQuery()

    if (isFetching) return <Loader />
    if (!crypto) return <Shell>Somehting went wrong</Shell>

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