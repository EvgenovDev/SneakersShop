import React from "react";
import style from "./CardButton.module.css"
import {Link} from "react-router-dom";

type Props = {
    textContent: string
}

const CardButton: React.FC<Props> = ({textContent}) => {
    return (
        <Link to="/">
            <button className={textContent === "Заказать" ? style.totalButton : style.noItemButton}>{textContent}</button>
        </Link>
    )
}

export default CardButton;