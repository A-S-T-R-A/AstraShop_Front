/* eslint-disable react/jsx-indent */
/* eslint-disable indent */
import { Children, Dispatch, ReactNode, SetStateAction } from "react"
import { ProductCardSkeleton } from "entities/Product"
import { classNames } from "shared/lib/classNames/classNames"
import { Swiper, SwiperSlide } from "swiper/react"
import { Swiper as SwiperClass } from "swiper/types"
import { Pagination, Navigation } from "swiper"
import { v4 as uuid } from "uuid"
import "swiper/scss"
import "swiper/scss/navigation"
import "swiper/scss/pagination"
import "swiper/scss/scrollbar"
import styles from "./ProductSwiper.module.scss"

export enum IProductSwiperVariant {
    FULL = "full",
    WITH_BANNER = "with_banner",
}

interface IProductSwiperProps {
    isLoading: boolean
    children: ReactNode
    variant: IProductSwiperVariant
    slidesPerView?: number
    className?: string
    isWithPagination?: boolean
    onSwiper?: Dispatch<SetStateAction<SwiperClass | undefined>>
}

export function ProductsSwiper(props: IProductSwiperProps) {
    const {
        isLoading,
        variant,
        slidesPerView,
        className,
        onSwiper,
        children,
        isWithPagination = false,
    } = props

    const childrenArray = Children.toArray(children)

    return (
        <Swiper
            slidesPerView={slidesPerView || "auto"}
            className={classNames(styles.swiper, {}, [
                className,
                "productCarousel",
                isWithPagination ? "" : "noPagination",
            ])}
            pagination={{
                clickable: true,
            }}
            modules={[Pagination, Navigation]}
            navigation={{ prevEl: "#prevEl", nextEl: "#nextEl" }}
            spaceBetween={20}
            onSwiper={onSwiper}
        >
            {isLoading
                ? [1, 2, 3, 4, 5, 6, 7, 8].map(item => (
                      <SwiperSlide key={item}>
                          <ProductCardSkeleton />
                      </SwiperSlide>
                  ))
                : childrenArray?.map((item, index) => (
                      <SwiperSlide key={uuid()} className={styles.slide}>
                          {item}
                      </SwiperSlide>
                  ))}
        </Swiper>
    )
}
