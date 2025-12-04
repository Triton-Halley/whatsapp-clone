import * as React from "react"

import { cn } from "@/lib/utils"

export default function Chip({ ref, className, props, children }: Readonly<{
    ref?: React.Ref<HTMLDivElement>,
    className?: string | undefined, props?: React.ComponentProps<"div">
    children: React.ReactNode
}>): React.ReactNode {
    return (<div
        ref={ref}
        className={cn(
            "bg-green-900/40 text-green-200 py-1 px-3 rounded-full"
            , className
        )}
        {...props}
    >
        {children}
    </div>)
}