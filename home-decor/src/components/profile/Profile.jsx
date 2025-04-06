import useForm from "../../hooks/useForm"
import styles from "./Profile.module.css"

export default function Profile(){
    let {} = useForm({
      email:"",
      name: "",
      password: "",
      town: "",

    })

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
          <input type="text" name="email" id="email" />
        </div>
        <div className={styles.section}>
          <label htmlFor="name">Name</label>
          <input type="text" name="name" id="name" />
        </div>
        <div className={styles.section}>
          <label htmlFor="password">Password</label>
          <input type="text" name="password" id="password" />
        </div>
        <div className={styles.section}>
          <label htmlFor="town">Town</label>
          <input type="text" name="town" id="town" />
        </div>
        <div className={styles.section}>
          <label htmlFor="streetName">Street Name</label>
          <input type="text" name="streetName" id="streetName" />
        </div>
        <div className={styles.section}>
          <label htmlFor="streetNumber">Street Number</label>
          <input type="number" name="streetNumber" id="streetNumber" />
        </div>
        <div className={styles.section}>
          <label htmlFor="tel">Phone Number</label>
          <input type="tel" name="tel" id="tel"/>
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