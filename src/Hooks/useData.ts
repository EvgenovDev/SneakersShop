import {useCallback, useEffect, useRef, useState} from "react";
import {SneakersInterface, SneakersInterfaceCart} from "../Types/sneakersTypes";
import {Item} from "../functions/checkItemInArray";
import {
    addItemInCartBackend, addItemInFavoriteBackend,
    deleteSneakersInCart, deleteSneakersInFavorite,
    getFavoriteData,
    getSneakersCartData,
    getSneakersData
} from "../api/SneakersData";
import useFetching from "./useFetching";
import useSneakersData from "./useSneakersData";
import useFavorite from "./useFavorite";
import {arrayNameType} from "../Types/arrayNameTypes";

const useData = () => {

    const isFetching = useFetching()
    const sneakersData = useSneakersData()
    const favoriteData = useFavorite()

    const [cartData, setCartData] = useState<Array<SneakersInterfaceCart>>([])
    const cartDataRef = useRef<Array<SneakersInterfaceCart>>([])
    const favoriteDataRef = useRef<Array<SneakersInterface>>([])

    favoriteDataRef.current = favoriteData.favorite
    cartDataRef.current = cartData

    const addItem = useCallback(async (arrayName: arrayNameType, newItem: Item) => {
            switch (arrayName) {
                case "cartData":
                    const addItemInCart = {...newItem, count: "1"}
                    const responseCartData = await addItemInCartBackend(addItemInCart)
                    setCartData(prev => [...prev, responseCartData.data])
                    break
                case "favoriteData":
                    const responseFavoriteData = await addItemInFavoriteBackend(newItem)
                    favoriteData.setFavorite(prev => [...prev, responseFavoriteData.data])

            }
    }, [])

    const deleteItem = useCallback(async (arrayName: arrayNameType, deleteItem: Item) => {
        switch (arrayName) {
            case "cartData":
                await deleteSneakersInCart(deleteItem, cartDataRef.current)
                setCartData(cartDataRef.current.filter((item) => item.id !== deleteItem.id))
                break
            case "favoriteData":
                await deleteSneakersInFavorite(deleteItem, favoriteDataRef.current)
                favoriteData.setFavorite(favoriteData.favorite.filter(item => item.id !== deleteItem.id))
        }
    }, [])

    useEffect((): void => {
        getSneakersCartData()
            .then(cartDataSneakers => setCartData(cartDataSneakers))
                .then(() => {
                    getFavoriteData()
                        .then(favoriteDataSneakers => favoriteData.setFavorite(favoriteDataSneakers))
                })
                    .then(() => {
                        isFetching.setIsFetching(true)
                        getSneakersData()
                            .then(data => {
                            sneakersData.setSneakersData(data)
                            isFetching.setIsFetching(false)
                        })
                    })
    }, [])

    return {
        cartData,
        cartDataRef,
        setCartData,
        addItem,
        deleteItem,
        sneakersData: sneakersData.sneakersData,
        isFetching: isFetching.isFetching,
        favorite: favoriteData.favorite,
        setFavorite: favoriteData.setFavorite,
        favoriteDataRef
    }
}

export default useData