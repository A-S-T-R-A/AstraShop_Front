import { RoutePath } from "shared/config/routeConfig/const"
import { useNavigate } from "react-router-dom"
import { ReactElement } from "react"
import { Typography, TypographyColor, TypographyVariant } from "shared/ui/Typography/Typography"
import { useTranslation } from "react-i18next"
import { UnexpectedError } from "shared/components/UnexpectedError/UnexpectedError"
import styles from "./ProductDetails.module.scss"
import { ProductImages } from "./ProductImages/ProductImages"
import { ProductInfo } from "./ProductInfo/ProductInfo"
import { Product } from "../../model/types"
import { ProductDetailsSkeleton } from "./ProductDetailsSkeleton/ProductDetailsSkeleton"

interface ProductDetailsProps extends Product {
    isLoading: boolean
    error?: string
    Basket: ReactElement
    currency?: string
}

export function ProductDetails(props: ProductDetailsProps) {
    const {
        isLoading,
        error,
        id,
        name,
        price,
        currency = "$",
        images,
        Basket,
        description,
        attributes,
    } = props

    let content
    const { t } = useTranslation()
    const navigate = useNavigate()

    switch (true) {
        case isLoading:
            content = (
                <ProductDetailsSkeleton
                    headerStyles={styles.header}
                    imagesStyles={styles.images}
                    btnStyles={styles.btn}
                    descriptionStyles={styles.description}
                />
            )
            break
        case !!error:
            navigate(RoutePath.not_found)
            break
        case !id:
            navigate(RoutePath.not_found)
            break
        case !!id:
            content = (
                <>
                    <div className={styles.header}>
                        <Typography variant={TypographyVariant.H3} className={styles.title}>
                            {name}
                        </Typography>
                        <Typography color={TypographyColor.ACCENT} className={styles.isPresent}>
                            {t("loadingProcessProductExist")}
                        </Typography>
                        <Typography
                            variant={TypographyVariant.H2}
                            color={TypographyColor.DARK_GRAY}
                            className={styles.price}
                        >
                            {`${currency} ${price.toLocaleString()}`}
                        </Typography>
                    </div>
                    <ProductImages list={images} className={styles.images} />
                    <div className={styles.btn}>{Basket}</div>
                    <ProductInfo
                        className={styles.description}
                        description={description}
                        attributes={attributes}
                    />
                </>
            )
            break
        default:
            content = <UnexpectedError className={styles.error} />
    }

    return <div className={styles.container}>{content}</div>
}
