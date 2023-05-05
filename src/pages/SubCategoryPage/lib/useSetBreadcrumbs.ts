import {
    CurrentTreeItemType,
    catalogNavigationActions,
    getNavigationTree,
} from "entities/CatalogNavigation"
import { useCallback, useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"

interface useSetBreadcrumbsProps {
    id?: string
    parentCategoryId: number
    categoryName: string
}

export function useSetBreadcrumbs({
    id = "",
    parentCategoryId,
    categoryName,
}: useSetBreadcrumbsProps) {
    const dispatch = useDispatch()
    const navigationTree = useSelector(getNavigationTree)

    const getCategoryName = useCallback(
        () =>
            navigationTree.filter(item => parentCategoryId && +parentCategoryId === item.id)?.[0]
                ?.name || "Category",

        [navigationTree, parentCategoryId]
    )

    useEffect(() => {
        dispatch(
            catalogNavigationActions.setCurrentTree([
                {
                    id: parentCategoryId,
                    name: getCategoryName(),
                    type: CurrentTreeItemType.CATEGORY,
                },
                {
                    id: id !== undefined ? +id : 0,
                    name: categoryName,
                    type: CurrentTreeItemType.SUB_CATEGORY,
                },
            ])
        )
    }, [categoryName, parentCategoryId, dispatch, id, getCategoryName])
}
