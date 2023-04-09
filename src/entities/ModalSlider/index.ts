import { modalsActions, modalsReducer } from "./model/slice/modalsSlice"
import { ModalSlider, ModalSliderDirection, ModalSliderVariant } from "./ui/ModalSlider"
import { ModalsList, ModalsSchema } from "./model/types/modalsSchema"
import { getModalsCurrent } from "./model/selectors/getModalsCurrent/getModalsCurrent"

export {
    ModalSlider,
    ModalSliderDirection,
    ModalSliderVariant,
    modalsActions,
    modalsReducer,
    ModalsSchema,
    ModalsList,
    getModalsCurrent,
}
