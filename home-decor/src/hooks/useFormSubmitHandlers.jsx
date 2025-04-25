import { useState } from "react";
import { useNavigate } from "react-router-dom";
import registerErrorHandler from "../utils/registerErrorHandler";
import changeProfileDataErrorHandler from "../utils/changeProfileDataErrorHandler";
import { adminCreateItem } from "../api/AdminService";
import createNewItemDataErrorHandler from "../utils/createNewItemDataErrorHandler";

export default function useFormSubmitHandlers(value, handler,changeValues,userID,setLocalStorageState,image){
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
            result.message.forEach(x => errMsg.push({message:`${x}`}));
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
            result.message.forEach(x => errMsg.push({message:`${x}`}));
            setErr(errMsg);
            changeValues({email: value.email, password: ""});
            return
        }
        
        navigate('/');


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
                navigate('/*',{state:{errors:errors}})
                setTimeout(() => {
                    setLocalStorageState("delete");
                },30);
                return; 
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
            result.message.forEach(x => errMsg.push({message:`${x}`}));
            setErr(errMsg);
            changeValues(initValue);
            return
        }

        navigate('/');

    }

    let adminCreate = async (e) => {
        e.preventDefault();
        let user = JSON.parse(localStorage.getItem('userData'))

        if(!user || !user.email){
            setErr([{message:"Something went wrong, please log into your account!"}]);
            navigate('/*',{state:{"errors":[{message:"Something went wrong, please log into your account!"}]}})
            setTimeout(() => {
                setLocalStorageState("delete");
            },30);
            return; 
        }

        let errors = createNewItemDataErrorHandler(value,image);

        if(errors.length > 0){
            setErr(errors);
            return;
        }

        let formData = new FormData();
        formData.append("image", image);
        formData.append("title", value.title);
        formData.append("col", value.col);
        formData.append("price", value.price);
        formData.append("description", value.description);
        formData.append("characteristics", value.characteristics);
        formData.append("email",user.email);


        let result = await adminCreateItem(value.cat,formData);

        if(result.message){
            let errMsg = [];
            result.message.forEach(x => errMsg.push({message:`${x}`}));
            setErr(errMsg);
            return
        }

        navigate("/admin/list")

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
        changeProfileDataSubmitHandler,
        adminCreate
    }
}