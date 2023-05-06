import { useRef, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { ChangeLanguageIcon } from "shared/assets/icons/others"
import { classNames } from "shared/lib/classNames/classNames"
import { Button, ButtonColor, ButtonVariant } from "shared/ui/Button/Button"
import i18n from "shared/config/i18n/i18n"
import { changeLanguageActions } from "../model/slice/changeLanguageSlice"
import { getStorageLanguage } from "../model/selectors/changeLanguageSelectors"
import { Languages, languagesData } from "../config/config"
import styles from "./ChangeLanguage.module.scss"

export enum ChangeLanguageColor {
    NORMAL = "normal",
    INVERTED = "inverted",
}

interface IChangeLanguageProps {
    color?: ChangeLanguageColor
}

export function ChangeLanguage({ color = ChangeLanguageColor.NORMAL }: IChangeLanguageProps) {
    const currentLanguage = useSelector(getStorageLanguage)
    const [dropdownActive, setDropdownActive] = useState(false)
    const timeoutRef = useRef<NodeJS.Timeout | null>(null)
    const dropdownRef = useRef<HTMLDivElement | null>(null)
    const dispatch = useDispatch()

    function onMouseEnterHandler() {
        if (timeoutRef.current) {
            clearTimeout(timeoutRef.current)
            timeoutRef.current = null
        }
    }

    function clickHandler() {
        setDropdownActive(prev => !prev)
    }

    function languageClickHandler(languagesCode: Languages) {
        i18n.changeLanguage(languagesCode)
        dispatch(changeLanguageActions.setCurrentLanguage(languagesCode))
        setDropdownActive(false)
    }

    function mouseLeaveHandler() {
        const delay = window.innerWidth < 769 ? 0 : 400

        timeoutRef.current = setTimeout(() => {
            setDropdownActive(false)
        }, delay)
    }

    return (
        <div
            className={styles.wrapper}
            onClick={clickHandler}
            onMouseEnter={onMouseEnterHandler}
            onMouseLeave={mouseLeaveHandler}
        >
            <ChangeLanguageIcon className={classNames(styles.menuItem, {}, [styles[color]])} />
            {dropdownActive && (
                <div ref={dropdownRef} className={styles.languageListContainer}>
                    {languagesData.map(language => {
                        const { id, text, languagesCode, Icon } = language

                        return (
                            <div
                                key={id}
                                className={styles.languageContainer}
                                onClick={e => {
                                    e.stopPropagation()
                                    languageClickHandler(languagesCode)
                                }}
                            >
                                <Icon
                                    className={classNames(
                                        styles.icon,
                                        { [styles.active]: currentLanguage === languagesCode },
                                        []
                                    )}
                                />
                                <Button
                                    key={id}
                                    variant={ButtonVariant.CLEAR}
                                    color={ButtonColor.INVERTED}
                                    className={classNames(
                                        styles.btn,
                                        { [styles.active]: currentLanguage === languagesCode },
                                        []
                                    )}
                                >
                                    {text}
                                </Button>
                            </div>
                        )
                    })}
                </div>
            )}
        </div>
    )
}
