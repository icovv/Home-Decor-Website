import { useNavigate } from "react-router-dom";
import { login } from "../api/userService";

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
            return
        }

        navigate('/')
    }



    return {
        loginSubmitHandler
    }
}