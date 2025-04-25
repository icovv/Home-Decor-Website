import { Link } from "react-router-dom"
import styles from "./AdminCreate.module.css"
import { useState } from "react"
import useForm from "../../../hooks/useForm";

export default function AdminCreate() {

    let {value,changeHandler,changeValues} = useForm({
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

    let submitHandler = async (e) => {
        e.preventDefault();
        let formData = new FormData();
        formData.append("image", imgFile);
        formData.append("title", value.title);
        formData.append("col", value.col);
        formData.append("price", value.price);
        formData.append("description", value.description);
        formData.append("characteristics", value.characteristics);
        
        let user = JSON.parse(localStorage.getItem('userData'))
        formData.append("email",user.email);

        try {
            let response = await fetch('http://localhost:3000/admin/bedroom',{
                method: "POST",
                headers: {
                    "X-Authorization" : user.accessToken
                },
                body: formData
            })
    
            let result = await response.json();
            console.log(result);
        } catch (error) {
            console.log(error);
        }


    }

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
                    <form onSubmit={submitHandler}>
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