// @flow
import * as React from 'react';
import style from "./MainHeader.module.css";
import {Link} from "react-router-dom";
import {addSpaceToNumberPrice} from "../../functions/addSpaceToNumberPrice";

type Props = {
    finalPrice: number
    cartDataLength: number
};

const MainHeader: React.FC<Props> = ({finalPrice, cartDataLength}) => {
    return (
        <header className={style.header}>
            <Link to="/" >
                <div className={style.logoWrap}>
                    <img className={style.logo} src="./images/logo.png" alt="Logo" width="40px" height="40px"/>
                    <div className={style.titleWrap}>
                        <h2 className={style.title}>Sneakers Shop</h2>
                        <p className={style.subTitle}>Магазин лучших кроссовок</p>
                    </div>
                </div>
            </Link>
            <ul className={style.nav}>
                <li className={style.navElem}>
                    <Link to="/card">
                        <img src="./images/card.svg" alt="card"/>
                        <span className={style.totalCount}>{addSpaceToNumberPrice(finalPrice)} руб</span>
                        <span className={cartDataLength === 0 ? style.productCountEmpty : style.productCount}>
                            {cartDataLength}
                        </span>
                    </Link>
                </li>
                <li className={style.navElem}>
                    <Link to="/favorites">
                        <img src="./images/like.svg" alt="like"/>
                    </Link>
                </li>
                <li className={style.navElem}>
                    <img src="./images/user.svg" alt="user"/>
                </li>
            </ul>
        </header>
    );
};

export default React.memo(MainHeader);