import { classNames } from "shared/lib/classNames/classNames"
import styles from "./Label.module.scss"

export enum LabelColor {
    GRAY = "gray",
    RED = "red",
    ATTENTION = "attention",
}

export enum LabelFontSize {
    FONT_NORMAL = "fontNormal",
    FONT_SMALL = "fontSmall",
}

interface InputProps {
    color?: LabelColor
    fontSize?: LabelFontSize
    value: string | number
    className?: string
}

export function Label(props: InputProps) {
    const { color = LabelColor.RED, fontSize = LabelFontSize.FONT_SMALL, value, className } = props
    return (
        <div
            className={classNames(styles.labelContainer, {}, [
                styles[fontSize],
                styles[color],
                className,
            ])}
            data-testid="label"
        >
            <span className={styles.content}>{value}</span>
        </div>
    )
}
