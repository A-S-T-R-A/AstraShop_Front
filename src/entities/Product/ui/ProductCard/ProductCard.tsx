import { ReactElement } from "react"
import { Label } from "shared/ui/Label/Label"
import { Typography } from "shared/ui/Typography/Typography"
import { classNames } from "shared/lib/classNames/classNames"
import { useNavigate } from "react-router-dom"
import { RoutePath } from "shared/config/routeConfig/routeConfig"
import productPlaceholder from "shared/assets/images/productPlaceholder.jpg"
import styles from "./ProductCard.module.scss"
import { Product } from "../../model/types"

interface ProductCardProps extends Product {
    currency?: string
    Basket?: ReactElement
    className?: string
}

export const ProductCard = (props: ProductCardProps) => {
    const { id, is_new: isNew, images, className, name, price, currency = "$", Basket } = props
    const productImage = images?.[0] ? images[0] : productPlaceholder

    const navigate = useNavigate()

    return (
        <div
            className={classNames(styles.container, {}, [className])}
            onClick={() => navigate(RoutePath.product_details + id)}
        >
            <div className={styles.header}>
                {!!isNew && <Label value="новый" className={styles.label} />}
                <img className={styles.image} src={productImage} alt="" decoding="async" />
            </div>
            <div className={styles.footer}>
                <Typography className={styles.footerDescription}>{name}</Typography>
                <div className={styles.price}>
                    <Typography className={styles.footerPrice} isBold>
                        {`${price} ${currency}`}
                    </Typography>
                    {Basket}
                </div>
            </div>
        </div>
    )
}
