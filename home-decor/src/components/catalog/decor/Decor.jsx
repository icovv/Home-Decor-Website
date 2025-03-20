import DecorItem from "./decor-single-item/DecorItem"
import styles from "./Decor.module.css"

export default function Decor(){
    return (
        <main>
        <div className={styles.container}>
          <div className={styles["top-section"]}>
            <span className={styles.text}>Decor</span>
          </div>
          <div className={styles["bottom-section"]}>
            <select className={styles.dropdown} name="dropdown">
              <option value="">No filter applied</option>
              <option value="name">Name</option>
              <option value="priceUp">Price ↑</option>
              <option value="priceDown">Price ↓</option>
            </select>
            <div className={styles["items-container"]}>
              <DecorItem></DecorItem>
              <DecorItem></DecorItem>
              <DecorItem></DecorItem>
            </div>
          </div>
        </div>
      </main>
    )
}