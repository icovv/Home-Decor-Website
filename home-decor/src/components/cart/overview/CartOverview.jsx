import { Link } from "react-router-dom"
import styles from "./CartOverview.module.css"
import { useContext } from "react"
import CartContext from "../../../contexts/CartContext"
import CartSingleItem from "./cartSingleItem/CartSingleItem";

export default function CartOverview() {
    let {state} = useContext(CartContext);
    let totalAmount = 0;
    state.forEach(x => totalAmount += (x.counter * x.price))
    return (
        <main>
            <div className={styles.container}>
                <div className={styles["top-side"]}>
                    <h1>Cart Overview</h1>
                </div>
                <div className={styles["bottom-side"]}>
                    <div className={styles["left-side"]}>
                        <div className={styles.container}>
                        {state.length > 0
                        ?
                        state.map(x => <CartSingleItem key={x.itemId} item={x}></CartSingleItem>)
                        :
                        <></>}
                        </div>
                    </div>
                    <div className={styles["right-side"]}>
                        <h3>Your Order</h3>
                        <div className={styles["total-amount"]}>
                            <h4>Total Amount</h4>
                            <p>{totalAmount} $</p>
                        </div>
                        <Link to='/cart/order'>Continue</Link>
                    </div>
                </div>
            </div>
        </main>

    )
}