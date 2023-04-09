import { Suspense, useEffect } from "react"
import { useDispatch } from "react-redux"
import { classNames } from "shared/lib/classNames/classNames"
import { Header } from "widgets/Header"
import { Footer } from "widgets/Footer"
import { basketActions } from "entities/Basket"
import { BasketModalSlider } from "widgets/BasketModalSlider"
import { BurgerMenu } from "widgets/BurgerMenu"
import { CatalogSidebar } from "entities/CatalogNavigation"
import { RoutePath } from "shared/config/routeConfig/routeConfig"
import { useMatch } from "react-router-dom"
import { AppRouter } from "./providers/router"

function App() {
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(basketActions.initBasketData())
    })

    const isSubCategoryPage = useMatch(`${RoutePath.sub_category}:id`)

    return (
        <div className={classNames("app", {}, [])}>
            <Suspense fallback="">
                {!isSubCategoryPage && <CatalogSidebar />}
                <div className="content-page">
                    <Header BasketModal={<BasketModalSlider />} BurgerModal={<BurgerMenu />} />
                    <AppRouter />
                    <Footer />
                </div>
            </Suspense>
        </div>
    )
}

export default App
