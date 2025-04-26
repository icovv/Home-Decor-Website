import { useState } from "react"
import { getAdminItems } from "../../../api/AdminService";

export default function useGetItemsData(setActive){
    let [data,setData] = useState([]);
    let [err,setErr] = useState([]);
    let categories = ["bedroom","decor","dining-room"]

    let useGetBedroomItems = async (e) => {
        let category = e.target.id

        if (!categories.includes(category)){
            setErr([{message:"Please select a valid category!"}]);
            return;
        }
        setActive("bedroom")
        let result = await getAdminItems(category);

        if(result.message){
            let errMsg = [];
            result.message.forEach(x => errMsg.push({message:`${x}`}));
            setErr(errMsg);
            return
        }
        setActive("bedroom")
        setData(result.items);
    }

    let useGetDecorItems = async (e) => {
        let category = e.target.id

        if (!categories.includes(category)){
            setErr([{message:"Please select a valid category!"}]);
            return;
        }
        
        let result = await getAdminItems(category);

        if(result.message){
            let errMsg = [];
            result.message.forEach(x => errMsg.push({message:`${x}`}));
            setErr(errMsg);
            return
        }
        setActive("decor")
        setData(result.items);
    }

    let useGetDiningRoomItems = async (e) => {
        let category = e.target.id

        if (!categories.includes(category)){
            setErr([{message:"Please select a valid category!"}]);
            return;
        }
        
        let result = await getAdminItems(category);

        if(result.message){
            let errMsg = [];
            result.message.forEach(x => errMsg.push({message:`${x}`}));
            setErr(errMsg);
            return
        }
        setActive("dining-room")
        setData(result.items);
    }
    
    let divKill = () => {
        setErr([]);
    }
    return{
        data,
        err,
        divKill,
        useGetBedroomItems,
        useGetDecorItems,
        useGetDiningRoomItems
    }

}