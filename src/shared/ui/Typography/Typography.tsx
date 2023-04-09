import { classNames } from "shared/lib/classNames/classNames"
import { HTMLAttributes, memo, ReactNode } from "react"
import styles from "./Typography.module.scss"

export enum TypographyColor {
    BASE = "base",
    DARK_GRAY = "darkGray",
    INVERTED = "inverted",
    ACCENT = "accent",
}

export enum TypographyVariant {
    H1 = "variantH1",
    H2 = "variantH2",
    H3 = "variantH3",
    H4 = "variantH4",
    P = "variantP",
}

interface TextProps extends HTMLAttributes<HTMLDivElement> {
    className?: string
    children: ReactNode
    variant?: TypographyVariant
    color?: TypographyColor
    isBold?: boolean
}

export const Typography = memo((props: TextProps) => {
    const {
        className,
        children,
        variant = TypographyVariant.P,
        color = TypographyColor.BASE,
        isBold = false,
        ...restProps
    } = props

    return (
        <div
            data-testid="typography"
            className={classNames(styles.Text, { [styles[color]]: color, [styles.bold]: isBold }, [
                className,
                styles[variant],
            ])}
            {...restProps}
        >
            {children}
        </div>
    )
})
