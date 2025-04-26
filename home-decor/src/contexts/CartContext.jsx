import { createContext } from "react";
import useCartLocalStorageState from "../hooks/useCartLocalStorageState";
import { useNavigate } from "react-router-dom";

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
            console.log(state, "towa e state-a sled update v1");
        } else {
        localArr.push(data);
        setLocalStorageState(localArr);
        console.log(state, "towa e state-a sled update");
        }

   }
    
    let values = {
        state,
        addToCart
    }

    return(
        <CartContext.Provider value={values}>
            {children}
        </CartContext.Provider>
    )
}

export default CartContext;