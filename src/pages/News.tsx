import { useGetCryptoNewsQuery } from "../services/apis/cryptoNews"
import Loader from "../shared/components/Loader"
import Shell from "../shared/components/Shell"
import NewsArticle from "../shared/components/NewsCard"
import FullScreenIcon from "../shared/components/fullScreen"
import { Link } from "react-router-dom"
import { Icon } from "@iconify/react"


export default function NewsPage() {
    const {data: news, isFetching} = useGetCryptoNewsQuery({
        q: 'Cryptocurrency',
        count: 15,
        freshness: 'Day',
        textFormat: 'Raw',
        safeSearch: 'Off',
    })

    if (isFetching) return <Loader />

    if (!news) return <Shell><p className="text-slate-100 font-bold">Something went wrong</p></Shell>

    return (
        <Shell>
            <div className="flex items-center justify-between">
                <Link to="/">
                    <Icon
                        color="lightgray" 
                        cursor="pointer"
                        fontSize={22}
                        icon="material-symbols:arrow-back-rounded" />
                </Link>
                <FullScreenIcon />
            </div>
            <div className="flex flex-wrap">
                {news.map((newsArticle) => (
                    <NewsArticle
                        key={newsArticle.name}
                        url={newsArticle.url}
                        title={newsArticle.name}
                        description={newsArticle.description}
                        newsImage={newsArticle.image?.thumbnail.contentUrl || 'crypto-default.jpg'}
                        providerName={newsArticle.provider[0].name}
                        providerImage={newsArticle.provider[0].image?.thumbnail.contentUrl || ''}
                        createdAt={newsArticle.datePublished}
                    />
                ))}
            </div>
        </Shell>
    )
}