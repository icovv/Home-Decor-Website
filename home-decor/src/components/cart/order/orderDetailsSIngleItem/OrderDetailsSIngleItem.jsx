import styles from "../OrderDetails.module.css"

export default function OrderDetailsSingleItem(
    {
        item
    }
) {
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
                    <p>{item.counter} x {item.price}$</p>
                    <p>{item.counter * item.price} $</p>
                </div>
            </div>
        </div>
    )
}