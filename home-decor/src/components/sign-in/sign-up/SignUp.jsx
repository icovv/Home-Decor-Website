import { Link } from "react-router-dom"
import styles from "./SignUp.module.css"

export default function SignUp() {
    return (
        <main className={styles["sign-up"]}>
            <div className={styles["register-form"]}>
                <h1>Sign Up</h1>
                <form action="#" method="">
                    <label>Email</label>
                    <input type="text" name="" />
                    <label>Password</label>
                    <input type="password" name="" />
                    <label>Repeat Password</label>
                    <input type="password" name="" />
                    <input type="submit" defaultValue="Submit" />
                </form>
            </div>
            <div className={styles["no-acc-box"]}>
                <h1 className={styles["no-acc"]}>
                    Already have an account?
                    <Link to={"/sign-in"} className={styles.anchr}>Sign in here</Link>
                </h1>
            </div>
        </main>
    )
}