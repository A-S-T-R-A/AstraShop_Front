/* eslint-disable max-len */
import { SVGProps } from "react"
import { classNames } from "shared/lib/classNames/classNames"
import styles from "./ChevronLeft.module.scss"

type SVGPropsType = Omit<SVGProps<SVGSVGElement>, "width" | "height" | "className">

interface IIconProps extends SVGPropsType {
    size?: CSSDimensionType
    className?: string
}

export function ChevronLeft({ size, className, ...props }: IIconProps) {
    return (
        <div
            className={classNames(styles.container, {}, [className])}
            style={{
                width: size,
                height: size,
            }}
        >
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width="100%"
                height="100%"
                {...props}
                viewBox="0 0 24 24"
            >
                <path
                    fill="currentColor"
                    d="M20 11v2H8l5.5 5.5l-1.42 1.42L4.16 12l7.92-7.92L13.5 5.5L8 11h12Z"
                />
            </svg>
        </div>
    )
}
