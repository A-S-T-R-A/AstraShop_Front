import { Button, ButtonVariant } from "shared/ui/Button/Button"
import { Typography, TypographyVariant } from "shared/ui/Typography/Typography"
import { RoutePath } from "shared/config/routeConfig/const"
import { useTranslation } from "react-i18next"
import styles from "./ErrorPage.module.scss"

export function ErrorPage() {
    function clickHandler() {
        window.location.href = RoutePath.main
    }
    const { t } = useTranslation()
    return (
        <div className={styles.wrapper}>
            <Typography variant={TypographyVariant.H1}>{t("errorPageError")}</Typography>
            <Button variant={ButtonVariant.FILLED} className={styles.btn} onClick={clickHandler}>
                {t("errorPageComeBackToMain")}
            </Button>
        </div>
    )
}
