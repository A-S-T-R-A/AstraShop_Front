/* eslint-disable max-len */
import { SVGProps } from "react"

type SVGPropsType = Omit<SVGProps<SVGSVGElement>, "width" | "height">

interface IIconProps extends SVGPropsType {
    size?: CSSDimensionType
}

export function ChevronTop({ size, ...props }: IIconProps) {
    return (
        <svg
            width={size}
            height={size}
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <path
                fill="currentColor"
                d="M13 20h-2V8l-5.5 5.5l-1.42-1.42L12 4.16l7.92 7.92l-1.42 1.42L13 8v12Z"
            />
        </svg>
    )
}
