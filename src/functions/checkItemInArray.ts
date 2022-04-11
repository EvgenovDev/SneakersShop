import {SneakersInterface, SneakersInterfaceCart} from "../Types/sneakersTypes";

export type Item = SneakersInterface | SneakersInterfaceCart

export function isThisArrayHasItem<T extends SneakersInterface> (arrayItems: Array<T>, item: Item): boolean {
    let isHas = false
    arrayItems.forEach(elem => {
        if (elem.id === item.id) {
            isHas = true
        }
    })
    return isHas
}