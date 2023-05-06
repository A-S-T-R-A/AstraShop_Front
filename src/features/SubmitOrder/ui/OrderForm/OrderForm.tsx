import { UnexpectedError } from "shared/components/UnexpectedError/UnexpectedError"
import { useDispatch, useSelector } from "react-redux"
import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import {
    BasketSummary,
    BasketSummaryVariant,
    getBasketProductsTotalPrice,
    getBasketProductsTotalQuantity,
} from "entities/Basket"
import { Loader } from "shared/ui/Loader/Loader"
import { Input } from "shared/ui/Input/Input"
import { Typography, TypographyVariant } from "shared/ui/Typography/Typography"
import { Checkbox } from "shared/ui/Checkbox/Checkbox"
import { classNames } from "shared/lib/classNames/classNames"
import { RadioGroup } from "shared/ui/RadioGroup"
import { modalsActions } from "entities/ModalSlider"
import { deliveryOptions as options } from "features/SubmitOrder/model/lists"
import { RoutePath } from "shared/config/routeConfig/const"
import { useTranslation } from "react-i18next"
import styles from "./OrderForm.module.scss"
import { inputValidations } from "../../lib/inputValidations"
import { IFormData } from "../../model/types/types"
import { createNewOrder } from "../../model/services/createNewOrder/createNewOrder"
import { getInputByName } from "../../lib/getInputByName"
import {
    getSubmitOrderError,
    getSubmitOrderLoading,
} from "../../model/selectors/submitOrderSelectors"
import { InitialFormData, InitialFormErrors, InputsName, initialIsDirty } from "../../const/const"

export function OrderForm() {
    const [formData, setFormData] = useState<IFormData>(InitialFormData)

    const { t } = useTranslation()
    const [formErrors, setFormErrors] =
        useState<Partial<Record<InputsName, string>>>(InitialFormErrors)

    const [isDirty, setIsDirty] = useState(initialIsDirty)

    useEffect(() => {
        const array = Object.entries(formErrors)

        // eslint-disable-next-line no-restricted-syntax
        for (const error of array) {
            const [key, value] = error
            if (value.length > 0) {
                const element = getInputByName(key, styles.input)
                if (element) {
                    element.scrollIntoView({
                        behavior: "smooth",
                        block: "center",
                        inline: "center",
                    })

                    element.focus({ preventScroll: true })
                    break
                }
            }
        }
    }, [formErrors])

    const navigate = useNavigate()
    const dispatch = useDispatch()

    const totalPrice = useSelector(getBasketProductsTotalPrice)
    const totalQuantity = useSelector(getBasketProductsTotalQuantity)
    const error = useSelector(getSubmitOrderError)
    const isLoading = useSelector(getSubmitOrderLoading)

    function inputChangeHandler(value: string, input: string) {
        setFormData(prev => ({ ...prev, [input]: value }))
        setIsDirty(prev => ({ ...prev, [input]: true }))
    }

    function checkboxChangeHandler() {
        setFormData(prev => ({ ...prev, isConsent: !prev.isConsent }))
        setIsDirty(prev => ({ ...prev, isConsent: true }))
    }

    function radioChangeHandler(value: string) {
        setFormData(prev => ({ ...prev, delivery: value }))
    }

    function checkInputsValid(formData: IFormData) {
        const errors = inputValidations(formData)
        setFormErrors(errors)

        return !Object.values(errors).some(item => item.length > 0)
    }

    function checkOrderValid() {
        if (totalPrice > 0 && totalQuantity > 0) {
            return true
        }
        dispatch(modalsActions.openOrderError())
        return false
    }

    function submitHandler() {
        setIsDirty(initialIsDirty)
        if (!checkOrderValid()) return
        if (!checkInputsValid(formData)) return
        dispatch(createNewOrder(formData))
    }

    if (isLoading) {
        return <Loader />
    }

    if (error) {
        return <UnexpectedError />
    }

    return (
        <div className={styles.container}>
            <Typography variant={TypographyVariant.H3} className={styles.title}>
                {`${t("orderForm")}`}
            </Typography>
            <form action="submit" className={styles.form}>
                <Input
                    name={InputsName.NAME}
                    value={formData[InputsName.NAME]}
                    onChange={value => inputChangeHandler(value, `${InputsName.NAME}`)}
                    label={`${t("orderFormLabelName")}`}
                    placeholder={`${t("orderFormPlaceholderName")}`}
                    isRequired
                    className={classNames(styles.input, {}, [styles.name])}
                    error={isDirty[InputsName.NAME] ? "" : formErrors[InputsName.NAME]}
                />
                <Input
                    name={InputsName.PHONE}
                    value={formData[InputsName.PHONE]}
                    onChange={value => inputChangeHandler(value, `${InputsName.PHONE}`)}
                    label={`${t("orderFormPhoneNumber")}`}
                    placeholder={`${t("orderFormPlaceholderPhone")}`}
                    isRequired
                    className={classNames(styles.input, {}, [styles.phone])}
                    error={isDirty[InputsName.PHONE] ? "" : formErrors[InputsName.PHONE]}
                />
                <Input
                    name={InputsName.EMAIL}
                    value={formData[InputsName.EMAIL]}
                    onChange={value => inputChangeHandler(value, `${InputsName.EMAIL}`)}
                    label="Email"
                    placeholder="example@mail.com"
                    isRequired
                    className={classNames(styles.input, {}, [styles.email])}
                    error={isDirty[InputsName.EMAIL] ? "" : formErrors[InputsName.EMAIL]}
                />
                <Input
                    name={InputsName.CITY}
                    value={formData[InputsName.CITY]}
                    onChange={value => inputChangeHandler(value, `${InputsName.CITY}`)}
                    label={`${t("orderFormLabelCity")}`}
                    placeholder={`${t("orderFormPlaceholderCity")}`}
                    isRequired
                    className={classNames(styles.input, {}, [styles.city])}
                    error={isDirty[InputsName.CITY] ? "" : formErrors[InputsName.CITY]}
                />
                <RadioGroup
                    title={`${t("orderFormTypeOfDelivery")}`}
                    isRequired
                    options={options.map(option => ({ ...option, label: t(option.label) }))}
                    activeInput={formData[InputsName.DELIVERY]}
                    onChange={radioChangeHandler}
                    className={styles.radios}
                />
                <Input
                    name={InputsName.DEPARTMENT}
                    value={formData[InputsName.DEPARTMENT]}
                    onChange={value => inputChangeHandler(value, `${InputsName.DEPARTMENT}`)}
                    label={`${t("orderFormLabelPost")}`}
                    placeholder={`${t("orderFormPlaceholderPost")}`}
                    isRequired
                    className={classNames(styles.input, {}, [styles.department])}
                    error={isDirty[InputsName.DEPARTMENT] ? "" : formErrors[InputsName.DEPARTMENT]}
                />
                <Checkbox
                    id="checkbox1"
                    checked={formData[InputsName.IS_CONSENT]}
                    onChange={checkboxChangeHandler}
                    label={`${t("orderFormLabelAgreement")}`}
                    className={styles.consent}
                    error={isDirty[InputsName.IS_CONSENT] ? "" : formErrors[InputsName.IS_CONSENT]}
                />
                <BasketSummary
                    className={styles.orderInfo}
                    variant={BasketSummaryVariant.VERTICAL}
                    onOrderClick={submitHandler}
                    onExitClick={() => navigate(RoutePath.main)}
                />
            </form>
        </div>
    )
}
