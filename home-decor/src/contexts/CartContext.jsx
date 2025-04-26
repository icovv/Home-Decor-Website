import { createContext } from "react";
import useCartLocalStorageState from "../hooks/useCartLocalStorageState";
import { data, useNavigate } from "react-router-dom";

let CartContext = createContext();

export const CartProvider = ({
    children
}) => {
    let [state,setLocalStorageState] = useCartLocalStorageState([]);

   let addToCart = (data) => {

        let localArr = [...state];
        let index = localArr.findIndex(x => x.itemId === data.itemId)
        if(index !== -1){
            localArr[index] = data;
            setLocalStorageState(localArr);
        } else {
        localArr.push(data);
        setLocalStorageState(localArr);
        }

   }

   let removeFromCart = (data) => {
        let localArr = [...state];
        let newState = localArr.filter(x => x.itemId !== data.itemId);
        setLocalStorageState(newState);
    }
    
    let changeCount = (data,newCounter) => {
        let localArr = [...state];
        let newState = localArr.filter(x => x.itemId !== data.itemId);
        data.counter = newCounter;
        newState.push(data);
        setLocalStorageState(newState);
    }

    let values = {
        state,
        addToCart,
        removeFromCart,
        changeCount
    }

    return(
        <CartContext.Provider value={values}>
            {children}
        </CartContext.Provider>
    )
}

export default CartContext;