import {Line} from "react-chartjs-2";
import {CategoryScale, LinearScale, Chart, PointElement, LineController, LineElement} from "chart.js"
import type {ChartData, ChartOptions} from "chart.js"
import { CoinHistory } from "../types/crypto.shema";

Chart.register(CategoryScale, LinearScale, PointElement, LineElement);

interface LineProps {
    data: ChartData<'line'>,
    options: ChartOptions<'line'>
}

export default function LineChart({coinHistory}: {coinHistory: CoinHistory[]}) {
    const coinPrice = [];
    const coinTimestamp = []

    for (let {price, timestamp} of coinHistory) {
        coinPrice.push(parseFloat(price))
        coinTimestamp.push(new Date(timestamp).getDate())
    }

    const data: LineProps["data"] = {
        labels: coinTimestamp,
        datasets: [{
            label: 'Price in USD',
            data: coinPrice,
            fill: false,
            backgroundColor: 'blue',
            borderColor: 'lightblue',
            stepped: true,
            borderCapStyle: 'square'
        }]
    }

    const options: LineProps["options"] = {
        scales: {
            x: {
                beginAtZero: true
            }
        }
    }
    return (
        <>
            <div>
                <p className="text-gray-200">Price Chart</p>
            </div>
            <Line data={data} options={options} />
        </>
    )
}