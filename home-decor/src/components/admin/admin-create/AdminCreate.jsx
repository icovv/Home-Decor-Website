import { Link } from "react-router-dom"
import styles from "./AdminCreate.module.css"

export default function AdminCreate() {
    return (
        <main>
            <div className={styles.menu}>
                <ul>
                <Link to='/admin/list' className={`${styles.item} ${styles.hover}`}>Items</Link>
                <Link to='/admin/create' className={`${styles.item} ${styles.underline} ${styles.hover}`}>Create</Link>
                </ul>
            </div>
            <div className={styles.container}>
                <div className={styles['bottom-side']}>
                    <form>
                        <div className={styles.section}>
                            <div className={styles["image-container"]}>
                                <img
                                    src="/profile-picture.webp"
                                    alt=""
                                />
                            </div>
                            <input type="file" name="title" />
                        </div>
                        <div className={styles.section}>
                            <label htmlFor="title">Title</label>
                            <input type="text" name="title" />
                        </div>
                        <div className={styles.section}>
                            <label htmlFor="collection">Collection</label>
                            <input type="text" name="collection" />
                        </div>
                        <div className={styles.section}>
                            <label htmlFor="price">Price</label>
                            <input type="number" name="price" />
                        </div>
                        <div className={styles.section}>
                            <label htmlFor="description">Description</label>
                            <textarea name="characteristics" rows={4} defaultValue={""} />
                        </div>
                        <div className={styles.section}>
                            <label htmlFor="characteristics">Characteristics</label>
                            <textarea name="characteristics" rows={4} defaultValue={""} />
                        </div>
                        <button type="submit" className={styles["button-for-create"]}>
                            Save
                        </button>
                    </form>
                </div>
            </div>
        </main>
    )
}