import { Navigate } from "react-router-dom";
import useAuth from "../Hooks/useAuth";

const PrivateRoutes = ({children}) => {
    const {user, loading} = useAuth()

    if(loading){
        return <p>loading</p>
    }

    if(user){
        return children
    }

    return <Navigate to="/"></Navigate>
};

export default PrivateRoutes;