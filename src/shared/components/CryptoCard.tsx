import millify from "millify";
import { CryptoCoin } from "../types/crypto.shema";

export default function CryptoCard({details}: {details: CryptoCoin}) {
    const {name, price, change, iconUrl, symbol, color} = details;

    const reduction = change[0] === "-"

    return (
        <div className="flex items-center justify-between">
            <div className="flex items-center">
                <div className=" w-7 h-7 rounded-full">
                    <img src={iconUrl} />
                </div>
                <div className="ml-2">
                    <p className="text-sm text-white">{symbol}</p>
                    <p className="text-white text-xs">{name}</p>
                </div>
            </div>
            <div className="flex flex-col items-end">
                <p className="text-right text-white text-sm font-bold">${parseFloat(price).toFixed(2)}</p>
                <p 
                    className={`${reduction ? 'bg-red-600' : 'bg-green-500'}
                        ${reduction ? 'text-red-700' : 'text-green-700'}
                        bg-opacity-20 py-1 w-12 text-center text-sm rounded-md`}
                    >
                    {change}
                </p>
            </div>
        </div>
    )
}