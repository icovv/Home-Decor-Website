import { useContext, useEffect } from "react";
import { Navigate } from "react-router-dom";
import AuthContext from "../../../contexts/AuthContext";
import useFormSubmitHandlers from "../../../hooks/useFormSubmitHandlers";

export default function Logout(){
    let {logoutHandler} = useContext(AuthContext);
    
    let {logoutSubmitHandler} = useFormSubmitHandlers(null,logoutHandler,null);
    
    useEffect(() => {
        logoutSubmitHandler();
    })

    return (
        <Navigate to='/'></Navigate>
    )
}