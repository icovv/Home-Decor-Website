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
            <button>
            <a href="">Explore</a>
            </button>
        </div>
        </div>
    </div>
    <div className={styles["second-section"]}>
        <div className={styles.container}>
        <div className={styles.wrapper}>
            <div className={styles.item}>
            <img src="./public/bedroom.jpg" alt="" />
            <h3>BEDROOM</h3>
            </div>
            <div className={styles.item}>
            <img src="./public/decor.jpg" alt="" />
            <h3>DECOR</h3>
            </div>
            <div className={styles.item}>
            <img src="./public/dining-room.jpg" alt="" />
            <h3>DINING ROOM</h3>
            </div>
        </div>
        </div>
    </div>
    </main>
    )
}