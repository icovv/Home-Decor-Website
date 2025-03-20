import styles from "./Bedroom.module.css"

export default function Bedroom(){
    return(
        <main>
  <div className={styles.container}>
    <div className={styles["top-section"]}>
      <span className={styles.text}>Bedroom</span>
    </div>
    <div className={styles["bottom-section"]}>
      <select className={styles.dropdown} name="dropdown">
        <option value="">No filter applied</option>
        <option value="name">Name</option>
        <option value="priceUp">Price ↑</option>
        <option value="priceDown">Price ↓</option>
      </select>
      <div className={styles["items-container"]}>
        <div className={styles.item}>
          <div className={styles["image-container"]}>
            <img
              src="/bedroom.jpg"
              alt=""
            />
          </div>
          <h3>This is the image name!</h3>
          <p>144.90$</p>
          <button>
            <i className="fa-solid fa-cart-shopping" />
            <span>ADD TO CART</span>{" "}
          </button>
        </div>
        <div className={styles.item}>
          <div className={styles["image-container"]}>
            <img
              src="/bedroom.jpg"
              alt=""
            />
          </div>
          <h3>This is the image name!</h3>
          <p>144.90$</p>
          <button>
            <i className="fa-solid fa-cart-shopping" />
            <span>ADD TO CART</span>{" "}
          </button>
        </div>
        <div className={styles.item}>
          <div className={styles["image-container"]}>
            <img
              src="/bedroom.jpg"
              alt=""
            />
          </div>
          <h3>This is the image name!</h3>
          <p>144.90$</p>
          <button>
            <i className="fa-solid fa-cart-shopping" />
            <span>ADD TO CART</span>{" "}
          </button>
        </div>
        <div className={styles.item}>
          <div className={styles["image-container"]}>
            <img
              src="/bedroom.jpg"
              alt=""
            />
          </div>
          <h3>This is the image name!</h3>
          <p>144.90$</p>
          <button>
            <i className="fa-solid fa-cart-shopping" />
            <span>ADD TO CART</span>
          </button>
        </div>
      </div>
    </div>
  </div>
</main>
    )
}