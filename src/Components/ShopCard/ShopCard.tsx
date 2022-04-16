// @flow
import * as React from 'react';
import style from "./ShopCard.module.css"
import SneakersShopCard from "./SneakersShopCard/SneakersShopCard";
import MainHeader from "../Header/MainHeader";
import {addSpaceToNumberPrice} from "../../functions/addSpaceToNumberPrice";
import {SneakersInterface, SneakersInterfaceCart} from "../../Types/sneakersTypes";
import {Item} from "../../functions/checkItemInArray";
import {arrayNameType} from "../../Types/arrayNameTypes";
import {WithGoToButton} from "../Button/Button";

type Props = {
    cartData: Array<SneakersInterfaceCart>
    finalPrice: number
    setCartData: (cartData: SneakersInterfaceCart[]) => void
    deleteItem: (arrayName: arrayNameType, deleteItem: Item) => void
    toggleCheckboxItem: (arrayName: arrayNameType, item: Item) => void
    checkItemInArray: (arrayName: arrayNameType, sneakers: SneakersInterface) => boolean
};

const ShopCard: React.FC<Props> = ({
                                       cartData,
                                       finalPrice,
                                       setCartData,
                                       deleteItem,
                                       toggleCheckboxItem,
                                       checkItemInArray
                                   }) => {
    return (
        <div className={style.wrap}>
            <MainHeader finalPrice={finalPrice}
                        cartDataLength={cartData.length}/>
            {cartData.length ?
                <div className={style.shopCardFlex}>
                    <div className={style.shopCardWrap}>
                        <div className={style.content}>
                            {cartData.map((item) =>
                                <SneakersShopCard key={item.id}
                                                  sneakers={item}
                                                  setCartData={setCartData}
                                                  cartData={cartData}
                                                  deleteItem={deleteItem}
                                                  toggleCheckboxItem={toggleCheckboxItem}
                                                  checkItemInArray={checkItemInArray}/>)}
                        </div>
                    </div>
                    <div className={style.totalWrap}>
                        <div className={style.total}>
                            <span className={style.totalTitle}>Итого </span>
                            <span className={style.cost}>{addSpaceToNumberPrice(finalPrice)} ₽</span>
                        </div>
                        <div className={style.totalSneakersCount}>
                            <span>Товары, {cartData.length} шт.</span>
                            <span>{addSpaceToNumberPrice(finalPrice)} ₽</span>
                        </div>
                        <div className={style.totalSneakersCount}>
                            <span>Скидка</span>
                            <span>- 1028 ₽</span>
                        </div>
                    </div>
                </div>
                :
                <div className={style.noItemInBasketWrap}>
                    <h2 className={style.noItemTitle}>В корзине ничего нет</h2>
                    <p className={style.noItemText}>Перейдите на главную страницу и добавьте товар в корзину для
                        оформления заказа</p>
                    <WithGoToButton textContent="Перейти на главную"/>
                </div>
            }
        </div>
    );
}

export default React.memo(ShopCard)