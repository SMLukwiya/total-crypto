import { Icon } from "@iconify/react"
import { useAppDispatch, useAppSelector } from "../../services/store/store"
import { switchColorMode, switchScreenSize } from "../../services/store/theme"
import { Link } from "react-router-dom"

export default function Header() {
    const {fullScreen, colorMode} = useAppSelector(state => state.themeReducer)
    const dispatch = useAppDispatch()

    function screenSizeHandler() {
        dispatch(switchScreenSize(!fullScreen))
    }

    function colorModeHandler() {
        dispatch(switchColorMode(colorMode === 'dark' ? 'light' : 'dark'))
    }

    return (
        <div className="flex justify-between">
                <div className="w-1/3 h-14 -mt-4">
                    <img src="512.png" className=" w-16 object-cover" />
                </div>
                <div className="w-1/3 text-center">
                    <Link to="/news">
                        <button className="bg-gray-300 py-1 px-2">News</button>
                    </Link>
                </div>
                <div className="w-1/3 text-right">
                    <div className="flex justify-end">
                        {colorMode === 'dark' ? 
                        <Icon 
                            color="lightgray" 
                            cursor="pointer"
                            fontSize={25}
                            className="ml-1 opacity-60"
                            icon="ic:round-dark-mode" /> :
                        <Icon
                            color="lightgray" 
                            cursor="pointer"
                            fontSize={25}
                            className="ml-1 opacity-60"
                            icon="material-symbols:light-mode" />
                        }
                        <Icon 
                            icon="material-symbols:fit-screen-outline-rounded" 
                            color="lightgray"
                            cursor="pointer"
                            className="ml-1"
                            onClick={screenSizeHandler}
                            fontSize={25} />
                    </div>
                </div>
            </div>
    )
}