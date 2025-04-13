import { useEffect } from "react";
import { getProfileData } from "../../api/userService";
import { useNavigate } from "react-router-dom";

export default function useProfileGetData(id, changeValues){
    let navigate = useNavigate();

    useEffect(() => {
        async function getProfile(){
            console.log(id);
            let data = await getProfileData(id);
            if(data.code == 404){
                let err = [{message: data.message}]
                navigate('*',{state: {errors: err} })
                console.log(data.message);
                return;
            }
            changeValues({
                email: data.email,
                name: data.name,
                town: data.town,
                streetName: data.streetName,
                streetNumber: data.streetNumber,
                tel: data.tel == 0 ? "" : "0" + data.tel,
            })
        }
        getProfile();
    },[])

}