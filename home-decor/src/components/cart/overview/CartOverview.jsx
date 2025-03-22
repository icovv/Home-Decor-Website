import styles from "./CartOverview.module.css"

export default function CartOverview() {
    return (
        <main>
            <div className={styles.container}>
                <div className={styles["top-side"]}>
                    <h1>Cart Overview</h1>
                </div>
                <div className={styles["bottom-side"]}>
                    <div className={styles["left-side"]}>
                        <div className={styles.container}>
                            <div className={styles["single-item"]}>
                                <div className={styles["left-side"]}>
                                    <img
                                        src="/decor.jpg"
                                        alt=""
                                    />
                                </div>
                                <div className={styles["right-side"]}>
                                    <h3 className={styles["text-center"]}>Product Name</h3>
                                    <div className={styles["price-quantity"]}>
                                        <div className={styles["counter"]}>
                                            <span className={styles.icons}>
                                                <i className="fa-solid fa-plus" />
                                            </span>
                                            <span className={styles.number}>10</span>
                                            <span className={styles.icons}>
                                                <i className="fa-solid fa-minus" />
                                            </span>
                                        </div>
                                        <p>65.00$</p>
                                    </div>
                                    <a>Remove</a>
                                </div>
                            </div>
                            <div className={styles["single-item"]}>
                                <div className={styles["left-side"]}>
                                    <img
                                        src="/decor.jpg"
                                        alt=""
                                    />
                                </div>
                                <div className={styles["right-side"]}>
                                    <h3 className={styles["text-center"]}>Product Name</h3>
                                    <div className={styles["price-quantity"]}>
                                        <div className={styles["counter"]}>
                                            <span className={styles.icons}>
                                                <i className="fa-solid fa-plus" />
                                            </span>
                                            <span className={styles.number}>10</span>
                                            <span className={styles.icons}>
                                                <i className="fa-solid fa-minus" />
                                            </span>
                                        </div>
                                        <p>65.00$</p>
                                    </div>
                                    <a>Remove</a>
                                </div>
                            </div>
                            <div className={styles["single-item"]}>
                                <div className={styles["left-side"]}>
                                    <img
                                        src="/decor.jpg"
                                        alt=""
                                    />
                                </div>
                                <div className={styles["right-side"]}>
                                    <h3 className={styles["text-center"]}>Product Name</h3>
                                    <div className={styles["price-quantity"]}>
                                        <div className={styles["counter"]}>
                                            <span className={styles.icons}>
                                                <i className="fa-solid fa-plus" />
                                            </span>
                                            <span className={styles.number}>10</span>
                                            <span className={styles.icons}>
                                                <i className="fa-solid fa-minus" />
                                            </span>
                                        </div>
                                        <p>65.00$</p>
                                    </div>
                                    <a>Remove</a>
                                </div>
                            </div>
                            <div className={styles["single-item"]}>
                                <div className={styles["left-side"]}>
                                    <img
                                        src="/decor.jpg"
                                        alt=""
                                    />
                                </div>
                                <div className={styles["right-side"]}>
                                    <h3 className={styles["text-center"]}>Product Name</h3>
                                    <div className={styles["price-quantity"]}>
                                        <div className={styles["counter"]}>
                                            <span className={styles.icons}>
                                                <i className="fa-solid fa-plus" />
                                            </span>
                                            <span className={styles.number}>10</span>
                                            <span className={styles.icons}>
                                                <i className="fa-solid fa-minus" />
                                            </span>
                                        </div>
                                        <p>65.00$</p>
                                    </div>
                                    <a>Remove</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={styles["right-side"]}>
                        <h3>Your Order</h3>
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