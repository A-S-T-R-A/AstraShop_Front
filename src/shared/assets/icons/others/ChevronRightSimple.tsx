import { SVGProps } from "react"

type SVGPropsType = Omit<SVGProps<SVGSVGElement>, "width" | "height">

interface ICrossRIconProps extends SVGPropsType {
    size?: number
}

export function ChevronRightSimple({ size = 32, ...props }: ICrossRIconProps) {
    return (
        <svg
            width={size}
            height={size}
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={3}
            stroke="currentColor"
            className="w-6 h-6"
            {...props}
        >
            <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
        </svg>
    )
}
