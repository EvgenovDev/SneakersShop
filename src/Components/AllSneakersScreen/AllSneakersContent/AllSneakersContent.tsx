// @flow
import * as React from 'react';
import style from "./AllSneakersContent.module.css";
import Sneakers from "./Sneakers/Sneakers";
import {useState} from "react";
import {searchSneakersByName} from "../../../functions/searchByName";
import Preloader from "../../Preloader/Preloader";
import {Item} from "../../../functions/checkItemInArray";
import {SneakersInterface} from "../../../Types/sneakersTypes";
import {arrayNameType} from "../../../Types/arrayNameTypes";

type Props = {
    toggleCheckboxSneakers: (arrayName: arrayNameType, item: Item) => void
    checkItemInArray: (arrayName: arrayNameType, sneakers: SneakersInterface) => boolean
    sneakersData: Array<SneakersInterface>
    isFetching: boolean
}

const AllSneakersContent: React.FC<Props> = ({
                                                 toggleCheckboxSneakers,
                                                 checkItemInArray,
                                                 sneakersData,
                                                 isFetching
                                             }) => {

    const [searchInputValue, setSearchInputValue] = useState<string>("")
    const [searchData, setSearchData] = useState<SneakersInterface[]>([])

    const handleChangeInputValue = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchInputValue(e.target.value)
        e.target.value === "" || searchData.length === 0 ?
            setSearchData(searchSneakersByName(sneakersData, e.target.value.toLowerCase()))
            :
            setSearchData(searchSneakersByName(searchData, e.target.value.toLowerCase()))
    }

    return (
        <div className={style.wrap}>
            <div className={style.headerContent}>
                <h1 className={style.mainTitle}>Все кроссовки</h1>
                <div className={style.searchWrap}>
                    <img className={style.searchIcon} src="./images/search.svg" alt="Search"/>
                    <input className={style.search}
                           type="text"
                           placeholder="Поиск..."
                           value={searchInputValue}
                           onChange={(e) => {handleChangeInputValue(e)}}/>
                </div>
            </div>
            <div className={style.sneakersWrap}>
                {isFetching ? <Preloader/> :
                    searchData.length > 0 ?
                    searchData.map((item, index) =>
                        <Sneakers sneakers={item}
                                  key={index}
                                  toggleCheckboxSneakers={toggleCheckboxSneakers}
                                  checkItemInArray={checkItemInArray}/>)
                    :
                    (searchData.length === 0 && searchInputValue.length) > 0
                        ?
                            <div className={style.empty}>Кроссовок с таким названием не найдено</div>
                        :
                        sneakersData.map((item, index) =>
                            <Sneakers sneakers={item}
                                      key={index}
                                      toggleCheckboxSneakers={toggleCheckboxSneakers}
                                      checkItemInArray={checkItemInArray}/>)}
            </div>
        </div>
    );
};

export default AllSneakersContent