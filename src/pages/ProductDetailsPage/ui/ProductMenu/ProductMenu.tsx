import { useState } from "react"
import { classNames } from "shared/lib/classNames/classNames"
import { Typography, TypographyColor, TypographyVariant } from "shared/ui/Typography/Typography"
import styles from "./ProductMenu.module.scss"
import { navList as list } from "./const/navList"

export function ProductMenu() {
    const [current, setCurrent] = useState(0)

    return (
        <div>
            <div className={styles.navigation}>
                {list.map((item, index) => (
                    <Typography
                        key={item.name}
                        variant={TypographyVariant.H4}
                        color={TypographyColor.DARK_GRAY}
                        isBold
                        className={classNames(styles.navItem, {
                            [styles.navActive]: index === current,
                        })}
                        onClick={() => setCurrent(index)}
                    >
                        {item.name}
                    </Typography>
                ))}
            </div>
            {list.map((item, index) => {
                if (index === current) {
                    return <div key={item.name}>{item.el}</div>
                }
                return null
            })}
        </div>
    )
}
