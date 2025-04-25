import { Link } from "react-router-dom"
import styles from "./AdminCreate.module.css"
import { useState } from "react"
import useForm from "../../../hooks/useForm";
import useFormSubmitHandlers from "../../../hooks/useFormSubmitHandlers";

export default function AdminCreate() {

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

    let handleImageChange = (e) => {
        //add validation for image type (extension - jpg/png etc )
        let file = e.target.files[0];
        if(file){
            setImgFile(file);
            let reader = new FileReader();
            reader.onloadend = () => {
                setImg(reader.result);
            };
            reader.readAsDataURL(file);
        }

    }

    let {adminCreate} = useFormSubmitHandlers(value,false,changeValues,false,false,imgFile)

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
                    <form onSubmit={adminCreate}>
                        <div className={styles.section}>
                            <div className={styles["image-container"]}>
                                <img
                                    src={image ? image : "/profile-picture.webp"}
                                    alt="Image"
                                />
                            </div>
                            <input type="file" name="img" onChange={handleImageChange} />
                        </div>
                        <div className={styles.section}>
                            <label htmlFor="title">Category</label>
                            <select name="cat" id="cat" value={value.cat || ""} onChange={changeHandler}>
                                <option value="">---</option>
                                <option value="bedroom">Bedroom</option>
                                <option value="decor">Decor</option>
                                <option value="dining-room">Dining-Room</option>
                            </select>
                            {/* <input type="text" name="title" id="title" value={value.title || ""} onChange={changeHandler} /> */}
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
                            <textarea name="description" id="description" value={value.description || ""} onChange={changeHandler} rows={4} />
                        </div>
                        <div className={styles.section}>
                            <label htmlFor="characteristics">Characteristics</label>
                            <textarea name="characteristics" id="characteristics" value={value.characteristics || ""} onChange={changeHandler} rows={4} />
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