import { useEffect } from "react"
import { adminGetSingleItem } from "../../../api/AdminService"
import { useNavigate } from "react-router-dom"

export default async function useEditGetData(id,category, changeValues,setImg) {
    let navigate = useNavigate();
    useEffect(() => {
        let getItemData = async() => {
            let categories = {"bedroom":"Bedroom", "decor":"Decor", "dining-room":"Dining-Room"}

            let response = await adminGetSingleItem(category,id);
            if(response.code == 404){
                let err = [{message: response.message}]
                navigate('*',{state: {errors: err} })
                console.log(response.message);
                return;
            }
            changeValues({
                cat: categories[response.cat],
                title: response.tittle,
                col: response.col,
                price: response.price,
                description: response.description,
                characteristics: response.characteristics
            })

            setImg(`data:${response.contentType};base64,${response.picture}`);
        }
        getItemData()
    }, [])
}