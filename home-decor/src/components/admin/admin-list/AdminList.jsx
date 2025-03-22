import { Link } from "react-router-dom"
import styles from "./AdminList.module.css"
import AdminSingleItem from "./admin-single-item/AdminSingleItem"

export default function AdminList() {
    return (
        <main>
        <div className={styles.menu}>
            <ul>
                <Link to='/admin/list' className={`${styles.item} ${styles.underline} ${styles.hover}`}>Items</Link>
                <Link to='/admin/create' className={`${styles.item} ${styles.hover}`}>Create</Link>
            </ul>
        </div>
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
                        <AdminSingleItem></AdminSingleItem>
                        <AdminSingleItem></AdminSingleItem>
                        <AdminSingleItem></AdminSingleItem>
                        <AdminSingleItem></AdminSingleItem>
                        <AdminSingleItem></AdminSingleItem>
                    </tbody>
                </table>
            </div>
        </div>
        </main>
    )
}