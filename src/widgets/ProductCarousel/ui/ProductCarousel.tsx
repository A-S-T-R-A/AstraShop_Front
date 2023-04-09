import { memo, useEffect, useMemo } from "react"
import { useDispatch, useSelector } from "react-redux"
import Slider from "react-slick"
import { Product, ProductCard } from "entities/Product"
import { classNames } from "shared/lib/classNames/classNames"
import "slick-carousel/slick/slick.scss"
import "slick-carousel/slick/slick-theme.scss"
import { ToggleProductInBasket, ToggleProductInBasketVariant } from "features/basketFeatures"
import { sliderSettings } from "./sliderSettings"
import styles from "./ProductCarousel.module.scss"
import { fetchTopProducts } from "../model/services/fetchTopProducts/fetchTopProducts"
import { fetchNewProducts } from "../model/services/fetchNewProducts/fetchNewProducts"
import {
    getProductCarouselErrorNew,
    getProductCarouselErrorTop,
    getProductCarouselLoadingNew,
    getProductCarouselLoadingTop,
    getProductCarouselNewProducts,
    getProductCarouselTopProducts,
} from "../model/selectors/productCarouselSelector"

export enum ProductCarouselVariant {
    TOP_PRODUCTS = "top",
    NEW_PRODUCTS = "new",
}

interface ProductCarouselProps {
    className?: string
    variant: ProductCarouselVariant
}

export const ProductCarousel = memo((props: ProductCarouselProps) => {
    const { variant, className } = props

    const dispatch = useDispatch()

    const topProducts = useSelector(getProductCarouselTopProducts)
    const newProducts = useSelector(getProductCarouselNewProducts)
    const isLoadingTop = useSelector(getProductCarouselLoadingTop)
    const isLoadingNew = useSelector(getProductCarouselLoadingNew)
    const errorTop = useSelector(getProductCarouselErrorTop)
    const errorNew = useSelector(getProductCarouselErrorNew)

    const isNew = variant === ProductCarouselVariant.NEW_PRODUCTS
    const isTop = variant === ProductCarouselVariant.TOP_PRODUCTS

    useEffect(() => {
        if (isNew && !newProducts?.length && !isLoadingNew) {
            dispatch(fetchNewProducts())
        } else if (isTop && !topProducts?.length && !isLoadingTop) {
            dispatch(fetchTopProducts())
        }
    }, [dispatch, newProducts, topProducts, isLoadingNew, isLoadingTop, isNew, isTop, variant])

    const title = isNew ? "Новые поступления" : "Топовые позиции"
    const list: Product[] | undefined = isNew ? newProducts : topProducts
    const loading = isNew ? isLoadingNew : isLoadingTop
    const error = isNew ? errorNew : errorTop

    const content = useMemo(() => {
        switch (true) {
            case loading:
                return <div>Loading...</div>
            case !!error:
                return <div>Error</div>
            case !!list?.length:
                return (
                    <>
                        <div className={styles.title}>{title}</div>
                        <Slider {...sliderSettings}>
                            {list?.map(item => {
                                const { id, is_new: isNew, name, price, images } = item
                                return (
                                    <ProductCard
                                        id={id}
                                        key={id}
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
                                    />
                                )
                            })}
                        </Slider>
                    </>
                )
            default:
                return null
        }
    }, [list, loading, title, error])

    return <div className={classNames(styles.container, {}, [className])}>{content}</div>
})
