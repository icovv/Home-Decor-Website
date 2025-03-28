import { Link } from "react-router-dom"
import styles from "./SignIn.module.css"
import useForm from "../../hooks/useForm"

export default function SignIn() {

    let {value,changeHandler,changeValues} = useForm({
        email:'',
        password:'',
    });

    return (
        <main className={styles.signIn}>
            <div className={styles["login-form"]}>
                <h1>Sign in</h1>
                <form className={styles.login}>
                    <label>Email</label>
                    <input type="text" name="email" value={value.email || ''} onChange={changeHandler}/>
                    <label>Password</label>
                    <input type="password" name="password" value={value.password || ''} onChange={changeHandler} />
                    <button type="submit">Submit</button>
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