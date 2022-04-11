export const addSpaceToNumberPrice = (price: number): string => {
    return price.toString().replace(/(\d{1,3}(?=(?:\d\d\d)+(?!\d)))/g, "$1" + ' ')
}