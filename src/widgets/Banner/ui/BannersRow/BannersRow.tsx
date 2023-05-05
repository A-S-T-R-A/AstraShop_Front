/* eslint-disable indent */
import { useTranslation } from "react-i18next"
import { Banner, BannerVariant } from "./OldBanner/Banner"
import { bannersRowList } from "../../const/lists"
import styles from "./BannersRow.module.scss"
import { BannerSkeleton } from "../BannerSkeleton/BannerSkeleton"

export function BannersRow() {
    const { t } = useTranslation()

    return (
        <div className={styles.container}>
            {bannersRowList
                ? bannersRowList.map((item, index) => {
                      const { id, title, desc = "", img, link } = item
                      const variant = index === 0 ? BannerVariant.MAIN : BannerVariant.NORMAL
                      return (
                          <Banner
                              key={id}
                              variant={variant}
                              title={t(title)}
                              desc={t(desc)}
                              img={img}
                              link={link}
                          />
                      )
                  })
                : [1, 2, 3].map(item => <BannerSkeleton key={item} />)}
        </div>
    )
}
