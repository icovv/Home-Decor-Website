import { Link } from "react-router-dom";
import styles from "../Bedroom.module.css"

export default function BedroomItem(
  {
    item
  }
){
    return(
        <div className={styles.item}>
        <div className={styles["image-container"]}>
          <img
            src={`data:${item.contentType};base64,${item.picture}`}
            alt="image"
          />
        </div>
        <h3>{item.tittle}</h3>
        <p>{item.price}$</p>
        <Link to={`/catalog-bedroom/${item._id}`} >
        <button className={styles.width100}>
          <i className="fa-solid fa-cart-shopping" />
          <span>VIEW ITEM</span>
        </button>
        </Link>
      </div>
    )
}