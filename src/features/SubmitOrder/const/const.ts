import { IFormData } from "../model/types/types"

export enum InputsName {
    NAME = "name",
    PHONE = "phone",
    EMAIL = "email",
    CITY = "city",
    DEPARTMENT = "department",
    DELIVERY = "delivery",
    IS_CONSENT = "isConsent",
}

export const InitialFormErrors: Partial<Record<InputsName, string>> = {
    [InputsName.NAME]: "",
    [InputsName.PHONE]: "",
    [InputsName.EMAIL]: "",
    [InputsName.CITY]: "",
    [InputsName.DEPARTMENT]: "",
    [InputsName.IS_CONSENT]: "",
}

export const InitialFormData: IFormData = {
    [InputsName.NAME]: "",
    [InputsName.PHONE]: "",
    [InputsName.EMAIL]: "",
    [InputsName.CITY]: "",
    [InputsName.DEPARTMENT]: "",
    [InputsName.DELIVERY]: "option1",
    [InputsName.IS_CONSENT]: true,
}

export const initialIsDirty: Partial<Record<InputsName, boolean>> = {
    [InputsName.NAME]: false,
    [InputsName.PHONE]: false,
    [InputsName.EMAIL]: false,
    [InputsName.CITY]: false,
    [InputsName.DEPARTMENT]: false,
    [InputsName.IS_CONSENT]: false,
}
