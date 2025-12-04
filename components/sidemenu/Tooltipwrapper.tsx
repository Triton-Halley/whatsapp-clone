import {
    Tooltip,
    TooltipContent,
    TooltipTrigger,
} from "@/components/ui/tooltip"

export enum TooltipPosition {
    top = "top",
    bottom = "bottom",
    left = "left",
    right = "right"
}

export default function Tooltipwrapper({
    children,
    content,
    position = TooltipPosition.top
}: Readonly<{
    children: React.ReactNode;
    content: string
    position?: TooltipPosition
}>) {
    return (
        <Tooltip >
            <TooltipTrigger asChild >
                {children}
            </TooltipTrigger>
            <TooltipContent side={position}  className="bg-gray-300 text-black" >
                <p>{content}</p>
            </TooltipContent>
        </Tooltip>
    )
}
