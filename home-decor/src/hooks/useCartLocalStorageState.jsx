import { useState } from "react"

let key = "cartData"
export default function useCartLocalStorageState(initValue){
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
            setState([]);
            return;
        }

        localStorage.setItem(key,JSON.stringify(value));

        setState(value)

    }

    return [
        state,
        setLocalStorageState
    ]

}