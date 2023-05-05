import { ProductCard } from "entities/Product"
import { ToggleProductInBasket, ToggleProductInBasketVariant } from "features/basketFeatures"
import { useTranslation } from "react-i18next"
import { classNames } from "shared/lib/classNames/classNames"
import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { CompareProducts, AddProductToFavorite } from "features/productFeatures"
import {
    getProductCarouselErrorNew,
    getProductCarouselErrorTop,
    getProductCarouselLoadingNew,
    getProductCarouselLoadingTop,
    getProductCarouselNewProducts,
    getProductCarouselTopProducts,
} from "../../model/selectors/productCarouselSelector"
import styles from "./ProductsRow.module.scss"
import { IProductSwiperVariant, ProductsSwiper } from "../ProductsSwiper/ProductsSwiper"
import { fetchTopProducts } from "../../model/services/fetchTopProducts/fetchTopProducts"
import { fetchNewProducts } from "../../model/services/fetchNewProducts/fetchNewProducts"

export enum ProducstRowVariant {
    TOP_PRODUCTS = "top",
    NEW_PRODUCTS = "new",
}

interface IProductsRowProps {
    className?: string
    variant: ProducstRowVariant
}

export function ProductsRow(props: IProductsRowProps) {
    const { className, variant } = props

    const { t } = useTranslation()
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchTopProducts())
    }, [dispatch])

    const topProducts = useSelector(getProductCarouselTopProducts)
    const newProducts = useSelector(getProductCarouselNewProducts)
    const isLoadingTop = useSelector(getProductCarouselLoadingTop)
    const isLoadingNew = useSelector(getProductCarouselLoadingNew)
    const errorTop = useSelector(getProductCarouselErrorTop)
    const errorNew = useSelector(getProductCarouselErrorNew)

    const isNew = variant === ProducstRowVariant.NEW_PRODUCTS
    const isTop = variant === ProducstRowVariant.TOP_PRODUCTS

    const productsList = isTop ? topProducts : newProducts

    useEffect(() => {
        if (isNew && !newProducts?.length && !isLoadingNew && !errorNew) {
            dispatch(fetchNewProducts())
        } else if (isTop && !topProducts?.length && !isLoadingTop && !errorTop) {
            dispatch(fetchTopProducts())
        }
    }, [
        dispatch,
        newProducts,
        topProducts,
        isLoadingNew,
        isLoadingTop,
        isNew,
        isTop,
        variant,
        errorNew,
        errorTop,
    ])

    return (
        <div className={classNames(styles.container, {}, [className])}>
            <div className={styles.title}>
                {isTop ? t("productsTopProducts") : t("productsNewProducts")}
            </div>
            <div className={styles.content}>
                <ProductsSwiper
                    variant={IProductSwiperVariant.FULL}
                    isLoading={false}
                    isWithPagination
                >
                    {productsList?.map(item => {
                        const { id, name, price, images, is_new: isNew } = item

                        return (
                            <ProductCard
                                key={id}
                                id={id}
                                is_new={isNew}
                                name={name}
                                price={price}
                                images={images}
                                Basket={
                                    <ToggleProductInBasket
                                        variant={ToggleProductInBasketVariant.ICON}
                                        product={item}
                                    />
                                }
                                AddProductToFavorite={<AddProductToFavorite />}
                                CompareProducts={<CompareProducts />}
                                className={styles.product}
                            />
                        )
                    })}
                </ProductsSwiper>
            </div>
        </div>
    )
}
