import { ReactNode } from "react";

export default function Shell({children}: {children: ReactNode}) {
    return (
        <div className="bg-slate-800 px-2 pt-2 w-1/2 h-[600px] overflow-y-auto">
            {children}
        </div>
    )
}