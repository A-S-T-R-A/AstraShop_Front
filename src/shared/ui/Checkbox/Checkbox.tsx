import { InputHTMLAttributes } from "react"
import { classNames } from "shared/lib/classNames/classNames"
import styles from "./Checkbox.module.scss"

type HtmlInputProps = Omit<InputHTMLAttributes<HTMLInputElement>, "onChange" | "type">

interface inputProps extends HtmlInputProps {
    label: string
    checked: boolean
    onChange: () => void
    id: string
    className?: string
}

export function Checkbox(props: inputProps) {
    const { label, checked, onChange, id, className, ...otherProps } = props
    return (
        <label
            className={classNames(styles.checkboxWrapper, { [styles.checked]: checked }, [
                className,
            ])}
            htmlFor={id}
            data-testid="checkboxLabel"
        >
            <div className={styles.checkbox}>
                <input
                    className={styles.checkboxInput}
                    type="checkbox"
                    id={id}
                    checked={checked}
                    onChange={onChange}
                    {...otherProps}
                    data-testid="checkbox"
                />
                <div className={styles.checkboxTick} />
            </div>
            <p className={styles.label}>{label}</p>
        </label>
    )
}
