import { Link } from "react-router-dom"
import styles from "./AdminList.module.css"
import AdminSingleItem from "./admin-single-item/AdminSingleItem"
import useGetItemsData from "./useGetItemsData";
import Error from "../../common/errors/Error";

export default function AdminList() {

    let {data,useGetBedroomItems, useGetDecorItems, useGetDiningRoomItems,err,divKill} = useGetItemsData()

    return (
        <main>
            {err.length > 0
            ?
            <Error err={err} divKill={divKill}></Error>
            :
            <></>
            }

        <div className={styles.menu}>
            <ul>
                <Link to='/admin/list' className={`${styles.item} ${styles.underline} ${styles.hover}`}>Items</Link>
                <Link to='/admin/create' className={`${styles.item} ${styles.hover}`}>Create</Link>
            </ul>
        </div>
        <div className={`${styles.menu} ${styles['second-ul']}`}>
            <ul>
                <li className={`${styles.item} ${styles.hover}`} id="bedroom" onClick={useGetBedroomItems}>Bedroom</li>
                <li className={`${styles.item} ${styles.hover}`} id="decor"  onClick={useGetDecorItems}>Decor</li>
                <li className={`${styles.item} ${styles.hover}`} id="dining-room"  onClick={useGetDiningRoomItems}>Dining Room</li>
            </ul>
        </div>
        {data.length > 0 
        ?
        <div className={styles.container}>
        <div className={styles.content}>
            <div className={styles["change-page"]}>
                <ul>
                    <li>
                        <i className="fa-solid fa-arrow-left" />
                    </li>
                    <li>
                        <i className="fa-solid fa-arrow-right" />
                    </li>
                </ul>
            </div>
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Title</th>
                        <th>Collection</th>
                        <th>Price</th>
                        <th>Description</th>
                        <th>Characteristics</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {
                    data.map(item => <AdminSingleItem key={item._id} item={item}></AdminSingleItem>)
                    }
                </tbody>
            </table>
        </div>
        </div>
        :
        <div className={styles.container}>
                    <div className={styles["table-no-items"]}>No items found in the database!</div>
        </div>}
        </main>
    )
}