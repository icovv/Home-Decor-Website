import { createContext } from "react";
import useLocalStorageState from "../hooks/useLocalStorage";
import { login, logout, register } from "../api/userService";

let AuthContext = createContext();

export const AuthProvider = ({
    children
}) => {

    let [state, setLocalStorageState] = useLocalStorageState({})

    let loginHandler = async(email,password) => {
        let data = await login(email,password);
        console.log(data)
        if(data.message){
            return data;
        }

        setLocalStorageState(data);

        return data;
    }

    let registerHandler = async(email,password) => {
        let data = await register(email,password);

        if(data.message){
            return data;
        }

        setLocalStorageState(data);

        return data;
    }

    let logoutHandler = async() => {
        await logout();

        setLocalStorageState({});
        localStorage.clear();
    }
    
    let values = {
        loginHandler,
        registerHandler,
        logoutHandler,
        isAuthenticated: state.accessToken ? state.accessToken : false,
    }

    return(
        <AuthContext.Provider value={values}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthContext;