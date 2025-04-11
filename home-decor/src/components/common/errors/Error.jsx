import styles from "./Error.module.css"

export default function Error(
    {
        err,
        divKill
    }
){
    return(
        <div className={styles["error-container"]}>
            {err.map(item => <div key={item.message} className={styles["error-message"]} id="error-message" onAnimationEnd={divKill}>{item.message}</div>)}
        </div>
    )
}