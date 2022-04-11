import {SneakersInterface} from "../Types/sneakersTypes";


export function searchSneakersByName<T extends SneakersInterface> (data: Array<T>, value: string): Array<T>{
    if (value.length > 0) {
        return data.filter(item => checkValueInSneakersName(item.name.toLowerCase().trim(), value.trim()))
    } else {
        return data
    }
}

const checkValueInSneakersName = (dataValue: string, InputValue: string): boolean => {

    let isCorrect: boolean = false

    if (dataValue.search(InputValue) !== -1) {
        isCorrect = true
    }

    return isCorrect;
}

