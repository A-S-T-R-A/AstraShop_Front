import { ReactElement } from "react"
import { Label } from "shared/ui/Label/Label"
import { Typography } from "shared/ui/Typography/Typography"
import { classNames } from "shared/lib/classNames/classNames"
import { useNavigate } from "react-router-dom"
import { RoutePath } from "shared/config/routeConfig/const"
import productPlaceholder from "shared/assets/images/productPlaceholder.jpg"
import { AsyncImage, ImageFit } from "shared/ui/AsyncImage"
import { useTranslation } from "react-i18next"
import { Product } from "../../model/types"
import styles from "./ProductCardSale.module.scss"

interface ProductCardProps extends Product {
    currency?: string
    Basket?: ReactElement
    className?: string
}

export const ProductCardSale = (props: ProductCardProps) => {
    const { id, is_new: isNew, images, className, name, price, currency = "$", Basket } = props
    const productImage = images?.[0] ? images[0] : productPlaceholder
    const { t } = useTranslation()
    const navigate = useNavigate()

    return (
        <div
            className={classNames(styles.container, {}, [className])}
            onClick={() => navigate(`${RoutePath.product_details}/${id}`)}
        >
            <div className={styles.header}>
                {/* {!!isNew && <Label value={`${t("newProductLabel")}`} className={styles.label} />} */}
                <AsyncImage
                    objectFit={ImageFit.CONTAIN}
                    className={styles.image}
                    src={productImage}
                />
            </div>
            <div className={styles.footer}>
                <Typography className={styles.footerDescription}>{name}</Typography>
                <div className={styles.price}>
                    <Typography className={styles.footerPrice} isBold>
                        {`${currency} ${price.toLocaleString()}`}
                    </Typography>
                    {Basket}
                </div>
            </div>
        </div>
    )
}
