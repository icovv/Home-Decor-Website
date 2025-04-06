import { Link } from "react-router-dom"
import styles from "./SignUp.module.css"
import useForm from "../../../hooks/useForm"
import { useContext } from "react";
import AuthContext from "../../../contexts/AuthContext";
import useFormSubmitHandlers from "../../../hooks/useFormSubmitHandlers";

export default function SignUp() {
    
    let {registerHandler} = useContext(AuthContext);

    let {value,changeHandler,changeValues} = useForm({
        email:'',
        password:'',
        repass:''
    });

    let {registerSubmitHandler} = useFormSubmitHandlers(value, registerHandler, changeValues);

    return (
        <main className={styles["sign-up"]}>
            <div className={styles["register-form"]}>
                <h1>Sign Up</h1>
                <form onSubmit={registerSubmitHandler}>
                    <label>Email</label>
                    <input type="text" name="email" id="email" value={value.email || ''} onChange={changeHandler}></input>
                    <label>Password</label>
                    <input type="password" name="password" id="password" value={value.password || ''} onChange={changeHandler}></input>
                    <label>Repeat Password</label>
                    <input type="password" name="repass" id="repass" value={value.repass || ''} onChange={changeHandler}></input>
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