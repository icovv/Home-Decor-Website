import { useState } from "react";
import { useNavigate } from "react-router-dom";
import registerErrorHandler from "../utils/registerErrorHandler";
import changeProfileDataErrorHandler from "../utils/changeProfileDataErrorHandler";

export default function useFormSubmitHandlers(value, handler,changeValues,userID){
    let [err,setErr] = useState([]);
    let navigate = useNavigate();

    let loginSubmitHandler = async(e) => {

        e.preventDefault();

        console.log(value);

        if(value.email.trim() == "" || value.password.trim() == ""){
            changeValues({email: value.email, password: ""});
            setErr([{message:"All fields are required!"}])
            return;
        }

        let {email,password} = value;

        email = email.trim();
        password = password.trim();

        let result = await handler(email,password);

        if(result.message){
            let errMsg = [];
            result.message.forEach(x => errMsg.push({message:`${x}`})); // add error handling
            setErr(errMsg);
            changeValues({email: value.email, password: ""});
            return
        }

        navigate('/')
    }

    let registerSubmitHandler = async(e) => {
        
        e.preventDefault();
        
        let errors = registerErrorHandler(value);
        
        if(errors.length > 0){
            changeValues({email: value.email, password: "", repass: ""});
            setErr(errors);
            return;
        }

        let {email,password} = value;

        email = email.trim();
        password = password.trim();

        let result = await handler(email,password);

        if(result.message){
            let errMsg = [];
            result.message.forEach(x => errMsg.push({message:`${x}`})); // add error handling
            setErr(errMsg);
            changeValues({email: value.email, password: ""});
            return
        }
        
        navigate('/')

    }

    let logoutSubmitHandler = async() => {

        await handler();
        
    }

    let changeProfileDataSubmitHandler = async(e) => {
        
        e.preventDefault();

        let {name,town,streetName,streetNumber,tel} = value;

        let initValue = value;

        let errors = changeProfileDataErrorHandler(value);

        if(errors.length > 0){
            if(errors[0].message == "Something went wrong, please log into your account!"){
                setErr(errors);
                console.log(errors);
                return; 
                // add 404 error page and change the navigation from here also remove the local Storage in order to reroute the user and also change
                // the header
            }
            changeValues(initValue);
            setErr(errors);
            console.log(errors);
            return;
        }
        
        if(tel.toString().trim() == ""){
            tel = 0;
        }

        name = name.trim();
        town = town.trim();
        streetName = streetName.trim();

        // add validation

        let result = await handler(userID, name,town,streetName,streetNumber,tel);

        if(result.message){
            let errMsg = [];
            result.message.forEach(x => errMsg.push({message:`${x}`})); // add error handling
            setErr(errMsg);
            changeValues(initValue);
            return
        }

        navigate('/')
    }

    let divKill = () => {
        setErr([]);
    }

    return {
        err,
        divKill,
        loginSubmitHandler,
        registerSubmitHandler,
        logoutSubmitHandler,
        changeProfileDataSubmitHandler
    }
}