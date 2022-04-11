import React, {useCallback} from 'react';
import './App.css';
import AllSneakersScreen from "./AllSneakersScreen/AllSneakersScreen";
import ShopCard from "./ShopCard/ShopCard";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import {isThisArrayHasItem, Item} from "../functions/checkItemInArray";
import {SneakersInterface} from "../Types/sneakersTypes";
import useData from "../Hooks/useData";
import useTotalPrice from "../Hooks/useTotalPrice";
import {arrayNameType} from "../Types/arrayNameTypes";
import Favorites from "./Favorites/Favorites";

function App() {

    const data = useData()
    const totalPrice = useTotalPrice(data.cartDataRef.current)

    const toggleCheckboxItem = useCallback(async (arrayName: arrayNameType, newItem: Item) => {
        switch (arrayName) {
            case "cartData":
                if (data.cartDataRef.current.length !== 0 && isThisArrayHasItem(data.cartDataRef.current, newItem)) {
                    await data.deleteItem(arrayName, newItem)
                } else {
                    await data.addItem(arrayName, newItem)
                }
                break
            case "favoriteData":
                if (data.favoriteDataRef.current.length !== 0
                    &&
                    isThisArrayHasItem(data.favoriteDataRef.current, newItem)) {
                    await data.deleteItem(arrayName, newItem)
                } else {
                    await data.addItem(arrayName, newItem)
                }
                break
        }
    }, [])

    const checkItemInArray = useCallback((arrayName: arrayNameType, sneakers: SneakersInterface) => {
        if (arrayName === "cartData") {
            return isThisArrayHasItem(data.cartDataRef.current, sneakers)
        } else {
            return isThisArrayHasItem(data.favoriteDataRef.current, sneakers)
        }

    }, [])

    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<AllSneakersScreen toggleCheckboxSneakers={toggleCheckboxItem}
                                                                checkItemInArray={checkItemInArray}
                                                                sneakersData={data.sneakersData}
                                                                isFetching={data.isFetching}
                                                                finalPrice={totalPrice.totalPrice}
                                                                cartDataLength={data.cartDataRef.current.length}/>}/>
                    <Route path="/card" element={<ShopCard cartData={data.cartDataRef.current}
                                                           finalPrice={totalPrice.totalPrice}
                                                           setCartData={data.setCartData}
                                                           deleteItem={data.deleteItem}/>}/>
                    <Route path="/favorites" element={<Favorites finalPrice={totalPrice.totalPrice}
                                                                 cartDataLength={data.cartDataRef.current.length}
                                                                 favoriteData={data.favoriteDataRef.current}/>}/>
                </Routes>
            </BrowserRouter>
        </>
    )
}

export default App;
