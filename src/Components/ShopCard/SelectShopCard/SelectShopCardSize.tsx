import style from "./SelectShopCard.module.css";
import * as React from "react";

type Props = {}

const SelectShopCardSize: React.FC<Props> = () => {
    return (
        <div className={style.select}>
            <p>Размер:</p>
            <select name="size"
                    id="size">
                <option value={39}>EU 7 (RU 39)</option>
                <option value={39.5}>EU 7.5 (RU 39.5)</option>
                <option value={40}>EU 8 (RU 40)</option>
                <option value={40.5}>EU 9 (RU 40.5)</option>
                <option value={41}>EU 10 (RU 41)</option>
            </select>
        </div>
    )
}

export default React.memo(SelectShopCardSize)