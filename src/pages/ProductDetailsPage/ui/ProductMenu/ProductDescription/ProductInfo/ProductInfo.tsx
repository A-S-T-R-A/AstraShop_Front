import { useMemo } from "react"
import { useTranslation } from "react-i18next"
import { classNames } from "shared/lib/classNames/classNames"
import { Typography, TypographyColor, TypographyVariant } from "shared/ui/Typography/Typography"
import { v4 as uuid } from "uuid"
import { ProductAttribute } from "entities/Product"
import { useAttributesData } from "../../../../lib/useAttributesData"
import styles from "./ProductInfo.module.scss"

export interface ArticleData {
    title?: string
    text: string[] | string
}

interface ArticleProps {
    data: ArticleData
}

function Article({ data }: ArticleProps) {
    const { title, text } = data

    const content = useMemo(() => {
        switch (true) {
            case !!text && Array.isArray(text) && text.length > 1:
                if (!Array.isArray(text)) return null
                return (
                    <div className={styles.articleTextList}>
                        {text?.map(item => (
                            <Typography
                                key={uuid()}
                                color={TypographyColor.DARK_GRAY}
                                className={styles.text}
                            >
                                {item}
                            </Typography>
                        ))}
                    </div>
                )
            case !!text:
                return (
                    <Typography color={TypographyColor.DARK_GRAY} className={styles.text}>
                        {text}
                    </Typography>
                )
            default:
                return null
        }
    }, [text])

    return (
        <div className={styles.article}>
            {!!title && <Typography className={styles.title}>{title}</Typography>}
            {content}
        </div>
    )
}

interface ProductInfoProps {
    className?: string
    description?: string
    attributes?: ProductAttribute[]
}

export function ProductInfo({ className, description = "", attributes = [] }: ProductInfoProps) {
    const data = useAttributesData({ description, attributes })

    const { t } = useTranslation()

    if (!description || !attributes) return null

    return (
        <div className={classNames(styles.info, {}, [className])}>
            <Typography variant={TypographyVariant.H4} isBold className={styles.title}>
                {t("productDescriptionTitle")}
            </Typography>
            {data?.map(item => (
                <Article key={uuid()} data={item} />
            ))}
        </div>
    )
}
