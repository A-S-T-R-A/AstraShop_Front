export function getInputByName(name: string, className: string): HTMLInputElement | null {
    return document.querySelector(`.${className} input[name=${name}]`)
}
