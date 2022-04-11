import axios from "axios"
import {SneakersInterface, SneakersInterfaceCart} from "../Types/sneakersTypes";
import {Item} from "../functions/checkItemInArray";

const instance = axios.create({
    baseURL: "https://6239d76d28bcd99f0275d5f1.mockapi.io"
})

export const getSneakersData = () => {
    return instance.get("/sneakersData")
        .then(response => response.data)
}

export const getSneakersCartData = () => {
    return instance.get("/cartSneakers")
        .then(response => response.data)
}

export const addItemInCartBackend = (item: Item) => {
   return instance.post("/cartSneakers", item)
}

export const deleteSneakersInCart = (currentItem: Item,
                                     arrayItems: Array<SneakersInterfaceCart>) => {
    arrayItems.forEach(item => {
        if (item.id === currentItem.id) {
            instance.delete("/cartSneakers/" + item.index)
        }
    })
}

export const getFavoriteData = () => {
    return instance.get("/favorites")
        .then(response => response.data)
}

export const addItemInFavoriteBackend = (item: Item) => {
    return instance.post("/favorites", item)
}

export const deleteSneakersInFavorite = (currentItem: SneakersInterface,
                                     arrayItems: Array<SneakersInterface>) => {
    arrayItems.forEach(item => {
        if (item.id === currentItem.id) {
            instance.delete("/favorites/" + item.index)
        }
    })
}