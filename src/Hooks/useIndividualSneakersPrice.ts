import {useEffect, useState} from "react";
import {addSpaceToNumberPrice} from "../functions/addSpaceToNumberPrice";
import {SneakersInterfaceCart} from "../Types/sneakersTypes";

const useIndividualSneakersPrice = (sneakers: SneakersInterfaceCart) => {
    const [allPriceIndividualSneakersValue, setAllPriceIndividualSneakersValue] = useState<string>(sneakers.cost)
    const [countThisSneakers, setCountThisSneakers] = useState<string>(sneakers.count)

    const calcIndividualSneakersPrice = (): void => {
        const IndividualSneakersPrice = (+sneakers.cost.split(" ").join("") * +countThisSneakers)
        setAllPriceIndividualSneakersValue((prevState) => addSpaceToNumberPrice(IndividualSneakersPrice))
    }

    useEffect(() => {
        calcIndividualSneakersPrice()
    }, [countThisSneakers])

    return {
        allPriceIndividualSneakersValue,
        calcIndividualSneakersPrice,
        countThisSneakers,
        setCountThisSneakers
    }
}

export default useIndividualSneakersPrice