import { OrderInfo } from "entities/OrderInfo"
import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { CrossIcon } from "shared/assets/icons/others"
import { RoutePath } from "shared/config/routeConfig/routeConfig"
import { ModalSlider, ModalSliderVariant } from "shared/ui/ModalSlider/ModalSlider"
import { Typography, TypographyVariant } from "shared/ui/Typography/Typography"
import { basketItemsList } from "../model/list"
import styles from "./Basket.module.scss"
import { BasketItemsList } from "./BasketItemsList/BasketItemsList"
import { EmptyBasket } from "./EmptyBasket/EmptyBasket"

interface BasketProps {
    isOpen: boolean
    onClose: () => void
}

export function Basket({ isOpen, onClose }: BasketProps) {
    const height = window.innerHeight
    const [width, setWidth] = useState(window.innerWidth)

    useEffect(() => {
        function handleResize() {
            setWidth(window.innerWidth)
        }
        window.addEventListener("resize", handleResize)
        return () => {
            window.removeEventListener("resize", handleResize)
        }
    }, [])

    const isSlideTop = width < 769

    const navigate = useNavigate()

    return (
        <ModalSlider
            isOpen={isOpen}
            onClose={onClose}
            variant={isSlideTop ? ModalSliderVariant.TOP : ModalSliderVariant.RIGHT}
            className={styles.wrapper}
            containerHeight={isSlideTop ? `${height - 64}px` : "auto"}
        >
            <div className={styles.container}>
                <div className={styles.slideRightHeader}>
                    <Typography variant={TypographyVariant.H3} className={styles.slideRightTitle}>
                        Корзина
                    </Typography>
                    <CrossIcon onClick={onClose} className={styles.cross} />
                </div>

                {basketItemsList.length ? (
                    <>
                        <BasketItemsList list={basketItemsList} />
                        <OrderInfo
                            onOrderClick={() => navigate(RoutePath.order)}
                            onExitClick={onClose}
                        />
                    </>
                ) : (
                    <EmptyBasket onClose={onClose} />
                )}
            </div>
        </ModalSlider>
    )
}
