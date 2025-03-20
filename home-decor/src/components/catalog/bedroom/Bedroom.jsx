import { Link } from "react-router-dom"
import styles from "./Bedroom.module.css"
import BedroomItem from "./bedroom-single-item/BedroomItem"

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
        <BedroomItem></BedroomItem>
        <BedroomItem></BedroomItem>
        <BedroomItem></BedroomItem>
      </div>
    </div>
  </div>
</main>
    )
}