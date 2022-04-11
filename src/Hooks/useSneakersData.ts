import {useState} from "react";
import {SneakersInterface} from "../Types/sneakersTypes";

const useSneakersData = () => {
    const [sneakersData, setSneakersData] = useState<SneakersInterface[]>([])


    return {
        sneakersData, setSneakersData
    }
}

export default  useSneakersData