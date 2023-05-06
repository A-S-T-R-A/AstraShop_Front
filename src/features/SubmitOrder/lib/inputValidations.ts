import i18n from "shared/config/i18n/i18n"
import { IFormData } from "../model/types/types"

function validateName(value: string): string {
    let error = ""
    if (!value) {
        error = i18n.t("requiredField")
    }

    const OnlyLetters = "^$|^[A-Za-zÀ-ȕА-Яа-я][A-Za-zÀ-ȕА-Яа-я -]*$"

    const regex = new RegExp(OnlyLetters)
    if (!regex.test(value)) {
        error = i18n.t("onlyLetters")
    }
    return error
}

function validatePhone(value: string): string {
    let error = ""
    if (!value) {
        error = i18n.t("requiredField")
    }

    const phoneOnly =
        "^((\\+\\d{1,3}|\\d{1,3}[\\s-]?)?(\\(\\d{2,5}\\)|\\d{2,5})[\\s-]?\\d{2,5}[\\s-]?\\d{2,5}[\\s-]?\\d{2,5})?$"

    const regex = new RegExp(phoneOnly)
    if (!regex.test(value)) {
        error = i18n.t("incorrectNumber")
    }

    return error
}

function validateEmail(value: string): string {
    let error = ""
    if (!value) {
        error = i18n.t("requiredField")
    }

    const onlyEngLetters = /[^\x00-\x7F]+/
    if (onlyEngLetters.test(value)) {
        error = i18n.t("emailPattern")
    }

    const emailPattern =
        "^([_A-Za-z0-9-\\+]+(\\.[_A-Za-z0-9-]+)*@[A-Za-z0-9-]+(\\.[A-Za-z0-9]+)*(\\.[A-Za-z]{2,}))?$"
    const regex = new RegExp(emailPattern)

    if (!regex.test(value)) {
        error = i18n.t("incorrectEmail")
    }

    return error
}

function validateCity(value: string): string {
    let error = ""
    if (!value) {
        error = i18n.t("requiredField")
    }

    const OnlyLetters = "^$|^[A-Za-zÀ-ȕА-Яа-я][A-Za-zÀ-ȕА-Яа-я -]*$"
    const regex = new RegExp(OnlyLetters)
    if (!regex.test(value)) {
        error = i18n.t("onlyLetters")
    }
    return error
}

function validateDepartment(value: string): string {
    let error = ""
    if (!value) {
        error = i18n.t("requiredField")
    }
    return error
}

function validateConsent(value: boolean): string {
    let error = ""
    if (!value) {
        error = i18n.t("requiredField")
    }
    return error
}

export function inputValidations(formData: IFormData) {
    const name = validateName(formData.name)
    const phone = validatePhone(formData.phone)
    const email = validateEmail(formData.email)
    const city = validateCity(formData.city)
    const department = validateDepartment(formData.department)
    const isConsent = validateConsent(formData.isConsent)

    return { name, phone, email, city, department, isConsent }
}
