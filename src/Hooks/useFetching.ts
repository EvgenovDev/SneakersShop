import {useState} from "react";

const useFetching = () => {
    const [isFetching, setIsFetching] = useState<boolean>(false)
    
    return {
        isFetching,
        setIsFetching
    }
}

export default useFetching