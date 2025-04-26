import { Link } from 'react-router-dom'
import styles from '../AdminList.module.css'

export default function AdminSingleItem({
    item
}) {
    console.log(item);

    let onDelete = async (e) => {
        let user = JSON.parse(localStorage.getItem('userData'))
        try {
            let response = await fetch(`http://localhost:3000/admin/bedroom/${item._id}`,{
                method: "DELETE",
                headers: {
                    "X-Authorization" : user.accessToken,
                    "Content-Type": `application/json`
                },
            })
    
            let result = await response.json();
            console.log(result);
            window.location.reload();
        } catch (error) {
            console.log(error);
        }
    }
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
                <button onClick={onDelete}>
                    <i className="fa-solid fa-trash" />
                </button>
            </td>
        </tr>
    )
}