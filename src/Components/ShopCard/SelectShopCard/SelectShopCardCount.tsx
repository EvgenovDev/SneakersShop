// @flow
import * as React from 'react';
import style from "./SelectShopCard.module.css"

type Props = {
    setCountSneakers: (count: string) => void
    valueCount: string
}

const SelectShopCardCount: React.FC<Props> = ({setCountSneakers, valueCount}) => {
    return (
        <div className={style.select}>
            <p>Количество:</p>
            <select name="count"
                    id="count"
                    value={Number(valueCount)}
                    onChange={(e) => {
                        setCountSneakers(e.target.value)
                    }}>
                <option value={1}>1</option>
                <option value={2}>2</option>
                <option value={3}>3</option>
                <option value={4}>4</option>
            </select>
        </div>
    )
}

export default React.memo(SelectShopCardCount)