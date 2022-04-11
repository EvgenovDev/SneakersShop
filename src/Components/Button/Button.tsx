import React from "react";
import style from "./Button.module.css"
import {Link} from "react-router-dom";

type Props = {
    textContent: string
}

const Button: React.FC<Props> = ({textContent}) => {
    return (
        <Link to="/">
            <button className={textContent === "Заказать" ? style.totalButton : style.noItemButton}>
                {textContent === "Перейти на главную" ?
                    <img className={style.arrow}
                         src="./images/arrow-back.svg" alt="arrowBack"/>
                    :
                    <></>
                }
                {textContent}
            </button>
        </Link>
    )
}

export default Button;