import { Typography, TypographyColor, TypographyVariant } from "shared/ui/Typography/Typography"
import { BannersRow } from "widgets/Banner"
import { useTranslation } from "react-i18next"
import { ProducstRowVariant, ProductsRow } from "widgets/ProductCarousel"
import styles from "./AboutPage.module.scss"

export function AboutPage() {
    const { t } = useTranslation()

    return (
        <div>
            <Typography
                variant={TypographyVariant.H1}
                className={styles.title}
                data-testid="about-page"
            >
                {t("aboutUs")}
            </Typography>
            <Typography color={TypographyColor.DARK_GRAY} className={styles.text}>
                {t("aboutUsDeliveryInfo1stPart")}
                <br />
                <br />
                {t("aboutUsDeliveryInfo2ndPart")}
                <br />
                <br />
                {t("aboutUsDeliveryInfo3rdPart")}
                <br />
                <br />
                {t("aboutUsDeliveryInfo4thPart")}
            </Typography>
            <ProductsRow variant={ProducstRowVariant.TOP_PRODUCTS} />
            <BannersRow />
        </div>
    )
}
