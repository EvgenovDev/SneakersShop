// @flow
import * as React from 'react';
import MainHeader from "../Header/MainHeader";
import style from "./Favorites.module.css"
import {SneakersInterface} from "../../Types/sneakersTypes";
import Button from "../Button/Button";
import FavoriteCard from "./FavoriteCard/FavoriteCard";

type Props = {
    finalPrice: number
    cartDataLength: number
    favoriteData: SneakersInterface []
}

const Favorites: React.FC<Props> = ({finalPrice, cartDataLength, favoriteData}) => {
    return (
        <div className={style.wrap}>
            <MainHeader finalPrice={finalPrice} cartDataLength={cartDataLength}/>
            {favoriteData.length ?
                <div className={style.content}>
                    <h2 className={style.favoriteCardTitle}>
                        Ваши закладки
                    </h2>
                    <div className={style.favoriteCards}>
                        {favoriteData.map(item => <FavoriteCard key={item.id}
                                                                sneakers={item}/>)}
                    </div>
                </div>
                :
                <div className={style.noFavoritesWrap}>
                    <h2 className={style.noFavoritesTitle}>
                        Нет закладок
                    </h2>
                    <img src="./images/smileFavorites.png" alt="smile"/>
                    <div className={style.noFavoritesText}>
                        Добавьте товар в избранное, чтобы увидеть его здесь
                    </div>
                    <Button textContent="Перейти на главную"/>
                </div>
            }
        </div>
    )
}

export default Favorites