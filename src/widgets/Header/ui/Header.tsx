import { Logo, LogoVariant } from "entities/Logo/Logo"
import { useMatch } from "react-router-dom"
import { ReactElement } from "react"
import { RoutePath } from "shared/config/routeConfig/const"
import { classNames } from "shared/lib/classNames/classNames"
import { SearchProduct } from "features/SearchProduct"
import { NavigationList, NavigationListVariant, NavigationListColor } from "entities/NavigationList"
import { ChangeLanguage, ChangeLanguageColor } from "features/ChangeLanguage"
import styles from "./Header.module.scss"
import { HeaderLeft } from "./HeaderLeft/HeaderLeft"
import { HeaderRight } from "./HeaderRight/HeaderRight"

interface HeaderProps {
    BurgerModal: ReactElement
    BasketModal: ReactElement
}

export function Header(props: HeaderProps) {
    const { BurgerModal, BasketModal } = props

    const isMainPage = window.location.pathname === "/"
    const isSubCategoryPage = useMatch(`${RoutePath.sub_category}/:id`)
    const fullHeader = isMainPage || !!isSubCategoryPage

    return (
        <>
            {BurgerModal}
            {BasketModal}
            <div className={classNames(styles.wrapper, { [styles.main]: fullHeader })}>
                <div className={styles.container}>
                    <Logo
                        variant={fullHeader ? LogoVariant.INVERTED : LogoVariant.NORMAL}
                        className={styles.logo}
                    />

                    <SearchProduct className={styles.search} />

                    <HeaderLeft className={styles.headerLeft} isMainPage={fullHeader} />

                    <NavigationList
                        ChangeLanguage={
                            <ChangeLanguage
                                color={
                                    fullHeader
                                        ? ChangeLanguageColor.INVERTED
                                        : ChangeLanguageColor.NORMAL
                                }
                            />
                        }
                        className={styles.navlist}
                        variant={NavigationListVariant.DESKTOP}
                        color={
                            fullHeader ? NavigationListColor.INVERTED : NavigationListColor.NORMAL
                        }
                    />

                    <HeaderRight isMainPage={fullHeader} />
                </div>
            </div>
        </>
    )
}
