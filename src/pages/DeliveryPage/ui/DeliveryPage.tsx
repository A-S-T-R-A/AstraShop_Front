import { Typography, TypographyColor, TypographyVariant } from "shared/ui/Typography/Typography"
import { NovaPochtaIcon, IntimeIcon, AutoluxIcon } from "shared/assets/icons/others"
import { useTranslation } from "react-i18next"
import { ProducstRowVariant, ProductsRow } from "widgets/ProductCarousel"
import { BannersRow } from "widgets/Banner"
import styles from "./DeliveryPage.module.scss"

export function DeliveryPage() {
    const { t } = useTranslation()

    return (
        <div>
            <div className={styles.content}>
                <Typography variant={TypographyVariant.H1} className={styles.title}>
                    {t("shippingAndPayment")}
                </Typography>

                <Typography variant={TypographyVariant.H3} className={styles.deliveryTitle}>
                    {t("deliveryMethod")}
                </Typography>
                <NovaPochtaIcon className={styles.icon} />
                <IntimeIcon className={styles.icon} />
                <AutoluxIcon className={styles.icon} />

                <Typography variant={TypographyVariant.H3} className={styles.returnTitle}>
                    {t("returnAndExchangeOfProducts")}
                </Typography>
                <Typography color={TypographyColor.DARK_GRAY}>
                    {t("returnInfoDetails")}
                    <br />
                    <br />
                    {t("returnInfoShipping")}
                    <br />
                    <br />
                    {t("returnInfoObligations")}
                </Typography>
            </div>
            <ProductsRow variant={ProducstRowVariant.TOP_PRODUCTS} />
            <BannersRow />
        </div>
    )
}
