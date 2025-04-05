import { useNavigate } from "react-router-dom";

export default function useFormSubmitHandlers(value, handler,changeValues){

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
            result.message.forEach(x => console.log(x)); // add error handling
            changeValues({email: value.email, password: ""});
            return
        }

        navigate('/')
    }

    let registerSubmitHandler = async(e) => {
        
        e.preventDefault();

        console.log(value);

        if(value.email.trim() == "" || value.password.trim() == "" || value.repass.trim() == ""){
            changeValues({email: value.email, password: "", repass: ""});
            console.log("All fields are required!"); // add error handling
            return;
        }

        if(value.password != value.repass){
            changeValues({email: value.email, password: "", repass: ""});
            console.log("Password must match!"); // add error handling
            return;
        }

        let {email,password} = value;

        email = email.trim();
        password = password.trim();
        console.log(password.length)
        let result = await handler(email,password);

        if(result.message){
            result.message.forEach(x => console.log(x)); // add error handling
            changeValues({email: value.email, password: ""});
            return
        }


    }

    let logoutSubmitHandler = async() => {

        await handler();
        
    }

    return {
        loginSubmitHandler,
        registerSubmitHandler,
        logoutSubmitHandler
    }
}