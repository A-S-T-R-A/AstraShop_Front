import { useDispatch, useSelector } from "react-redux"
import { Checkbox } from "shared/ui/Checkbox/Checkbox"
import { deleteQueryParams } from "shared/lib/url/deleteQueryParams/deleteQueryParams"
import { Typography } from "shared/ui/Typography/Typography"
import { getProductFiltersAttributes } from "../../model/selectors/filterProductsSelectors"
import { filterProductsActions } from "../../model/slice/filterProductsSlice"
import { FilterItemAttribute } from "../../model/types/types"
import styles from "./CheckboxGroup.module.scss"

interface CheckboxGroupProps {
    title: string
    list?: FilterItemAttribute[]
    onChangeFilters: () => void
}

export function CheckboxGroup(props: CheckboxGroupProps) {
    const { title, list, onChangeFilters } = props

    const dispatch = useDispatch()
    const attributes = useSelector(getProductFiltersAttributes)

    function onChangeCheck(checkId: number) {
        dispatch(filterProductsActions.toggleFilterAttribute(checkId))
        deleteQueryParams("attr")
        onChangeFilters?.()
    }

    return (
        <div className={styles.container}>
            <Typography className={styles.title}>{title}</Typography>
            <div className={styles.list}>
                {list?.map(item => {
                    const { name, id } = item
                    const isChecked = attributes.some(item => item === id)

                    return (
                        <div className={styles.item} key={id}>
                            <Checkbox
                                label={name}
                                id={id.toString()}
                                checked={isChecked || false}
                                onChange={() => onChangeCheck(id)}
                            />
                        </div>
                    )
                })}
            </div>
        </div>
    )
}
