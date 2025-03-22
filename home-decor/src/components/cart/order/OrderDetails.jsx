import styles from "./OrderDetails.module.css"

export default function OrderDetails() {
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
                                    <input type="text" name="firstName" placeholder="First Name*" />
                                    <input type="text" name="lastName" placeholder="Last Name*" />
                                    <input type="text" name="email" placeholder="Email*" />
                                    <input type="text" name="phone" placeholder="Phone*" />
                                </div>
                                <div className={styles.data}>
                                    <h2>Delivery Address</h2>
                                    <div className={styles["city-postal"]}>
                                        <input type="text" name="city" placeholder="City*" />
                                        <input
                                            type="number"
                                            name="postalCode"
                                            placeholder="Postal Code*"
                                        />
                                    </div>
                                    <input type="text" name="addess" placeholder="Address*" />
                                </div>
                                <div className={styles.data}>
                                    <h2>Comments</h2>
                                    <textarea
                                        type="text"
                                        placeholder="Additional Comments*"
                                        defaultValue={""}
                                    />
                                </div>
                            </form>
                        </div>
                    </div>
                    <div className={styles["right-side"]}>
                        <h3>Your Order</h3>
                        <div className={styles.container}>
                            <div className={styles["single-item"]}>
                                <div className={styles["left-side"]}>
                                    <img
                                        src="/bedroom.jpg"
                                        alt=""
                                    />
                                </div>
                                <div className={styles["right-side"]}>
                                    <h3 className={styles["text-center"]}>Product Name</h3>
                                    <div className={styles["price-quantity"]}>
                                        <p>10 x 65.00$</p>
                                        <p>65.00$</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={styles["total-amount"]}>
                            <h4>Total Amount</h4>
                            <p>200.00$</p>
                        </div>
                        <a>Continue</a>
                    </div>
                </div>
            </div>
        </main>
    )
}