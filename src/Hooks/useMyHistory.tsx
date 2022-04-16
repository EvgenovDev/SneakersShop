import {useNavigate} from "react-router-dom";

const useMyHistory = () => {

    const navigate = useNavigate()

    const goHome = () => {
        navigate("/")
    }

    return {goHome}
}

export default useMyHistory