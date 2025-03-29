import { useContext } from "react";
import AuthContext from "../contexts/AuthContext";
import { Navigate, Outlet, useLocation } from "react-router-dom";

export default function AuthGuard({children}){
    let {isAuthenticated} = useContext(AuthContext);
    let location = useLocation();
    
    if(location.pathname == "/sign-in" || location.pathname == "/sign-up"){
        if(isAuthenticated){
            return null
        }
    }

    if(!isAuthenticated){
        return <Navigate to='/sign-in'></Navigate>
    }

    return children
}