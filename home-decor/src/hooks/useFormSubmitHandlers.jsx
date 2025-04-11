import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function useFormSubmitHandlers(value, handler,changeValues,userID){
    let [err,setErr] = useState([]);
    let navigate = useNavigate();

    let loginSubmitHandler = async(e) => {

        e.preventDefault();

        console.log(value);

        if(value.email.trim() == "" || value.password.trim() == ""){
            changeValues({email: value.email, password: ""});
            console.log("All fields are required!"); // add error handling
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

        console.log(value);

        // if(value.email.trim() == "" || value.password.trim() == "" || value.repass.trim() == ""){
        //     changeValues({email: value.email, password: "", repass: ""});
        //     console.log("All fields are required!"); // add error handling
        //     return;
        // }

        // if(value.password != value.repass){
        //     changeValues({email: value.email, password: "", repass: ""});
        //     console.log("Password must match!"); // add error handling
        //     return;
        // }

        let {email,password} = value;

        email = email.trim();
        password = password.trim();
        console.log(password.length)
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

        let {name,town,streetName,streetNumber,tel} = value;
        if(tel.toString().trim() == ""){
            tel = 0;
        }
        console.log(tel);
        if(name.trim() == "" || town.trim() == "" || streetName.trim() == "", streetNumber.toString().trim() == "", tel.toString().trim() == 0){
            console.log("All fields are required!"); // add error handling;
            return;
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