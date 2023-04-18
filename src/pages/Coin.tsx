import { useState } from "react"
import { Icon } from "@iconify/react"
import { useParams } from "react-router-dom"
import { Link } from "react-router-dom"
import {Shell, LineChart, Loader} from "../shared/components"
import { useGetCoinByIdQuery, useGetCoinHistoryQuery } from "../services/apis/crypto"
import { useDispatch } from "react-redux"
import { switchScreenSize } from "../services/store/theme"
import { useAppSelector } from "../services/store/store"

const time = ['3h', '24h', '7d', '30d', '1y', '3m', '3y', '5y']

export default function Coin() {
    const [timePeriod, setTimePeriod] = useState('7d')
    const {coinId} = useParams()
    const {fullScreen} = useAppSelector(state => state.themeReducer)
    const dispatch = useDispatch()
    if (!coinId) return <p>Loading....</p>
    const {data: coin, isFetching} = useGetCoinByIdQuery(coinId)
    const {data: coinHistory} = useGetCoinHistoryQuery({coinId, timePeriod})

    if (isFetching) return <Loader />

    if (!coin || !coinHistory) return <Shell>Something went wrong</Shell>

    const reduction = coin.change[0] === "-"

    function screenSizeHandler() {
        dispatch(switchScreenSize(!fullScreen))
    }
    
    return (
        <Shell>
            <div className="flex items-center justify-between">
                <div className="flex items-center">
                    <Link to="/">
                        <Icon
                            color="lightgray" 
                            cursor="pointer"
                            fontSize={22}
                            icon="material-symbols:arrow-back-rounded" />
                    </Link>
                    <p className="text-sm text-gray-200">{coin.symbol} / {coin.name}</p>
                </div>
                <div className="flex">
                    <div className="bg-slate-200 px-2 rounded-lg text-sm text-center">USD</div>
                    <Icon 
                        icon="material-symbols:fit-screen-outline-rounded" 
                        color="lightgray"
                        cursor="pointer"
                        className="ml-1"
                        onClick={screenSizeHandler}
                        fontSize={25} />
                </div>
            </div>
            <div className="flex items-center mt-2">
                <p className="text-lg font-bold text-gray-100 mr-2">${parseFloat(coin.price).toFixed(2)}</p>
                <p 
                    className={`${reduction ? 'bg-red-600' : 'bg-green-500'}
                        ${reduction ? 'text-red-500' : 'text-green-500'}
                        bg-opacity-20 py-1 w-12 font-bold text-center text-xs rounded-md`}
                    >
                    {coin.change}
                </p>
            </div>
            <div className="flex items-center justify-between mt-3">
                <div>
                    <p className="text-xs font-bold text-slate-400">Market Cap</p>
                    <p className="text-slate-200">${parseFloat(coin.marketCap).toLocaleString()}</p>
                </div>
                <div>
                    <p className="text-xs font-bold text-slate-400">Volume</p>
                    <p className="text-slate-200">${parseFloat(coin["24hVolume"]).toLocaleString()}</p>
                </div>
            </div>
            <div className="flex items-center justify-around mt-7">
                {time.map((period) => 
                <p
                    key={period}
                    onClick={() => setTimePeriod(period)}
                    className={`
                        ${timePeriod === period ? 'text-slate-600' : 'text-slate-300'} 
                        ${timePeriod === period ? 'bg-slate-300' : 'bg-slate-600'} rounded-md w-10 text-center text-sm cursor-pointer
                        `}>
                    {period}
                </p>)}
            </div>
            <div className="mt-3">
                <LineChart coinHistory={coinHistory} />
            </div>
        </Shell>
    )
}