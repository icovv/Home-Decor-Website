import { useContext } from "react";
import AuthContext from "../contexts/AuthContext";
import { Navigate, Outlet, useLocation } from "react-router-dom";

export default function AuthGuard({children}){
    let {isAuthenticated, isAdmin} = useContext(AuthContext);
    let location = useLocation();

    if(location.pathname =='/admin'){
        
        if(!isAdmin){
            return null // add error page
        }
    
    }
    
    if(location.pathname == "/logout" && !isAuthenticated){
        console.log('cannot logout when you are not logged in')
        return null //add error page
    }

    if(location.pathname == "/sign-in" || location.pathname == "/sign-up"){

        if(isAuthenticated){
            return null // add error page
        }

    } else{

    if(!isAuthenticated){
        return <Navigate to='/sign-in'></Navigate>
    }
    
    }

    return children
}