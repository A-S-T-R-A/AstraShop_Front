import { classNames } from "shared/lib/classNames/classNames"
import "./Loader.scss"

interface LoaderProps {
    className?: string
}

export const Loader = ({ className }: LoaderProps) => (
    <div className={classNames("lds-roller", {}, [className])} data-testid="loader">
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
    </div>
)
