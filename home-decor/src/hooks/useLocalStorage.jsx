import { useState } from "react"

let key = "userData"
export default function useLocalStorageState(initValue){
    const [state,setState] = useState(() => {
        let localStorageItem = localStorage.getItem(key);
        if(localStorageItem){
            return JSON.parse(localStorageItem)
        }

        return initValue;
    })

    let setLocalStorageState = (value) => {
        if(value == "delete"){
            localStorage.removeItem(key);
            setState({});
            return;
        }
        setState(value)

        localStorage.setItem(key,JSON.stringify(value));
    }
    return [
        state,
        setLocalStorageState
    ]

}