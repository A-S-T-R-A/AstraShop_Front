import { Button, ButtonVariant } from "shared/ui/Button/Button"
import { Typography, TypographyVariant } from "shared/ui/Typography/Typography"
import { AddToBasket } from "shared/assets/icons/others"
import list from "./list"
import styles from "./ProductInfoIsland.module.scss"

export function productInfoIsland() {
    const { name, state, price } = list
    return (
        <div>
            <div className={styles.container}>
                <Typography variant={TypographyVariant.H3} isBold className={styles.productName}>
                    {name}
                </Typography>
                <p className={styles.productState}>{state}</p>
                <Typography variant={TypographyVariant.H2} isBold className={styles.productPrice}>
                    {`$${price}`}
                </Typography>
                <Typography className={styles.productBtns}>
                    <button className={styles.addBtn}>
                        <AddToBasket className={styles.iconInBtn} />
                        Add to cart
                    </button>
                    <button className={styles.buyBtn}>Buy Now</button>
                </Typography>
            </div>
        </div>
    )
}
