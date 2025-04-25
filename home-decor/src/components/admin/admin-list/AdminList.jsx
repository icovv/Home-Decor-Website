import { Link } from "react-router-dom"
import styles from "./AdminList.module.css"
import AdminSingleItem from "./admin-single-item/AdminSingleItem"
import { useEffect, useState } from "react"

export default function AdminList() {

    let [Items,setItems] = useState(null);
    let [image,setImg] = useState(null);
    useEffect(() => {
        async function getData() {
            try {
                let response = await fetch('http://localhost:3000/bedroom',{
                    method:"GET"
                });
                let result = await response.json();
                setItems(result.items)
                
                setImg(`data:${result.items[0].contentType};base64,${result.items[0].picture}`)
            } catch (error) {
                console.log(error)
            }

        }
        getData()
    },[])

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
                        {Items? Items.length > 0 ?
                        Items.map(item => <AdminSingleItem key={item._id} item={item}></AdminSingleItem>)
                        :
                        <></>
                        :
                        <></>}
                    </tbody>
                </table>
            </div>
        </div>
        </main>
    )
}