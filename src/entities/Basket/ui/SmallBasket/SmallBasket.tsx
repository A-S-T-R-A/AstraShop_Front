import { ShoppingBagIcon } from "shared/assets/icons/others"
import { classNames } from "shared/lib/classNames/classNames"
import { Label, LabelColor, LabelFontSize } from "shared/ui/Label/Label"
import styles from "./SmallBasket.module.scss"

export enum SmallBasketColor {
    NORMAL = "normal",
    INVERTED = "inverted",
}

interface SmallBasketProps {
    className?: string
    onClick: () => void
    basketCount: number
    color?: SmallBasketColor
}

export function SmallBasket({
    className,
    onClick,
    basketCount,
    color = SmallBasketColor.NORMAL,
}: SmallBasketProps) {
    return (
        <div className={classNames(styles.container, {}, [className])} onClick={onClick}>
            <ShoppingBagIcon className={classNames(styles.icon, {}, [styles[color]])} />
            <Label
                value={basketCount}
                fontSize={LabelFontSize.FONT_NORMAL}
                color={basketCount ? LabelColor.RED : LabelColor.GRAY}
            />
        </div>
    )
}
