export type DeviceType = "mobile" | "tablet" | "desktop"

export const getCurrentDevice = (width: number, callback: (device: DeviceType) => void) => {
    let device: DeviceType = "desktop"

    switch (true) {
        case width <= 480:
            device = "mobile"
            break
        case width >= 481:
            device = "tablet"
            break
        case width > 760:
            device = "desktop"
            break
        default:
            device = "desktop"
    }

    callback?.(device)
}
