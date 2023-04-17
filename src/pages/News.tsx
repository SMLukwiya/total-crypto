import { useGetCryptoNewsQuery } from "../services/apis/cryptoNews"


export default function NewsPage() {
    const {data, isFetching} = useGetCryptoNewsQuery({
        q: 'Cryptocurrency',
        count: 10,
        freshness: 'Day',
        textFormat: 'Raw',
        safeSearch: 'Off',
    })
    console.log('Qeury Clinet', data)

    return (
        <div>

        </div>
    )
}