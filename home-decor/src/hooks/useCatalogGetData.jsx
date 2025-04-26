import { useEffect, useState } from "react"
import { catalogGetSingleItem, getCatalogItems } from "../api/catalogService";

export default function useCatalogGetData(id){
    let [err,setErr] = useState([]);
    let [data,setData] = useState([]);

    let getBedroomItems = (e) => {
        useEffect(() => {
            let getData = async() => {
                let response = await getCatalogItems("bedroom");

                    if(response.message && response.code != 200){
                        let err = [{message: data.message}]
                        navigate('*',{state: {errors: err} })
                        console.log(data.message);
                        return;
                    }

                    setData(response.items);
            }
            getData()
        },[])
    }
    let getDecorItems = (e) => {
        useEffect(() => {
            let getData = async() => {
                let response = await getCatalogItems("decor");

                    if(response.message && response.code != 200){
                        let err = [{message: data.message}]
                        navigate('*',{state: {errors: err} })
                        console.log(data.message);
                        return;
                    }

                    setData(response.items);
            }
            getData()
        },[])
    }
    let getDiningRoomItems = (e) => {
        useEffect(() => {
            let getData = async() => {
                let response = await getCatalogItems("dining-room");

                    if(response.message && response.code != 200){
                        let err = [{message: data.message}]
                        navigate('*',{state: {errors: err} })
                        console.log(data.message);
                        return;
                    }

                    setData(response.items);
            }
            getData()
        },[])
    }
    let getSingleBedroomItem = (e) => {
        useEffect(() => {
            let getData = async() => {
                let response = await catalogGetSingleItem("bedroom",id);
                    if(response.message && response.code != 200){
                        let err = [{message: data.message}]
                        navigate('*',{state: {errors: err} })
                        console.log(data.message);
                        return;
                    }

                    setData(response);
            }
            getData()
        },[])
    }
    let getSingleDecorItem = (e) => {
        useEffect(() => {
            let getData = async() => {
                let response = await catalogGetSingleItem("decor",id);

                    if(response.message && response.code != 200){
                        let err = [{message: data.message}]
                        navigate('*',{state: {errors: err} })
                        console.log(data.message);
                        return;
                    }

                    setData(response);
            }
            getData()
        },[])
    }
    let getSingleDiningRoomItem = (e) => {
        useEffect(() => {
            let getData = async() => {
                let response = await catalogGetSingleItem("dining-room",id);

                    if(response.message && response.code != 200){
                        let err = [{message: data.message}]
                        navigate('*',{state: {errors: err} })
                        console.log(data.message);
                        return;
                    }

                    setData(response);
            }
            getData()
        },[])
    }

    return {
        data,
        getBedroomItems,
        getDecorItems,
        getDiningRoomItems,
        getSingleBedroomItem,
        getSingleDecorItem,
        getSingleDiningRoomItem
    }
}