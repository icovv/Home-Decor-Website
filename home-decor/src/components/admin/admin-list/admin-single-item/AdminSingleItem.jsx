import { Link } from 'react-router-dom'
import styles from '../AdminList.module.css'

export default function AdminSingleItem() {
    return (
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
    )
}