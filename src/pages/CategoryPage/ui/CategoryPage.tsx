import {
    Breadcrumbs,
    getNavigationTree,
    catalogNavigationActions,
    CurrentTreeItemType,
} from "entities/CatalogNavigation"
import { useCallback, useEffect, useMemo } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useParams } from "react-router-dom"
import { CategoryLinks } from "./CategoryLinks/CategoryLinks"
import styles from "./CategoryPage.module.scss"

export function CategoryPage() {
    const { id } = useParams()
    const navigationTree = useSelector(getNavigationTree)

    const getCategoryName = useCallback(
        () => navigationTree.filter(item => id && +id === item.id)?.[0]?.name || "Category",
        [id, navigationTree]
    )

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(
            catalogNavigationActions.setCurrentTree([
                {
                    id: id !== undefined ? +id : 0,
                    name: getCategoryName(),
                    type: CurrentTreeItemType.CATEGORY,
                },
            ])
        )
    }, [getCategoryName, dispatch, id])

    const content = useMemo(() => {
        if (!navigationTree[0]) return null

        if (navigationTree.filter(item => item.id.toString() === id).length !== 1) {
            return <div>Категория не найдена</div>
        }

        const category = navigationTree.filter(item => item.id.toString() === id)[0]

        return <CategoryLinks data={category} />
    }, [id, navigationTree])

    return (
        <div className={styles.wrapper}>
            <Breadcrumbs />
            {content}
        </div>
    )
}
