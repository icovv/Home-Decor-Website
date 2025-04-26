import { useContext } from "react"
import styles from "./OrderDetails.module.css"
import CartContext from "../../../contexts/CartContext"
import OrderDetailsSingleItem from "./orderDetailsSIngleItem/OrderDetailsSIngleItem"
import useForm from "../../../hooks/useForm"
import AuthContext from "../../../contexts/AuthContext"

export default function OrderDetails() {
    let {state} = useContext(CartContext)
    let {user} = useContext(AuthContext)
    console.log(user)
    let {value,changeHandler} = useForm({
        fullName: user.name,
        email: user.email,
        phone: user.tel,
        town: user.town,
        streetNumber: user.streetNumber,
        streetName: user.streetName,
        comments:'',
    });

    let totalAmount = 0;

    state.forEach(x => totalAmount += (x.counter * x.price))

    return (
        <main>
            <div className= {styles.container}>
                <div className={styles["top-side"]}>
                    <h1>Delivery and Payment</h1>
                </div>
                <div className={styles["bottom-side"]}>
                    <div className={styles["left-side"]}>
                        <div className={styles.container}>
                            <form>
                                <div className={styles.data}>
                                    <h2>Personal Information</h2>
                                    <input type="text" name="fullName" id="fullName" placeholder="Full Name*" value={value.fullName || ""} onChange={changeHandler}/>
                                    <input type="text" name="email" id="email" placeholder="Email*" value={value.email || ""} onChange={changeHandler} />
                                    <input type="text" name="phone" id="phone" placeholder="Phone*" value={value.phone || ""} onChange={changeHandler} />
                                </div>
                                <div className={styles.data}>
                                    <h2>Delivery Address</h2>
                                    <div className={styles["city-postal"]}>
                                        <input type="text" name="town" id="town" placeholder="Town*" value={value.town || ""} onChange={changeHandler} />
                                        <input
                                            type="number"
                                            name="streetNumber"
                                            placeholder="Street Number*"
                                            id="streetNumber"
                                            value={value.streetNumber || ""} onChange={changeHandler}
                                        />
                                    </div>
                                    <input type="text" name="streetName" id="streetName" placeholder="Street Name*" value={value.streetName || ""} onChange={changeHandler} />
                                </div>
                                <div className={styles.data}>
                                    <h2>Comments</h2>
                                    <textarea
                                        type="text"
                                        placeholder="Additional Comments*"
                                        id="comments"
                                        name="comments"
                                        value={value.comments || ""} onChange={changeHandler} 
                                    />
                                </div>
                            </form>
                        </div>
                    </div>
                    <div className={styles["right-side"]}>
                        <h3>Your Order</h3>
                        <div className={styles.container}>
                            {state.length > 0
                            ?
                            state.map(x => <OrderDetailsSingleItem key={x.itemId} item={x}></OrderDetailsSingleItem>)
                            
                            :
                            <></>}
                        </div>
                        <div className={styles["total-amount"]}>
                            <h4>Total Amount</h4>
                            <p>{totalAmount} $</p>
                        </div>
                        <a>Continue</a>
                    </div>
                </div>
            </div>
        </main>
    )
}