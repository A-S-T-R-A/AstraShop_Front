import { ProductFilters } from "features/ProductFilters"
import { useDispatch, useSelector } from "react-redux"
import { Button, ButtonVariant } from "shared/ui/Button/Button"
import { getModalsCurrent, modalsActions, ModalSlider, ModalsList } from "entities/ModalSlider"
import styles from "./FiltersModalSlider.module.scss"

export function FiltersModalSlider() {
    const dispatch = useDispatch()
    const currentModal = useSelector(getModalsCurrent)

    function onClose() {
        dispatch(modalsActions.close())
    }

    return (
        <ModalSlider
            isOpen={currentModal === ModalsList.FILTERS}
            onClose={onClose}
            className={styles.wrapper}
        >
            <ProductFilters className={styles.filters} />
            <Button variant={ButtonVariant.FILLED_RED} className={styles.btn} onClick={onClose}>
                Применить
            </Button>
        </ModalSlider>
    )
}
