import React from "react";
import {SneakersInterface} from "../../../Types/sneakersTypes";
import style from "./FavoriteCard.module.css"
import {WithAddToCartButton} from "../../Button/Button";
import {arrayNameType} from "../../../Types/arrayNameTypes";
import {Item} from "../../../functions/checkItemInArray";

type Props = {
    sneakers: SneakersInterface
    toggleCheckboxSneakers: (arrayName: arrayNameType, item: Item) => void
    checkItemInArray: (arrayName: arrayNameType, sneakers: SneakersInterface) => boolean
}

const FavoriteCard: React.FC<Props> = ({
                                           sneakers,
                                           toggleCheckboxSneakers,
                                           checkItemInArray
                                       }) => {
    return (
        <div className={style.favoriteCardWrap}>
            <div className={style.deleteIconWrap}>
                <span className={style.deleteIconText}>Убрать из закладок</span>
                <span className={style.deleteIcon1}></span>
                <span className={style.deleteIcon2}></span>
            </div>
            <div>
                <img className={style.favoriteCardImage} src={sneakers.urlImage} alt="sneakers"/>
            </div>
            <div>
                <span className={style.sneakersCost}> 920 ₽ </span>
                <span className={style.sneakersSale}> {sneakers.cost} ₽</span>
            </div>
            <div className={style.nameWrap}>
                <span className={style.sneakersName}>{sneakers.name} </span>
                /
                <span className={style.sneakersSex}> {sneakers.sex}</span>
            </div>
            <WithAddToCartButton sneakers={sneakers}
                                 mainClassName={style.addCartButton}
                                 toggleCheckboxSneakers={toggleCheckboxSneakers}
                                 checkItemInArray={checkItemInArray}/>
        </div>
    )
}

export default FavoriteCard