import {createContext} from "react";
import {SneakersInterface} from "../Types/sneakersTypes";

export const FavoritesContext = createContext<SneakersInterface[] | null>(null)