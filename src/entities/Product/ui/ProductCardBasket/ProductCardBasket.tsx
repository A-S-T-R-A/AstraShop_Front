import { ReactElement } from "react"
import { Typography, TypographyVariant } from "shared/ui/Typography/Typography"
import productPlaceholder from "shared/assets/images/productPlaceholder.jpg"
import styles from "./ProductCardBasket.module.scss"
import { Product } from "../../model/types"

interface ProductCardBasketProps extends Product {
    Delete: ReactElement
    Counter: ReactElement
    currency: string
}

export function ProductCardBasket(props: ProductCardBasketProps) {
    const { images = [], name, price, Delete, Counter, currency } = props
    const imgSrc = images?.[0] ? images[0] : productPlaceholder

    return (
        <div className={styles.container}>
            <img src={imgSrc} alt="" className={styles.img} />
            <div className={styles.info}>
                <Typography variant={TypographyVariant.P}>{name}</Typography>
                <Typography variant={TypographyVariant.H3} isBold>
                    {`${price} ${currency}`}
                </Typography>
            </div>
            <div className={styles.counter}>{Counter}</div>
            {Delete}
        </div>
    )
}
