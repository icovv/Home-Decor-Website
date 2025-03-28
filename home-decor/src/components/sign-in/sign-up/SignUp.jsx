import { Link } from "react-router-dom"
import styles from "./SignUp.module.css"
import useForm from "../../../hooks/useForm"

export default function SignUp() {
    let {value,changeHandler,changeValues} = useForm({
        email:'',
        password:'',
        repass:''
    });

    let submitHandler = async (e)=>{
        e.preventDefault();
        console.log(e.target.email.value, "This is the email")
        console.log(e.target.password.value, "This is the pw")
        try {
            let response = await fetch("http://localhost:3000/register",{method: 'POST', headers:{'Content-Type':`application/json`}, body:JSON.stringify({email:e.target.email.value,password:e.target.password.value})});
            console.log(await response.json());
        } catch (error) {
            console.log("This is the errorasdasd:",JSON.parse(error))
        }
    }

    return (
        <main className={styles["sign-up"]}>
            <div className={styles["register-form"]}>
                <h1>Sign Up</h1>
                <form onSubmit={submitHandler}>
                    <label>Email</label>
                    <input type="text" name="email" value={value.email || ''} onChange={changeHandler}></input>
                    <label>Password</label>
                    <input type="password" name="password" value={value.password || ''} onChange={changeHandler}></input>
                    <label>Repeat Password</label>
                    <input type="password" name="repass" value={value.repass || ''} onChange={changeHandler}></input>
                    <button type="submit">Submit</button>
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