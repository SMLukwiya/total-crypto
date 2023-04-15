import { Icon } from "@iconify/react"

export default function Header() {
    return (
        <div className="flex justify-between">
                <div className="w-1/3 h-14 -mt-4">
                    <img src="512.png" className=" w-16 object-cover" />
                </div>
                <div className="w-1/3 text-center">
                    <button className="bg-gray-300 py-1 px-2">News</button>
                </div>
                <div className="w-1/3 text-right">
                    <div className="flex justify-end">
                        <Icon 
                            color="lightgray" 
                            cursor="pointer"
                            fontSize={25}
                            className="ml-1"
                            icon="ic:round-dark-mode" />
                        <Icon
                            color="lightgray" 
                            cursor="pointer"
                            fontSize={25}
                            className="ml-1"
                            icon="material-symbols:light-mode" />
                        <Icon 
                            icon="material-symbols:fit-screen-outline-rounded" 
                            color="lightgray"
                            cursor="pointer"
                            className="ml-1"
                            fontSize={25} />
                    </div>
                </div>
            </div>
    )
}