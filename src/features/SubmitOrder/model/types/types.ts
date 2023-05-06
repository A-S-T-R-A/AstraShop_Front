import { InputsName } from "features/SubmitOrder/const/const"

export interface IFormData {
    [InputsName.NAME]: string
    [InputsName.PHONE]: string
    [InputsName.EMAIL]: string
    [InputsName.CITY]: string
    [InputsName.DEPARTMENT]: string
    [InputsName.DELIVERY]: string
    [InputsName.IS_CONSENT]: boolean
}
