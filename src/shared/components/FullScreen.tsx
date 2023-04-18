import { Icon } from "@iconify/react";
import { useAppDispatch, useAppSelector } from "../../services/store/store";
import { switchScreenSize } from "../../services/store/theme";


export default function FullScreenIcon() {
    const {fullScreen} = useAppSelector(state => state.themeReducer)
        const dispatch = useAppDispatch()

    function screenSizeHandler() {
        dispatch(switchScreenSize(!fullScreen))
    }

    return (
        <Icon 
            icon="material-symbols:fit-screen-outline-rounded" 
            color="lightgray"
            cursor="pointer"
            className="ml-1"
            onClick={screenSizeHandler}
            fontSize={25} />
    )
}