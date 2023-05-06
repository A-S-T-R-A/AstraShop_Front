import { Typography, TypographyColor, TypographyVariant } from "shared/ui/Typography/Typography"
import { useTranslation } from "react-i18next"
import { Button } from "shared/ui/Button/Button"
import { ToggleProductInBasket, ToggleProductInBasketVariant } from "features/basketFeatures"
import { basketActions, getBasketProducts } from "entities/Basket"
import { useDispatch, useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"
import { RoutePath } from "shared/config/routeConfig/const"
import { getProductDetails } from "../../../../model/selectors/productDetailsSelectors"
import styles from "./ProductPriceInfo.module.scss"

export function ProductPriceInfo() {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const { t } = useTranslation()

    const productDetails = useSelector(getProductDetails)
    const basketProducts = useSelector(getBasketProducts)
    const productInStock = true /* to be changed */
    const productCurrency = "$" /* to be changed */

    const isProductInBasket = basketProducts.some(item => item.id === productDetails?.id)

    function clickHandler() {
        if (productDetails && !isProductInBasket) {
            dispatch(basketActions.addToBasket(productDetails))
        }
        navigate(RoutePath.order)
    }

    return (
        <div className={styles.container}>
            <Typography className={styles.productName} variant={TypographyVariant.H2} isBold>
                {productDetails?.name}
            </Typography>
            <Typography className={styles.stock} color={TypographyColor.ACCENT}>
                {productInStock ? t("loadingProcessProductExist") : t("outOfStock")}
            </Typography>
            <Typography variant={TypographyVariant.H2} className={styles.price} isBold>
                {`${productCurrency} ${productDetails?.price.toLocaleString()}`}
            </Typography>
            <div className={styles.btnContainer}>
                <ToggleProductInBasket
                    variant={ToggleProductInBasketVariant.BUTTON}
                    product={productDetails}
                />
                <Button onClick={clickHandler}>{t("buyNowBtn")}</Button>
            </div>
        </div>
    )
}
