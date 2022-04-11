import {useState} from "react";
import {SneakersInterface} from "../Types/sneakersTypes";

const useFavorite = () => {
    const [favorite, setFavorite] = useState<SneakersInterface[]>([])

    return {favorite, setFavorite}
}

export default useFavorite