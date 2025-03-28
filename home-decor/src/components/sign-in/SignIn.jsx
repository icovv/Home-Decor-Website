import { Link } from "react-router-dom"
import styles from "./SignIn.module.css"
import useForm from "../../hooks/useForm"

export default function SignIn() {

    let {value,changeHandler,changeValues} = useForm({
        email:'',
        password:'',
    });

    let submitHandler = async (e)=>{
        e.preventDefault();
        console.log(e.target.email.value, "This is the email")
        console.log(e.target.password.value, "This is the pw")
        try {
            let response = await fetch("http://localhost:3000/login",{method: 'POST', headers:{'Content-Type':`application/json`}, body:JSON.stringify({email:e.target.email.value,password:e.target.password.value})});
            console.log(await response.json());
        } catch (error) {
            console.log("This is the errorasdasd:",JSON.parse(error))
        }
    }

    return (
        <main className={styles.signIn}>
            <div className={styles["login-form"]}>
                <h1>Sign in</h1>
                <form className={styles.login} onSubmit={submitHandler}>
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