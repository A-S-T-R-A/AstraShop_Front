/* eslint-disable max-len */
import { SVGProps } from "react"
import { classNames } from "shared/lib/classNames/classNames"
import styles from "./ChevronRight.module.scss"

type SVGPropsType = Omit<SVGProps<SVGSVGElement>, "width" | "height" | "className">

interface IIconProps extends SVGPropsType {
    size?: CSSDimensionType
    className?: string
}

export function ChevronRight({ size, className, ...props }: IIconProps) {
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
                viewBox="0 0 24 24"
                {...props}
            >
                <path
                    fill="currentColor"
                    d="M4 11v2h12l-5.5 5.5l1.42 1.42L19.84 12l-7.92-7.92L10.5 5.5L16 11H4Z"
                />
            </svg>
        </div>
    )
}
