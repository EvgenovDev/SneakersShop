import React from "react";
import {withGoTo} from "../../HOC/withGoTo";
import style from "./Button.module.css"
import {withAddToCart} from "../../HOC/withAddToCart";

export type IButton = {
    textContent: string
    mainClassName: string
    handleClick: () => void
}

export const Button: React.FC<IButton> = ({textContent, mainClassName, handleClick}) => {
    return (
        <button className={mainClassName} onClick={handleClick}>{textContent}</button>
    )
}

export const WithGoToButton = withGoTo(Button, style.noItemButton)

export const WithAddToCartButton = withAddToCart(Button)
