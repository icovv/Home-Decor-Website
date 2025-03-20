import styles from "./Footer.module.css"

export default function Footer(){
    return(
        <footer>
  <div className={styles.container}>
    <div className={styles["container-left"]}>
      <div className={styles["left-side"]}>
        <h2>Home Decor</h2>
      </div>
    </div>
    <div className={styles["container-right"]}>
      <div className={styles.middle}>
        <h3>Contacts</h3>
        <ul>
          <li>
            <i className="fa-solid fa-phone" />
            <span>+111 11 111 1111</span>
          </li>
          <li>
            <i className="fa-solid fa-envelope" />
            <span>email@emai.email</span>
          </li>
          <li>
            <i className="fa-solid fa-location-dot" />
            <span>location</span>
          </li>
        </ul>
      </div>
      <div className={styles["right-side"]}>
        <h3>Information</h3>
        <ul>
          <li>Terms &amp; Conditions</li>
          <li>Terms of Use</li>
          <li>Privacy Notice</li>
        </ul>
      </div>
    </div>
  </div>
</footer>
    )
}