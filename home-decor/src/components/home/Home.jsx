import { Link } from "react-router-dom"
import styles from "./Home.module.css"

export default function Home(){
    return(
    <main>
    <div className={styles["first-section"]}>
        <div className={styles.container}>
        <div className={styles["left-side"]}>
            <h1>Decorate your home with us</h1>
            <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus ex
            id dignissimos ipsam laborum, expedita quae odit, nesciunt sapiente
            voluptate necessitatibus, iste modi dolor. Dolor cum et iste iure
            nobis!
            </p>
        </div>
        </div>
    </div>
    <div className={styles["second-section"]}>
        <div className={styles.container}>
        <div className={styles.wrapper}>
            <Link to={'/catalog-bedroom'}>
            <div className={styles.item}>
            <img src="/bedroom.jpg" alt="" />
            <h3>BEDROOM</h3>
            </div>
            </Link>
            <Link to={"/catalog-decor"}>
            <div className={styles.item}>
            <img src="/decor.jpg" alt="" />
            <h3>DECOR</h3>
            </div>
            </Link>
            <Link to={"/catalog-dining-room"}>
            <div className={styles.item}>
            <img src="/dining-room.jpg" alt="" />
            <h3>DINING ROOM</h3>
            </div>
            </Link>
        </div>
        </div>
    </div>
    </main>
    )
}