import { classNames } from "shared/lib/classNames/classNames"
import { Typography } from "shared/ui/Typography/Typography"
import { RadioButton } from "./RadioButton/RadioButton"
import styles from "./RadioGroup.module.scss"

export interface RadioGroupOptios {
    label: string
    value: string
    id: string
}

interface RadioGroupProps {
    title: string
    isRequired: boolean
    options: RadioGroupOptios[]
    activeInput: string
    onChange: (value: string) => void
    className?: string
}

export function RadioGroup(props: RadioGroupProps) {
    const { options, onChange, activeInput, className, isRequired, title } = props

    function changeHandler(value: string) {
        onChange?.(value)
    }

    return (
        <div className={classNames(styles.container, {}, [className])}>
            <Typography className={styles.title}>
                {title}
                {isRequired && <span className={styles.required}>*</span>}
            </Typography>

            <div className={styles.radiosContainer}>
                {options.map(item => {
                    const { id, value, label } = item
                    return (
                        <RadioButton
                            key={id}
                            id={id}
                            label={label}
                            value={value}
                            checked={activeInput === value}
                            onChange={() => changeHandler(value)}
                            className={styles.radio}
                        />
                    )
                })}
            </div>
        </div>
    )
}
