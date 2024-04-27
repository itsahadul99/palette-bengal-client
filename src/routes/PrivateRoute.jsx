/* eslint-disable react/prop-types */
import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";

const PrivateRoute = ({children}) => {
    const {user, loading} = useContext(AuthContext)
    const location = useLocation();
    if (loading) {
        return <div className="flex justify-center items-center min-h-screen">
            <div className="w-16 h-16 border-4 border-dashed rounded-full animate-spin border-violet-400 dark:border-violet-600"></div>
        </div>
    }
    if(user){
        return children;
    }
    return <Navigate state={location.pathname} to ='/login'></Navigate>;
};

export default PrivateRoute;