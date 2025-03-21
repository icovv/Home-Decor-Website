import styles from "./DecorDetails.module.css"

export default function DecorDetails(){
    return(
        <main className={styles.details}>
  <div className={styles.container}>
    <div className={styles["left-side"]}>
      <img src="/decor.jpg" alt="" />
    </div>
    <div className={styles["right-side"]}>
      <div className={styles["top-side"]}>
        <h1>Product Name</h1>
        <div className={styles["price-counter"]}>
          <p>144.00$</p>
          <div className={styles.counter}>
            <span className={styles.icons}>
              <i className="fa-solid fa-plus" />
            </span>
            <span className={styles.number}>10</span>
            <span className={styles.icons}>
              <i className="fa-solid fa-minus" />
            </span>
          </div>
        </div>
      </div>
      <button>
        <i className="fa-solid fa-cart-shopping" />
        <span>ADD TO CART</span>{" "}
      </button>
      <div className={styles["bottom-side"]}>
        <div className={styles.description}>
          <h3>Description</h3>
          <div className={styles["text-box"]}>
            <p>asdasdasd</p>
            <p>asdasdasd</p>
            <p>asdasdasd</p>
            <p>asdasdasd</p>
          </div>
        </div>
        <div className={styles.characteristics}>
          <h3>Characteristics</h3>
          <div className={styles["text-box"]}>
            <p>asdasdasd</p>
            <p>asdasdasd</p>
            <p>asdasdasd</p>
            <p>asdasdasd</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</main>
    )
}