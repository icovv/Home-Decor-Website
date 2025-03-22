import styles from "./Admin.module.css"

export default function Admin() {
    return (
        <main>
        <div className={styles.menu}>
            <ul>
                <li className={styles.item}>Items</li>
                <li className={styles.item}>Create</li>
            </ul>
        </div>
        </main>
    )
}