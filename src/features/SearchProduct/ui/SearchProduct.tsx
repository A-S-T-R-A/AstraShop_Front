import { useState, useEffect } from "react"
import { useDispatch } from "react-redux"
import { Input } from "shared/ui/Input/Input"
import { CrossIcon, SearchIcon } from "shared/assets/icons/others"
import { classNames } from "shared/lib/classNames/classNames"
import { useTranslation } from "react-i18next"
import { useDebounce } from "shared/lib/hooks/useDebounce/useDebounce"
import styles from "./SearchProduct.module.scss"
import { searchProductsActions } from "../model/slice/searchProductSlice"
import { fetchSearchProducts } from "../model/services/fetchSearchProducts"
import { SearchDropdown } from "./SearchDropdown/SearchDropdown"

interface SearchProductProps {
    className?: string
}

export function SearchProduct({ className }: SearchProductProps) {
    const [value, setValue] = useState("")
    const [hover, setHover] = useState(false)
    const [active, setActive] = useState(false)
    const [isDropdownOpen, setIsDropdownOpen] = useState(false)

    const dispatch = useDispatch()

    function fetchSearchData(value: string) {
        if (value.length < 3) {
            dispatch(searchProductsActions.clearProductsList())
            return
        }
        dispatch(fetchSearchProducts(value))
    }

    const { t } = useTranslation()
    const debounsedSearch = useDebounce(fetchSearchData, 500)

    function changeHandler(value: string) {
        setValue(value)
        debounsedSearch(value)
    }

    useEffect(() => {
        function closeHandler(e: MouseEvent) {
            const target = e.target as HTMLElement
            if (!target?.closest("#searcProductContainer")) {
                setIsDropdownOpen(false)
            }
        }
        window.addEventListener("click", closeHandler)
        return () => {
            window.removeEventListener("click", closeHandler)
        }
    }, [])

    useEffect(() => {
        setIsDropdownOpen(value.length > 0)
    }, [value])

    return (
        <div className={classNames(styles.container, {}, [className])} id="searcProductContainer">
            <SearchIcon
                className={classNames(
                    styles.icon,
                    { [styles.active]: value || hover || active },
                    []
                )}
            />
            {value && <CrossIcon size={20} className={styles.cross} onClick={() => setValue("")} />}
            <Input
                value={value}
                onChange={value => changeHandler(value)}
                placeholder={`${t("inputSearchPlaceholder")}`}
                className={styles.searchbar}
                onFocus={() => {
                    setIsDropdownOpen(value.length > 0)
                    setActive(true)
                }}
                onBlur={() => setActive(false)}
                onMouseEnter={() => setHover(true)}
                onMouseLeave={() => setHover(false)}
            />
            {isDropdownOpen && <SearchDropdown setIsDropdownOpen={setIsDropdownOpen} />}
        </div>
    )
}
