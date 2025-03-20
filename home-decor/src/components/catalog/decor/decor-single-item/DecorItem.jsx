import { Link } from "react-router-dom"
import styles from "../Decor.module.css"

export default function DecorItem(){
    return(
        <div className={styles.item}>
        <div className={styles["image-container"]}>
          <img
            src="/decor.jpg"
            alt=""
          />
        </div>
        <h3>This is the image name!</h3>
        <p>144.90$</p>
        <Link to={"/"}>
        <button className={styles.width100}>
          <i className="fa-solid fa-cart-shopping" />
          <span>ADD TO CART</span>{" "}
        </button>
        </Link>
      </div>
    )
}