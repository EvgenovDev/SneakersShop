import React from "react";
import {IButton} from "../Components/Button/Button";
import useMyHistory from "../Hooks/useMyHistory";

export const withGoTo = (Component: React.ComponentType<IButton>, mainClassName: string) => {
    return (props: Omit<IButton, "handleClick" | "mainClassName">) => {
        const history = useMyHistory()
        return (
            <Component textContent={props.textContent}
                       mainClassName={mainClassName}
                       handleClick={history.goHome}/>
        )
    }
}