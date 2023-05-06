import { classNames, Mods } from "shared/lib/classNames/classNames"
import { ButtonHTMLAttributes, memo, ReactNode } from "react"
import styles from "./Button.module.scss"

export enum ButtonVariant {
    OUTLINED = "outlined",
    CLEAR = "clear",
    FILLED = "filled",
}

export enum ButtonColor {
    ACCENT = "accent",
    ATTENTION = "attention",
    INVERTED = "inverted",
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    className?: string
    variant?: ButtonVariant
    color?: ButtonColor
    disabled?: boolean
    children?: ReactNode
}

export const Button = memo((props: ButtonProps) => {
    const {
        className,
        variant = ButtonVariant.OUTLINED,
        disabled,
        color = ButtonColor.ACCENT,
        children,
        ...restProps
    } = props

    return (
        <button
            data-testid="button"
            type="button"
            className={classNames(styles.button, { [styles.disabled]: disabled }, [
                styles[variant],
                styles[color],
                className,
            ])}
            disabled={disabled}
            {...restProps}
        >
            {children}
        </button>
    )
})
