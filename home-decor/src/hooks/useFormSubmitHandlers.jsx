import { useNavigate } from "react-router-dom";

export default function useFormSubmitHandlers(value, handler,changeValues,userID){

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
        
        navigate('/')

    }

    let logoutSubmitHandler = async() => {

        await handler();
        
    }

    let changeProfileDataSubmitHandler = async(e) => {
        
        e.preventDefault();

        let initValue = value;

        let {name,town,streetName,streetNumber,tel} = value;
        console.log(typeof streetNumber);
        if(name.trim() == "" || town.trim() == "" || streetName.trim() == "", streetNumber.toString().trim() == "", tel.toString().trim() == 0){
            console.log("All fields are required!"); // add error handling;
            return;
        }

        //add validation

        let result = await handler(userID, name,town,streetName,streetNumber,tel);

        if(result.message){
            result.message.forEach(x => console.log(x)); // add error handling
            changeValues(initValue);
            return
        }

        navigate('/')
    }


    return {
        loginSubmitHandler,
        registerSubmitHandler,
        logoutSubmitHandler,
        changeProfileDataSubmitHandler
    }
}