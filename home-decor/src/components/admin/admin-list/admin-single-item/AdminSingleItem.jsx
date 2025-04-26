import { Link } from 'react-router-dom'
import styles from '../AdminList.module.css'
import onDelete from './onDelete'

export default function AdminSingleItem({
    item
}) {
    return (
        <tr>
            <td>{item._id}</td>
            <td>{item.tittle}</td>
            <td>{item.col}</td>
            <td>{item.price}</td>
            <td>{item.description}</td>
            <td>{item.characteristics}</td>
            <td>
                <button>
                    <Link to={`/admin/edit/${item._id}`}><i className="fa-solid fa-pen-to-square" /></Link>
                </button>
                <button id = {`${item._id} ${item.cat}`} onClick={onDelete}>
                    <i className="fa-solid fa-trash" id = {`${item._id} ${item.cat}`} />
                </button>
            </td>
        </tr>
    )
}