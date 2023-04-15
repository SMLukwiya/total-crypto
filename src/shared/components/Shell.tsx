import { ReactNode } from "react";
import { useAppSelector } from "../../services/store/store";

export default function Shell({children}: {children: ReactNode}) {
    const {fullScreen} = useAppSelector(state => state.themeReducer)

    return (
        <div className={`bg-slate-800 px-2 pt-2 ${fullScreen ? 'w-full' : 'w-1/2'} h-[600px] overflow-y-auto`}>
            {children}
        </div>
    )
}