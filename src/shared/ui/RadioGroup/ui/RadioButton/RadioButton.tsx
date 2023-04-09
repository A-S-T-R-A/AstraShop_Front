import { classNames } from "shared/lib/classNames/classNames"
import { InputHTMLAttributes, memo } from "react"
import styles from "./RadioButton.module.scss"

export interface RadioButtonProps extends InputHTMLAttributes<HTMLInputElement> {
    label?: string;
    id: string;
    className?: string;
}

export const RadioButton = (props: RadioButtonProps) => {
    const {
        name,
        id,
        value,
        onChange,
        checked,
        label,
        className,
    } = props

    return (
        <div className={classNames(styles.radio, {}, [className])}>
            <input
                type="radio"
                className={styles.input}
                name={name}
                id={id}
                value={value}
                onChange={onChange}
                checked={checked}
            />
            {!!label && <label htmlFor={id} className={styles.label}>{label}</label>}
        </div>
    )
}
