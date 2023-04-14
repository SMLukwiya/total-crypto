import { ReactNode } from "react";

export default function Shell({children}: {children: ReactNode}) {
    return (
        <div className="bg-slate-800">
            {children}
        </div>
    )
}