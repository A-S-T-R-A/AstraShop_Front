import { ReactElement } from "react"
import { Label, LabelColor } from "shared/ui/Label/Label"
import { Typography, TypographyColor, TypographyVariant } from "shared/ui/Typography/Typography"
import { classNames } from "shared/lib/classNames/classNames"
import { useNavigate } from "react-router-dom"
import { RoutePath } from "shared/config/routeConfig/const"
import productPlaceholder from "shared/assets/images/productPlaceholder.jpg"
import { AsyncImage } from "shared/ui/AsyncImage"
import { useTranslation } from "react-i18next"
import { StarRating } from "shared/assets/icons/productCardFeatures"
import { v4 as uuid } from "uuid"
import { ImageFit } from "shared/ui/AsyncImage/AsyncImage"
import styles from "./ProductCard.module.scss"
import { Product } from "../../model/types"
import { renderStars } from "../../lib/renderStars"

interface ProductCardProps extends Product {
    currency?: string
    Basket?: ReactElement
    AddProductToFavorite?: ReactElement
    CompareProducts?: ReactElement
    isTop?: boolean
    oldPrice?: number
    rating?: number
    className?: string
}

export const ProductCard = (props: ProductCardProps) => {
    const {
        id,
        is_new: isNew,
        isTop,
        rating = 0,
        images,
        className,
        name,
        price,
        oldPrice,
        currency = "$",
        Basket,
        AddProductToFavorite,
        CompareProducts,
    } = props
    const productImage = images?.[0] ? images[0] : productPlaceholder
    const { t } = useTranslation()
    const navigate = useNavigate()

    const discount = !!oldPrice && Math.round(((oldPrice - price) / oldPrice) * 100)

    const starsArray = renderStars(rating)

    return (
        <div
            className={classNames(styles.container, {}, [className])}
            onClick={() => navigate(`${RoutePath.product_details}/${id}`)}
        >
            <div className={styles.imageContainer}>
                <div className={styles.labelContainer}>
                    {!!isNew && (
                        <Label value={`${t("newProductLabel")}`} className={styles.label} />
                    )}
                    {!!isTop && (
                        <Label value="top" className={styles.label} color={LabelColor.ATTENTION} />
                    )}
                </div>
                <div className={styles.cardFeatures}>
                    {AddProductToFavorite}
                    {CompareProducts}
                </div>
                <AsyncImage
                    objectFit={ImageFit.COVER}
                    className={styles.image}
                    src={productImage}
                />
            </div>
            <div className={styles.descriptionContainer}>
                <Typography className={styles.name}>{name}</Typography>
                {rating ? (
                    <div className={styles.rating}>
                        {starsArray.slice(0, 5).map(item => (
                            <StarRating key={uuid()} precentage={item * 100} />
                        ))}
                    </div>
                ) : (
                    <Typography
                        variant={TypographyVariant.EXTRA_SMALL}
                        color={TypographyColor.DARK_GRAY}
                        className={styles.rating}
                    >
                        No reviews
                    </Typography>
                )}
                <div className={styles.priceContainer}>
                    {!oldPrice ? (
                        <Typography className={styles.price} isBold>
                            {`${currency} ${price.toLocaleString()}`}
                        </Typography>
                    ) : (
                        <>
                            <Typography
                                variant={TypographyVariant.SMALL}
                                color={TypographyColor.DARK_GRAY}
                                className={styles.priceDiscount}
                            >
                                <s>{`${currency} ${oldPrice.toLocaleString()}`}</s>
                            </Typography>
                            <Label value={`${discount}%`} className={styles.discountLabel} />
                            <Typography isBold className={styles.newPrice}>
                                {`${currency} ${price.toLocaleString()}`}
                            </Typography>
                        </>
                    )}
                </div>
                <div className={styles.basket}>{Basket}</div>
            </div>
        </div>
    )
}
