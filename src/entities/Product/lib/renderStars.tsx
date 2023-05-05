export const renderStars = (rating: number): number[] => {
    const arr = [...Array(Math.floor(rating)).fill(1)]

    if (rating % 1) {
        arr.push(rating % 1)
    }

    return arr
}
