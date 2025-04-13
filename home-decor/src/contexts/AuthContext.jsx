import { createContext } from "react";
import useLocalStorageState from "../hooks/useLocalStorage";
import { changeProfileData, login, logout, register } from "../api/userService";

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

        setLocalStorageState("delete");
    }

    let changeProfileDataHandler = async(id, name,town,streetName,streetNumber,tel) => {
        let data = await changeProfileData(id,name,town,streetName,streetNumber,tel);

        if(data.message){
            return data;
        }

        setLocalStorageState(data);

        return data;
    }
    
    let values = {
        loginHandler,
        registerHandler,
        logoutHandler,
        changeProfileDataHandler,
        setLocalStorageState,
        accessToken: state.accessToken ? state.accessToken : false,
        userID: state._id ? state._id : false,
        isAdmin: state.admin ? !!state.admin : false,
        isAuthenticated: state.accessToken ? !!state.accessToken : false,
    }

    return(
        <AuthContext.Provider value={values}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthContext;