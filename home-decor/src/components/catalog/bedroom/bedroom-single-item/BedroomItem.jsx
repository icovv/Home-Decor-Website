import { Link } from "react-router-dom";
import styles from "../Bedroom.module.css"

export default function BedroomItem(){
    return(
        <div className={styles.item}>
        <div className={styles["image-container"]}>
          <img
            src="/bedroom.jpg"
            alt=""
          />
        </div>
        <h3>This is the image name!</h3>
        <p>144.90$</p>
        <Link to={'/'} >
        <button className={styles.width100}>
          <i className="fa-solid fa-cart-shopping" />
          <span>ADD TO CART</span>
        </button>
        </Link>
      </div>
    )
}