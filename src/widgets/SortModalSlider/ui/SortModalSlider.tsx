import { getModalsCurrent, modalsActions, ModalSlider, ModalsList } from "entities/ModalSlider"
import { useDispatch, useSelector } from "react-redux"
import { SortProducts, sortProductsOrderType } from "features/SortProducts"
import { Button } from "shared/ui/Button/Button"
import styles from "./SortModalSlider.module.scss"

interface SortModalSliderProps {
    sortOrderPattern: sortProductsOrderType
    onClick: (pattern: sortProductsOrderType) => void
}

export function SortModalSlider({ sortOrderPattern, onClick }: SortModalSliderProps) {
    const currentModal = useSelector(getModalsCurrent)

    const dispatch = useDispatch()

    return (
        <ModalSlider
            isOpen={currentModal === ModalsList.SORT}
            onClose={() => dispatch(modalsActions.close())}
            className={styles.wrapper}
        >
            <div className={styles.container}>
                <SortProducts
                    sortOrderPattern={sortOrderPattern}
                    onClick={onClick}
                    className={styles.desktopFilters}
                />
                <Button onClick={() => dispatch(modalsActions.close())}>Применить</Button>
            </div>
        </ModalSlider>
    )
}
