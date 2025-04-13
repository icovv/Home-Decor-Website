import { Link, useLocation } from "react-router-dom";
import styles from "./NotFound.module.css";
import Error from "../errors/Error";
export default function NotFound() {
    let location = useLocation();
    let {errors} = location.state || [];
    console.log(errors);
    return (
        <main className={styles["not-found"]}>
            {errors?.length > 0
            ?
            <Error err={errors}></Error>
            :
            <></>}
            <img src="https://static-00.iconduck.com/assets.00/404-page-not-found-illustration-2048x998-yjzeuy4v.png" className={styles["errorImage"]}></img>
            <div className={styles["container"]}>
                <h1 className={styles['h1']}>Oops!</h1>
                <h2 className={styles['h2']}>Requested page not found!</h2>
                    <Link to='/' className={styles["button"]}> Go to Home Page</Link>
            </div>
        </main>
    )
}