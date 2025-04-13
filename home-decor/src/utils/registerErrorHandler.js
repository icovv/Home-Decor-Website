export default function registerErrorHandler(value){
    let errMsg = [];
    let emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;

    if(value.email.trim() == "" || value.password.trim() == "" || value.repass.trim() == ""){
        errMsg.push({message:"All fields are required!"})
        return errMsg;
        // setErr([{message:"All fields are required!"}])
    }
    
    if(!emailPattern.test(value.email.trim())){
        errMsg.push({message:"Please provide a valid email!"})
    }

    if(value.password.trim() != value.repass.trim()){
        errMsg.push({message:"Password must match!"})
        // setErr([{message:"Password must match!"}]) // add error handling
    }

    if(value.password.trim().length < 6){
        errMsg.push({message:'Password must be at least 6 characters long!'})
        // setErr([{message:"Password must be longer than 6 characters!"}]) // add error handling
    }

    if(errMsg.length > 0){
        return errMsg;
    }

    return [];
}