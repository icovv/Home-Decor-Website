import { Link } from "react-router-dom"
import styles from "./SignIn.module.css"

export default function SignIn() {
    return (
        <main className={styles.signIn}>
            <div className={styles["login-form"]}>
                <h1>Sign in</h1>
                <form className={styles.login} action="#" method="">
                    <label>Email</label>
                    <input type="text" name="" />
                    <label>Password</label>
                    <input type="password" name="" />
                    <input type="submit" defaultValue="Submit" />
                </form>
            </div>
            <div className={styles["no-acc-box"]}>
                <h1 className={styles["no-acc"]}>
                    New to our store?
                    <Link to={"/sign-up"}className={styles.anchr}>Sign up here</Link>
                </h1>
            </div>
        </main>
    )
}