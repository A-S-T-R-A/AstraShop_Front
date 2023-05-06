/* eslint-disable max-len */
import { SVGProps } from "react"

type SVGPropsType = Omit<SVGProps<SVGSVGElement>, "width" | "height">

interface ICrossRIconProps extends SVGPropsType {
    size?: number
    fillColor?: string
}

export function CrossIcon({ size = 32, fillColor = "#657380", ...props }: ICrossRIconProps) {
    return (
        <svg
            width={size}
            height={size}
            {...props}
            viewBox="0 0 32 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="M25.3327 8.5465L23.4527 6.6665L15.9993 14.1198L8.54602 6.6665L6.66602 8.5465L14.1193 15.9998L6.66602 23.4532L8.54602 25.3332L15.9993 17.8798L23.4527 25.3332L25.3327 23.4532L17.8793 15.9998L25.3327 8.5465Z"
                fill={fillColor}
            />
        </svg>
    )
}
