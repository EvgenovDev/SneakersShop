// @flow
import * as React from 'react';
import style from "./MainHeader.module.css";
import {Link} from "react-router-dom";
import {addSpaceToNumberPrice} from "../../functions/addSpaceToNumberPrice";

type Props = {
    finalPrice: number
};

const MainHeader: React.FC<Props> = ({finalPrice}) => {
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
                        <span>{addSpaceToNumberPrice(finalPrice)} руб</span>
                    </Link>
                </li>
                <li className={style.navElem}>
                    <img src="./images/like.svg" alt="like"/>
                </li>
                <li className={style.navElem}>
                    <img src="./images/user.svg" alt="user"/>
                </li>
            </ul>
        </header>
    );
};

export default React.memo(MainHeader);