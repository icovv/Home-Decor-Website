import { useContext } from "react";
import AuthContext from "../contexts/AuthContext";
import { Navigate, useLocation, } from "react-router-dom";

export default function AuthGuard({children}){
    let {isAuthenticated, isAdmin} = useContext(AuthContext);
    let location = useLocation();

    if(location.pathname =='/admin'){
        
        if(!isAdmin){
            let errors = [{message:"Unauthorized request!"}]
            return <Navigate to='/*' state={{errors}}></Navigate>
        }
    
    }
    
    if(location.pathname == "/logout" && !isAuthenticated){
        let errors = [{message:"Unauthorized request!"}]
        return <Navigate to='/*' state={{errors}}></Navigate>
    }

    if(location.pathname == "/sign-in" || location.pathname == "/sign-up"){

        if(isAuthenticated){
                let errors = [{message:"Unauthorized request!"}]
                return <Navigate to='/*' state={{errors}}></Navigate>
        }

    } else{

        if(!isAuthenticated){
        return <Navigate to='/sign-in'></Navigate>
        }
    
    }

    return children
}