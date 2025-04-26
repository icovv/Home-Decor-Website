import { Link, useParams } from "react-router-dom"
import styles from "./AdminEdit.module.css"
import useForm from "../../../hooks/useForm";
import { useContext, useState } from "react";
import AuthContext from "../../../contexts/AuthContext";
import useHandleImageChange from "../../../hooks/useHandleImageChange";
import useFormSubmitHandlers from "../../../hooks/useFormSubmitHandlers";

export default function AdminEdit() {
    let {itemID} = useParams();
    let {value,changeHandler,changeValues} = useForm({
        cat:"",
        title:'',
        col:'',
        price:'',
        description:'',
        characteristics:''
    })

    let [image,setImg] = useState(null);
    let [imgFile,setImgFile] = useState(null);

    let {setLocalStorageState} = useContext(AuthContext)
    let {handleImageChange} = useHandleImageChange(setImgFile,setImg);

    let {err,divKill,adminEdit} = useFormSubmitHandlers(value,false,changeValues,false,setLocalStorageState,imgFile, itemID)

    return (
        <main>
            <div className={styles.menu}>
                <ul>
                <Link to='/admin/list' className={`${styles.item} ${styles.hover}`}>Items</Link>
                <Link to='/admin/create' className={`${styles.item} ${styles.hover}`}>Create</Link>
                </ul>
            </div>
            <div className={styles.container}>
                <div className={styles['bottom-side']}>
                    <form onSubmit={adminEdit}>
                        <div className={styles.section}>
                            <div className={styles["image-container"]}>
                                <img
                                    src={image ? image : "/profile-picture.webp"}
                                    alt="Image"
                                />
                            </div>
                            <input type="file" name="title" onChange={handleImageChange} />
                        </div>
                         <div className={styles.section}>
                          <label htmlFor="cat">Category</label>
                          <input type="text" name="cat" id="cat" disabled="true" value={value.cat || ""} onChange={changeHandler} />
                        </div>
                        <div className={styles.section}>
                            <label htmlFor="title">Title</label>
                            <input type="text" name="title" id="title" value={value.title || ""} onChange={changeHandler} />
                        </div>
                        <div className={styles.section}>
                            <label htmlFor="col">Collection</label>
                            <input type="text" name="col" id="col" value={value.col || ""} onChange={changeHandler} />
                        </div>
                        <div className={styles.section}>
                            <label htmlFor="price">Price</label>
                            <input type="number" name="price" id="price" value={value.price || ""} onChange={changeHandler} />
                        </div>
                        <div className={styles.section}>
                            <label htmlFor="description">Description</label>
                            <textarea name="description" id="description" rows={4} value={value.description || ""} onChange={changeHandler} />
                        </div>
                        <div className={styles.section}>
                            <label htmlFor="characteristics">Characteristics</label>
                            <textarea name="characteristics" id="characteristics" rows={4} value={value.characteristics || ""} onChange={changeHandler} />
                        </div>
                        <button type="submit" className={styles["button-for-create"]}>
                            Edit
                        </button>
                    </form>
                </div>
            </div>
        </main>
    )
}