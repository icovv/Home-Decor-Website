import styles from "./SignIn.module.css"

export default function SignIn() {
    return (
        <main>
            <div className={styles["login-form"]}>
                <h1>Sign in</h1>
                <form action="#" method="">
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
                    <a href="" className={styles.anchr}>
                        Sign up here
                    </a>
                </h1>
            </div>
        </main>
    )
}