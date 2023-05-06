import { useNavigate } from "react-router-dom"
import { RoutePath } from "shared/config/routeConfig/const"
import { Button, ButtonVariant } from "shared/ui/Button/Button"
import { Typography, TypographyVariant } from "shared/ui/Typography/Typography"
import { useTranslation } from "react-i18next"
import styles from "./NotFoundPage.module.scss"

export function NotFoundPage() {
    const navigate = useNavigate()

    function clickHandler() {
        navigate(RoutePath.main)
    }

    const { t } = useTranslation()
    return (
        <div className={styles.wrapper}>
            <Typography variant={TypographyVariant.H2}>{t("pageDoesNotExist")}</Typography>
            <Button variant={ButtonVariant.FILLED} className={styles.btn} onClick={clickHandler}>
                {t("toMainPage")}
            </Button>
        </div>
    )
}
