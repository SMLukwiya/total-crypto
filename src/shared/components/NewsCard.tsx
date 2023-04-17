import { Link } from "react-router-dom";
import { formatTime } from "../../utils/helpers";

interface NewsDetails {
    url: string;
    title: string;
    newsImage: string;
    description: string;
    providerName: string;
    providerImage: string;
    createdAt: string;
}
export default function NewsArticle(newsDetails: NewsDetails) {
    const {url, title, newsImage, description, providerName, providerImage, createdAt} = newsDetails
    return (
        <Link to={url} target="_blank" rel="noopener noreferrer">
            <div className="p-2 w-[370px] cursor-pointer">
                <div className="flex justify-between">
                    <p className="text-slate-100">{title.substring(0, 100)}</p>
                    <img src={newsImage} className=" w-16 h-16 rounded-md object-cover" alt="News Article" />
                </div>
                <p className="text-slate-200 text-xs">{description.substring(0, 200)}...</p>
                <div className="flex items-center justify-between mt-2">
                    <div className="flex items-center">
                        <img src={providerImage} className=" w-8 h-8 object-cover" alt="News Provider]" />
                        <p className="text-slate-300 text-xs ml-2">{providerName}</p>
                    </div>
                    <p className="text-slate-300 text-xs">{formatTime(createdAt)}</p>
                </div>
            </div>
        </Link>
    )
}