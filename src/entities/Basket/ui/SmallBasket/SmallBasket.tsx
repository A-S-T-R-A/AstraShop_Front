import { ShoppingBagIcon } from "shared/assets/icons/others"
import { classNames } from "shared/lib/classNames/classNames"
import { Label, LabelColor, LabelFontSize } from "shared/ui/Label/Label"
import styles from "./SmallBasket.module.scss"

const BASKET_COUNT = 0

interface SmallBasketProps {
    className?: string
    onClick: () => void
    basketCount: number
}

export function SmallBasket({ className, onClick, basketCount }: SmallBasketProps) {
    return (
        <div className={classNames(styles.container, {}, [className])} onClick={onClick}>
            <ShoppingBagIcon className={styles.icon} />
            <Label
                value={basketCount}
                fontSize={LabelFontSize.FONT_NORMAL}
                color={basketCount ? LabelColor.RED : LabelColor.GRAY}
            />
        </div>
    )
}
