import DiningRoomItem from "./dining-room-single-item/DiningRoomItem"
import styles from "./DiningRoom.module.css"

export default function DiningRoom(){
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
                <DiningRoomItem></DiningRoomItem>
                <DiningRoomItem></DiningRoomItem>
                <DiningRoomItem></DiningRoomItem>
            </div>
          </div>
        </div>
      </main>
    )
}