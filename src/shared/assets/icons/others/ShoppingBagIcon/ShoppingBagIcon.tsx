import { classNames } from "shared/lib/classNames/classNames"
import styles from "./ShoppingBagIcon.module.scss"

export enum ShoppingBagIconColor {
    GRAY = "gray",
    RED = "red",
}

interface ShoppingBagIconProps {
    className?: string
    color?: ShoppingBagIconColor
}

export function ShoppingBagIcon(props: ShoppingBagIconProps) {
    const { className, color = ShoppingBagIconColor.GRAY } = props
    return (
        <svg
            className={classNames(styles.icon, {}, [className, styles[color]])}
            width="32"
            height="32"
            viewBox="0 0 32 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                // eslint-disable-next-line max-len
                d="M6.66667 29.3332H25.3333C26.804 29.3332 28 28.1372 28 26.6665V11.9998C28 11.6462 27.8595 11.3071 27.6095 11.057C27.3594 10.807 27.0203 10.6665 26.6667 10.6665H22.6667V9.33317C22.6667 5.65717 19.676 2.6665 16 2.6665C12.324 2.6665 9.33333 5.65717 9.33333 9.33317V10.6665H5.33333C4.97971 10.6665 4.64057 10.807 4.39052 11.057C4.14048 11.3071 4 11.6462 4 11.9998V26.6665C4 28.1372 5.196 29.3332 6.66667 29.3332ZM12 9.33317C12 7.12784 13.7947 5.33317 16 5.33317C18.2053 5.33317 20 7.12784 20 9.33317V10.6665H12V9.33317ZM6.66667 13.3332H9.33333V15.9998H12V13.3332H20V15.9998H22.6667V13.3332H25.3333L25.336 26.6665H6.66667V13.3332Z"
                fill="#657380"
            />
        </svg>
    )
}
