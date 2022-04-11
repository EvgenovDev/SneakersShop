import {useEffect, useState} from "react";
import {SneakersInterfaceCart} from "../Types/sneakersTypes";

const useTotalPrice = (cartData: SneakersInterfaceCart[]) => {
    const [totalPrice, setTotalPrice] = useState<number>(0)

    const calcTotalPrice = () => {
        if (!cartData.length) {
            setTotalPrice(0)
        } else {
            let total = 0
            for (let i = 0; i < cartData.length; i++) {
                total = total + Number(cartData[i].cost.split(" ").join("")) * Number(cartData[i].count)
            }
            setTotalPrice(total)
        }
    }

    useEffect(() => {
        calcTotalPrice()
    }, [cartData])

    return {totalPrice}
}

export default  useTotalPrice