import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../Hooks/useAuth";
import useAdmin from "../Hooks/useAdmin";
import Spinner from "../Shared/Spinner";

const AdminRoutes = ({ children }) => {
    const location = useLocation()
    const { user, loading } = useAuth()
    const [isAdmin, adminLoading] = useAdmin()

    if (loading || adminLoading) {
        return <Spinner></Spinner>
    }

    if (user && isAdmin) {
        return children;
    }

    return <Navigate to="/login" state={{ from: location }} replace></Navigate>
};

export default AdminRoutes;