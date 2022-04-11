// @flow
import * as React from 'react';
import style from "./Sneakers.module.css";
import {useState} from "react";
import {Item} from "../../../../functions/checkItemInArray";
import {SneakersInterface} from "../../../../Types/sneakersTypes";
import {arrayNameType} from "../../../../Types/arrayNameTypes";

type Props = {
    sneakers: SneakersInterface
    toggleCheckboxSneakers: (arrayName: arrayNameType, item: Item) => void
    checkItemInArray: (arrayName: arrayNameType, sneakers: SneakersInterface) => boolean
}

const Sneakers: React.FC<Props> = ({
                                       sneakers,
                                       toggleCheckboxSneakers,
                                       checkItemInArray
                                   }) => {

    const [isAddCart, setIsAddCart] = useState(false)
    const [isAddFavorite, setIsAddFavorite] = useState(false)

    const toggleItem = async (arrayName: arrayNameType) => {
        await toggleCheckboxSneakers(arrayName, sneakers)
        if (arrayName === "cartData") {
            setIsAddCart((value) => !value)
        } else {
            setIsAddFavorite((value) => !value)
        }
    }

    return (
        <div className={style.wrap}>
            <img className={style.likeItem}
                 src={checkItemInArray("favoriteData", sneakers) ? "./images/added-favorite.svg" : "./images/like-item.svg"}
                 alt="Like Item"
                 onClick={() => {
                     toggleItem("favoriteData")
                 }}/>
            <img
                className={style.sneakersImage}
                src={sneakers.urlImage}
                alt="Sneakers"
                width="133px"
                height="112px"/>
            <h3 className={style.sneakersName}>
                <span>{sneakers.sex}</span>
                <span>{sneakers.name}</span>
            </h3>
            <div className={style.costWrap}>
                <div className={style.cost}>
                    <span className={style.subText}>Цена</span>
                    <p className={style.text}>{sneakers.cost} руб.</p>
                </div>
                <img className={style.addItem}
                     src={checkItemInArray("cartData", sneakers) ? "./images/add-item-ok.svg" : "./images/add-item.png"}
                     alt="Add Item"
                     onClick={() => {
                         toggleItem("cartData")
                     }}/>
            </div>
        </div>
    );
};

export default React.memo(Sneakers);