import React, {useCallback, useState} from "react"
import {IButton} from "../Components/Button/Button";
import {arrayNameType} from "../Types/arrayNameTypes";
import {SneakersInterface} from "../Types/sneakersTypes";
import {Item} from "../functions/checkItemInArray";

interface withAddToCartInterface extends IButton {
    toggleCheckboxSneakers: (arrayName: arrayNameType, item: Item) => void
    checkItemInArray: (arrayName: arrayNameType, sneakers: SneakersInterface) => boolean
    sneakers: SneakersInterface
}

export const withAddToCart = (Component: React.ComponentType<IButton>) => {

    return (props: Omit<withAddToCartInterface, "textContent" | "handleClick">) => {

        const changeValueTextButton = () => {
            if (props.checkItemInArray("cartData", props.sneakers)) {
                return "Убрать из корзины"
            } else {
                return "Добавить в корзину"
            }
        }
        
        const toggleButton = useCallback(async () => {
            await props.toggleCheckboxSneakers("cartData", props.sneakers)
            setTextButton(changeValueTextButton())
        }, [])
        
        const [textButton, setTextButton] = useState<string>(changeValueTextButton())

        return (
            <Component textContent={textButton}
                       mainClassName={props.mainClassName}
                       handleClick={toggleButton}/>
        )

    }
}