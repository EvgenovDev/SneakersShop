import React from "react";
import style from "./AllSneakersScreen.module.css";
import MainHeader from "../MainHeader/MainHeader";
import AllSneakersContent from "./AllSneakersContent/AllSneakersContent";
import {SneakersInterface} from "../../Types/sneakersTypes";
import {Item} from "../../functions/checkItemInArray";
import {arrayNameType} from "../../Types/arrayNameTypes";

type Props = {
    toggleCheckboxSneakers: (arrayName: arrayNameType, item: Item) => void
    checkItemInArray: (arrayName: arrayNameType, sneakers: SneakersInterface) => boolean
    sneakersData: Array<SneakersInterface>
    isFetching: boolean
    finalPrice: number
}

const AllSneakersScreen: React.FC<Props> = ({
                                                toggleCheckboxSneakers,
                                                checkItemInArray,
                                                sneakersData,
                                                isFetching,
                                                finalPrice
                                            }) => {
    return (
        <div className={style.wrap}>
            <MainHeader finalPrice={finalPrice}/>
            <AllSneakersContent toggleCheckboxSneakers={toggleCheckboxSneakers}
                                checkItemInArray={checkItemInArray}
                                sneakersData={sneakersData}
                                isFetching={isFetching}/>
        </div>
    )
}

export default React.memo(AllSneakersScreen);