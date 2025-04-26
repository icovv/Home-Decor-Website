import styles from "../Header.module.css"
export default function CartSingleItemPreview(
    {
        item
    }
) {

    return (
        <div className={styles["cart-single-item"]}>
            <div className={styles["left-side"]}>
                <img
                    src={`data:${item.contentType};base64,${item.picture}`}
                    alt=""
                />
            </div>
            <div className={styles["right-side"]}>
                <h4>{item.tittle}</h4>
                <div className={styles["bottom-side"]}>
                    <span>{item.counter} x {item.price} $</span>
                </div>
            </div>
        </div>
    )
}