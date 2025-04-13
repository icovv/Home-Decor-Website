import { useState } from "react";
import { useNavigate } from "react-router-dom";
import registerErrorHandler from "../utils/registerErrorHandler";

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

        let initValue = value;
        if(value.tel.toString().trim() == ""){
            tel = 0;
        }

        
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