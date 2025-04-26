import useCatalogGetData from "../../../hooks/useCatalogGetData"
import DiningRoomItem from "./dining-room-single-item/DiningRoomItem"
import styles from "./DiningRoom.module.css"

export default function DiningRoom(){
    let {getDiningRoomItems,data} = useCatalogGetData();
    getDiningRoomItems();
    console.log(data);
    return (
        <main>
        <div className={styles.container}>
          <div className={styles["top-section"]}>
            <span className={styles.text}>Dining Room</span>
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
              data.map(x => <DiningRoomItem key={x._id} item={x}></DiningRoomItem>)
              :
              <></>}
            </div>
          </div>
        </div>
      </main>
    )
}