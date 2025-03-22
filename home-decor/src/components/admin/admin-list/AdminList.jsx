import { Link } from "react-router-dom"
import styles from "./AdminList.module.css"

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
                        <tr>
                            <td>12345</td>
                            <td>This is the tittle of the contect</td>
                            <td>This is the collection of the contect</td>
                            <td>This is the price of the contect</td>
                            <td>This is the description of the contect</td>
                            <td>These are the characteristics of the contect</td>
                            <td>
                                <button>
                                  <Link to={'/admin/edit/1'}><i className="fa-solid fa-pen-to-square" /></Link>
                                </button>
                                <button>
                                    <i className="fa-solid fa-trash" />
                                </button>
                            </td>
                        </tr>
                        <tr>
                            <td>12345</td>
                            <td>This is the tittle of the contect</td>
                            <td>This is the collection of the contect</td>
                            <td>This is the price of the contect</td>
                            <td>This is the description of the contect</td>
                            <td>These are the characteristics of the contect</td>
                            <td>
                                <button>
                                <Link to={'/admin/edit/1'}><i className="fa-solid fa-pen-to-square" /></Link>
                                </button>
                                <button>
                                    <i className="fa-solid fa-trash" />
                                </button>
                            </td>
                        </tr>
                        <tr>
                            <td>12345</td>
                            <td>This is the tittle of the contect</td>
                            <td>This is the collection of the contect</td>
                            <td>This is the price of the contect</td>
                            <td>This is the description of the contect</td>
                            <td>These are the characteristics of the contect</td>
                            <td>
                                <button>
                                    <Link to={'/admin/edit/1'}><i className="fa-solid fa-pen-to-square" /></Link>
                                </button>
                                <button>
                                    <i className="fa-solid fa-trash" />
                                </button>
                            </td>
                        </tr>
                        <tr>
                            <td>12345</td>
                            <td>This is the tittle of the contect</td>
                            <td>This is the collection of the contect</td>
                            <td>This is the price of the contect</td>
                            <td>This is the description of the contect</td>
                            <td>These are the characteristics of the contect</td>
                            <td>
                                <button>
                                    <Link to={'/admin/edit/1'}><i className="fa-solid fa-pen-to-square" /></Link>
                                </button>
                                <button>
                                    <i className="fa-solid fa-trash" />
                                </button>
                            </td>
                        </tr>
                        <tr>
                            <td>12345</td>
                            <td>This is the tittle of the contect</td>
                            <td>This is the collection of the contect</td>
                            <td>This is the price of the contect</td>
                            <td>This is the description of the contect</td>
                            <td>These are the characteristics of the contect</td>
                            <td>
                                <button>
                                    <Link to={'/admin/edit/1'}><i className="fa-solid fa-pen-to-square" /></Link>
                                </button>
                                <button>
                                    <i className="fa-solid fa-trash" />
                                </button>
                            </td>
                        </tr>
                        <tr>
                            <td>12345</td>
                            <td>This is the tittle of the contect</td>
                            <td>This is the collection of the contect</td>
                            <td>This is the price of the contect</td>
                            <td>This is the description of the contect</td>
                            <td>These are the characteristics of the contect</td>
                            <td>
                                <button>
                                    <Link to={'/admin/edit/1'}><i className="fa-solid fa-pen-to-square" /></Link>
                                </button>
                                <button>
                                    <i className="fa-solid fa-trash" />
                                </button>
                            </td>
                        </tr>
                        <tr>
                            <td>12345</td>
                            <td>This is the tittle of the contect</td>
                            <td>This is the collection of the contect</td>
                            <td>This is the price of the contect</td>
                            <td>This is the description of the contect</td>
                            <td>These are the characteristics of the contect</td>
                            <td>
                                <button>
                                    <Link to={'/admin/edit/1'}><i className="fa-solid fa-pen-to-square" /></Link>
                                </button>
                                <button>
                                    <i className="fa-solid fa-trash" />
                                </button>
                            </td>
                        </tr>
                        <tr>
                            <td>12345</td>
                            <td>This is the tittle of the contect</td>
                            <td>This is the collection of the contect</td>
                            <td>This is the price of the contect</td>
                            <td>This is the description of the contect</td>
                            <td>These are the characteristics of the contect</td>
                            <td>
                                <button>
                                    <Link to={'/admin/edit/1'}><i className="fa-solid fa-pen-to-square" /></Link>
                                </button>
                                <button>
                                    <i className="fa-solid fa-trash" />
                                </button>
                            </td>
                        </tr>
                        <tr>
                            <td>12345</td>
                            <td>This is the tittle of the contect</td>
                            <td>This is the collection of the contect</td>
                            <td>This is the price of the contect</td>
                            <td>This is the description of the contect</td>
                            <td>These are the characteristics of the contect</td>
                            <td>
                                <button>
                                    <Link to={'/admin/edit/1'}><i className="fa-solid fa-pen-to-square" /></Link>
                                </button>
                                <button>
                                    <i className="fa-solid fa-trash" />
                                </button>
                            </td>
                        </tr>
                        <tr>
                            <td>12345</td>
                            <td>This is the tittle of the contect</td>
                            <td>This is the collection of the contect</td>
                            <td>This is the price of the contect</td>
                            <td>This is the description of the contect</td>
                            <td>These are the characteristics of the contect</td>
                            <td>
                                <button>
                                    <Link to={'/admin/edit/1'}><i className="fa-solid fa-pen-to-square" /></Link>
                                </button>
                                <button>
                                    <i className="fa-solid fa-trash" />
                                </button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
        </main>
    )
}