// @flow
import * as React from 'react';
import style from "./SneakersShopCard.module.css"
import useIndividualSneakersPrice from "../../../Hooks/useIndividualSneakersPrice";
import SelectShopCardSize from "../SelectShopCard/SelectShopCardSize";
import SelectShopCardCount from "../SelectShopCard/SelectShopCardCount";
import {SneakersInterface, SneakersInterfaceCart} from "../../../Types/sneakersTypes";
import {useEffect, useState} from "react";
import classNames from "classnames";
import {Item} from "../../../functions/checkItemInArray";
import {arrayNameType} from "../../../Types/arrayNameTypes";

type Props = {
    sneakers: SneakersInterfaceCart
    setCartData: (cartData: SneakersInterfaceCart[]) => void
    cartData: Array<SneakersInterfaceCart>
    deleteItem: (arrayName: arrayNameType, deleteItem: Item) => void
    toggleCheckboxItem: (arrayName: arrayNameType, item: Item) => void
    checkItemInArray: (arrayName: arrayNameType, sneakers: SneakersInterface) => boolean
}

const SneakersShopCard: React.FC<Props> = ({
                                               sneakers,
                                               setCartData,
                                               cartData,
                                               deleteItem,
                                               toggleCheckboxItem,
                                               checkItemInArray
                                           }) => {

    const [isAddedFavorite, setIsAddedFavorite] = useState<boolean>(checkItemInArray("favoriteData", sneakers))

    const individualSneakersPrice = useIndividualSneakersPrice(sneakers)

    const changeCountSneakers = () => {
        const newCartData = cartData.map((item) => {
            if (item.id !== sneakers.id) {
                return item
            } else {
                return {...item, count: individualSneakersPrice.countThisSneakers}
            }
        })
        setCartData(newCartData)
    }

    const onClickDelete = (arrayName: arrayNameType) => {
        deleteItem(arrayName, sneakers)
    }

    const onClickFavoritesToggle = (arrayName: arrayNameType) => {
        toggleCheckboxItem(arrayName, sneakers)
        setIsAddedFavorite(value => !value)
    }

    useEffect(() => {
        changeCountSneakers()
    }, [individualSneakersPrice.countThisSneakers])

    return (
        <div className={style.wrap}>
            <div className={style.flexWrap}>
                <img className={style.sneakersImage}
                     src={sneakers.urlImage} alt="Sneakers"/>
                <div className={style.params}>
                    <h3 className={style.sneakersName}>{sneakers.name}</h3>
                    <p className={style.sex}>{sneakers.sex}</p>
                    <div className={style.selectsWrap}>
                        <SelectShopCardSize/>
                        <SelectShopCardCount setCountSneakers={individualSneakersPrice.setCountThisSneakers}
                                             valueCount={individualSneakersPrice.countThisSneakers}/>
                    </div>
                    <div className={style.totalWrap}>
                        <span className={style.cost}>
                            {individualSneakersPrice.allPriceIndividualSneakersValue} ???
                        </span>
                    </div>
                    <div className={style.actionWrap}>
                        <span className={classNames(style.action, style.action1)}
                              onClick={() => {
                                  onClickFavoritesToggle("favoriteData")
                              }}>
                            {isAddedFavorite ?
                                "?? ??????????????????" : "???????????????? ?? ??????????????????"}
                        </span>
                        <span className={classNames(style.action, style.action2)}
                              onClick={() => {
                                  onClickDelete("cartData")
                              }}>?????????????? ???? ??????????????</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SneakersShopCard