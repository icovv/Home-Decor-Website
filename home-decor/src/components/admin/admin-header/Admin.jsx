import { Link } from "react-router-dom"
import styles from "./Admin.module.css"

export default function Admin() {
    return (
        <main>
        <div className={styles.menu}>
            <ul>
                <Link to='/admin/list' className={`${styles.item} ${styles.hover}`}>Items</Link>
                <li className={`${styles.item} ${styles.hover}`}>Create</li>
            </ul>
        </div>
        </main>
    )
}