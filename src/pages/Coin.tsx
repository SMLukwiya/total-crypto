import { Icon } from "@iconify/react"
import { useParams } from "react-router-dom"
import { Link } from "react-router-dom"
import Shell from "../shared/components/Shell"
import { useGetCoinByIdQuery } from "../services/apis/crypto"

export default function Coin() {
    const {coinId} = useParams()
    if (!coinId) return <p>Loading....</p>
    const {data} = useGetCoinByIdQuery(coinId)
    
    return (
        <Shell>
            <div className="flex">
                <Link to="/">
                    <Icon
                        color="lightgray" 
                        cursor="pointer"
                        fontSize={25}
                        icon="material-symbols:arrow-back-rounded" />
                </Link>

            </div>
            <h1>Coin</h1>
        </Shell>
    )
}