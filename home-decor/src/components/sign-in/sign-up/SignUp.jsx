import { Link } from "react-router-dom"
import styles from "./SignUp.module.css"
import useForm from "../../../hooks/useForm"

export default function SignUp() {
    let {value,changeHandler,changeValues} = useForm({
        email:'',
        password:'',
        repass:''
    });

    return (
        <main className={styles["sign-up"]}>
            <div className={styles["register-form"]}>
                <h1>Sign Up</h1>
                <form>
                    <label>Email</label>
                    <input type="text" name="email" value={value.email || ''} onChange={changeHandler}></input>
                    <label>Password</label>
                    <input type="password" name="password" value={value.password || ''} onChange={changeHandler}></input>
                    <label>Repeat Password</label>
                    <input type="password" name="repass" value={value.repass || ''} onChange={changeHandler}></input>
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