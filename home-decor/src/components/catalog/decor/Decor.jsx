import useCatalogGetData from "../../../hooks/useCatalogGetData"
import DecorItem from "./decor-single-item/DecorItem"
import styles from "./Decor.module.css"

export default function Decor(){
  let {getDecorItems,data} = useCatalogGetData();
  getDecorItems();
  console.log(data);
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
              {data.length > 0
              ?
              data.map(x => <DecorItem key={x._id} item={x}></DecorItem>)
              :
              <></>}
            </div>
          </div>
        </div>
      </main>
    )
}