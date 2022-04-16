// @flow
import * as React from 'react';
import MainHeader from "../Header/MainHeader";
import style from "./Favorites.module.css"
import {SneakersInterface} from "../../Types/sneakersTypes";
import FavoriteCard from "./FavoriteCard/FavoriteCard";
import {WithGoToButton} from "../Button/Button";
import {arrayNameType} from "../../Types/arrayNameTypes";
import {Item} from "../../functions/checkItemInArray";

type Props = {
    finalPrice: number
    cartDataLength: number
    favoriteData: SneakersInterface []
    toggleCheckboxSneakers: (arrayName: arrayNameType, item: Item) => void
    checkItemInArray: (arrayName: arrayNameType, sneakers: SneakersInterface) => boolean
}

const Favorites: React.FC<Props> = ({
                                        finalPrice,
                                        cartDataLength,
                                        favoriteData,
                                        checkItemInArray,
                                        toggleCheckboxSneakers
                                    }) => {
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
                                                                sneakers={item}
                                                                checkItemInArray={checkItemInArray}
                                                                toggleCheckboxSneakers={toggleCheckboxSneakers}/>)}
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
                    <WithGoToButton textContent={"Перейти на главную"}/>
                </div>
            }
        </div>
    )
}

export default Favorites