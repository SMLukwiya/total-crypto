import { Icon } from "@iconify/react"

export default function Header() {
    return (
        <div className="flex justify-between">
                <button className="bg-">Latest News</button>
                <div className="w-16 h-14 -mt-4">
                    <img src="512.png" />
                </div>
                <div>
                    <div>
                        <Icon 
                            icon="material-symbols:fit-screen-outline-rounded" 
                            color="lightgray"
                            cursor="pointer"
                            fontSize={25} />
                    </div>
                </div>
            </div>
    )
}