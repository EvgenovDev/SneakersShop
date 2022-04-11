import React from "react";
import {SneakersInterface} from "../../../Types/sneakersTypes";
import style from "./FavoriteCard.module.css"

type Props = {
    sneakers: SneakersInterface
}

const FavoriteCard: React.FC<Props> = ({sneakers}) => {
    return (
        <div className={style.favoriteCardWrap}>
            <div>
                <img className={style.favoriteCardImage} src={sneakers.urlImage} alt="sneakers"/>
            </div>
            <div>
                <span className={style.sneakersCost}>{sneakers.cost} ₽ </span>
                /
                <span className={style.sneakersSale}> -920 ₽</span>
            </div>
        </div>
    )
}

export default FavoriteCard