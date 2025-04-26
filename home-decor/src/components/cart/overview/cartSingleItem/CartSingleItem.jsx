import { useContext, useState } from "react"
import styles from "../CartOverview.module.css"
import CartContext from "../../../../contexts/CartContext"

export default function CartSingleItem(
    {
        item
    }
) {
    let {removeFromCart,changeCount} = useContext(CartContext)
    return (
        <div className={styles["single-item"]}>
            <div className={styles["left-side"]}>
                <img
                    src={`data:${item.contentType};base64,${item.picture}`}
                    alt="image"
                />
            </div>
            <div className={styles["right-side"]}>
                <h3 className={styles["text-center"]}>{item.tittle}</h3>
                <div className={styles["price-quantity"]}>
                    <div className={styles["counter"]}>
                        <span className={styles.icons} >
                            <i className="fa-solid fa-plus" onClick={() => {changeCount(item,item.counter + 1)}} />
                        </span>
                        <span className={styles.number}>{item.counter}</span>
                        <span className={styles.icons}>
                            <i className="fa-solid fa-minus" onClick={() => {changeCount(item, item.counter <= 1 ? 1 : item.counter - 1 )}} />
                        </span>
                    </div>
                    <p>{item.price} $</p>
                </div>
                <a onClick={() => removeFromCart(item)}>Remove</a>
            </div>
        </div>
    )
}