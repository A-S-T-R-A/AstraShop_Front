import { Logo } from "entities/Logo/Logo"
import { MasterCardIcon, VisaIcon } from "shared/assets/icons/others"
import { Typography, TypographyColor } from "shared/ui/Typography/Typography"
import { Contacts } from "entities/Contacts"
import { Schedule } from "entities/Schedule"
import { Copyright } from "entities/Copyright/Copyright"
import { FooterLinksList } from "./FooterLinksList/FooterLinksList"
import styles from "./Footer.module.scss"
import { footerLinksData } from "../model/list"

export function Footer() {
    return (
        <div className={styles.wrapper}>
            <div className={styles.slogan}>
                <Logo className={styles.logo} />
                <Typography color={TypographyColor.DARK_GRAY} className={styles.sloganText}>
                    Большой выбор товаров самых различных категорий, отнадувных матрасов до
                    планшетных компьютеров
                </Typography>
            </div>
            <FooterLinksList data={footerLinksData} className={styles.info} />
            <Schedule className={styles.schedule} />
            <Contacts className={styles.contacts} />
            <div className={styles.icons}>
                <div className={styles.masterCardIcon}>
                    <MasterCardIcon />
                </div>
                <div className={styles.visaIcon}>
                    <VisaIcon />
                </div>
            </div>
            <Copyright className={styles.copyright} />
        </div>
    )
}
