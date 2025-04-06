import { useParams } from "react-router-dom"
import useForm from "../../hooks/useForm"
import styles from "./Profile.module.css"
import useProfileGetData from "./useProfileGetData"

export default function Profile(){
    let {userID} = useParams();

    let {value,changeValues,changeHandler} = useForm({
      email:"",
      name: "",
      password: "",
      town: "",
      streetName: "",
      streetNumber: "",
      tel: ""
    })

    useProfileGetData(userID, changeValues) 
    
    return(
        <main>
  <div className={styles.container}>
    <div className={styles["top-side"]}>
      <img
        src="/profile-picture.webp"
        alt=""
      />
    </div>
    <div className={styles["bottom-side"]}>
      <form>
        <div className={styles.section}>
          <label htmlFor="email">Email</label>
          <input type="text" name="email" id="email" value={value.email || ""} onChange={changeHandler} />
        </div>
        <div className={styles.section}>
          <label htmlFor="name">Name</label>
          <input type="text" name="name" id="name" value={value.name || ""} onChange={changeHandler} />
        </div>
        <div className={styles.section}>
          <label htmlFor="password">Password</label>
          <input type="text" name="password" id="password" value={value.password || ""} onChange={changeHandler} />
        </div>
        <div className={styles.section}>
          <label htmlFor="town">Town</label>
          <input type="text" name="town" id="town" value={value.town || ""} onChange={changeHandler} />
        </div>
        <div className={styles.section}>
          <label htmlFor="streetName">Street Name</label>
          <input type="text" name="streetName" id="streetName" value={value.streetName || ""} onChange={changeHandler} />
        </div>
        <div className={styles.section}>
          <label htmlFor="streetNumber">Street Number</label>
          <input type="number" name="streetNumber" id="streetNumber"  value={value.streetNumber || ""} onChange={changeHandler}/>
        </div>
        <div className={styles.section}>
          <label htmlFor="tel">Phone Number</label>
          <input type="tel" name="tel" id="tel" value={value.tel || ""} onChange={changeHandler}/>
        </div>
        <button type="submit" className={styles.button}>
          Save
        </button>
      </form>
    </div>
  </div>
</main>
    )
}