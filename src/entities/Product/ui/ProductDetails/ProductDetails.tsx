import { ReactElement } from "react"
import { Typography, TypographyColor, TypographyVariant } from "shared/ui/Typography/Typography"
import styles from "./ProductDetails.module.scss"
import { ProductImages } from "./ProductImages/ProductImages"
import { ProductInfo } from "./ProductInfo/ProductInfo"
import { Product } from "../../model/types"

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

    switch (true) {
        case isLoading:
            content = <div>Loading...</div>
            break
        case !!error:
            content = <div>{error}</div>
            break
        case !id:
            content = <div>Product doesn t exist</div>
            break
        case !!id:
            content = (
                <>
                    <div className={styles.header}>
                        <Typography variant={TypographyVariant.H3} className={styles.title}>
                            {name}
                        </Typography>
                        <Typography color={TypographyColor.ACCENT} className={styles.isPresent}>
                            В наличии
                        </Typography>
                        <Typography
                            variant={TypographyVariant.H2}
                            color={TypographyColor.DARK_GRAY}
                            className={styles.price}
                        >
                            {`${price} ${currency}`}
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
            content = <div>Unexpected error</div>
    }

    return <div className={styles.container}>{content}</div>
}
