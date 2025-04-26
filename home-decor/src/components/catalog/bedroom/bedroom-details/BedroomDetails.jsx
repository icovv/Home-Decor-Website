import { useState } from "react"
import styles from "./BedroomDetails.module.css"
import { useParams } from "react-router-dom";
import useCatalogGetData from "../../../../hooks/useCatalogGetData";

export default function BedroomDetails(){
  let {itemID} = useParams();
  let [counter,setCounter] = useState(1);
  let {getSingleBedroomItem,data} = useCatalogGetData(itemID);
  getSingleBedroomItem();
  console.log(data);
    return(
        <main className={styles.details}>
  <div className={styles.container}>
    <div className={styles["left-side"]}>
      <img  
            src={`data:${data.contentType};base64,${data.picture}`}
            alt="image"
             />
    </div>
    <div className={styles["right-side"]}>
      <div className={styles["top-side"]}>
        <h1>{data.tittle}</h1>
        <div className={styles["price-counter"]}>
          <p>{data.price}$</p>
          <div className={styles.counter}>
            <span className={styles.icons}>
              <i className="fa-solid fa-plus" onClick={() => {setCounter(counter + 1)}} />
            </span>
            <span className={styles.number}>{counter}</span>
            <span className={styles.icons}>
              <i className="fa-solid fa-minus" onClick={() => {setCounter(counter < 1 ? 0 : counter - 1 )}} />
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
            <p>{data.description}</p>
          </div>
        </div>
        <div className={styles.characteristics}>
          <h3>Characteristics</h3>
          <div className={styles["text-box"]}>
            <p>{data.characteristics}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</main>
    )
}