import millify from "millify";
import { CryptoCoin } from "../types/crypto.shema";

export default function CryptoCard({details}: {details: CryptoCoin}) {
    const {name, price, change, iconUrl, symbol, marketCap, color} = details;

    const reduction = change[0] === "-"

    return (
        <div className="flex items-center justify-between mb-3">
            <div className="flex items-center w-1/3">
                <div className=" w-8 h-8 rounded-full">
                    <img src={iconUrl} />
                </div>
                <div className="ml-2">
                    <p className="text-sm text-white">{symbol}</p>
                    <p className="text-gray-300 text-xs">{name}</p>
                </div>
            </div>
            <div className="w-1/3">
                <p className="text-center text-sm text-gray-300">${millify(parseFloat(marketCap))}</p>
            </div>
            <div className="flex flex-col items-end w-1/3">
                <p className="text-right text-white text-sm font-bold">${parseFloat(price).toFixed(2)}</p>
                <p 
                    className={`${reduction ? 'bg-red-600' : 'bg-green-500'}
                        ${reduction ? 'text-red-500' : 'text-green-500'}
                        bg-opacity-20 py-1 w-12 font-bold text-center text-xs rounded-md`}
                    >
                    {change}
                </p>
            </div>
        </div>
    )
}