import { Link } from "react-router-dom"
import styles from "./Header.module.css"

export default function Header(){
    return (
        <>
        <header className= {styles.visible}>
    <div className= {styles.container}>
      <div className={styles["left-side"]}>
        <Link to="/">Home Decor</Link>
        <nav className={styles.menu}>
          <ul>
            <li>
              <Link to='/catalog-bedroom'>Bedroom</Link>
            </li>
            <li>
              <Link to='/catalog-decor'>Decor</Link>
            </li>
            <li>
            <Link to='/catalog-dining-room'>Dining Room</Link>
            </li>
            <li>
              <a href="">Sign In</a>
            </li>
            <li>
              <a href="">Admin</a>
            </li>
          </ul>
        </nav>
      </div>
      <div className={styles["right-side"]}>
        <nav>
          <ul>
            <li>
              <i className="fa-solid fa-bag-shopping Cart" />
              <div className= {styles["item-counter"]}>1</div>
              <div className={styles["cart-dropdown"]}>
                <div className={styles["top-section"]}>
                  <h3>Order</h3>
                </div>
                <div className={styles["middle-section"]}>
                  <div className={styles["cart-single-item"]}>
                    <div className={styles["left-side"]}>
                      <img
                        src="/decor.jpg"
                        alt=""
                      />
                    </div>
                    <div className={styles["right-side"]}>
                      <h4>Product Name</h4>
                      <div className={styles["bottom-side"]}>
                        <span>1 x 65.00$</span>
                      </div>
                    </div>
                  </div>
                  <div className={styles["cart-single-item"]}>
                    <div className={styles["left-side"]}>
                      <img
                        src="/decor.jpg"
                        alt=""
                      />
                    </div>
                    <div className={styles["right-side"]}>
                      <h4>Product Name</h4>
                      <div className={styles["bottom-side"]}>
                        <span>1 x 65.00$</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className={styles["bottom-section"]}>
                  <h4>Total Amount:</h4>
                  <p>20.99$</p>
                </div>
              </div>
            </li>
            <li>
              <i className="fa-regular fa-user" />
            </li>
            <li>
              <i className="fa-solid fa-right-from-bracket" />
            </li>
          </ul>
        </nav>
      </div>
    </div>
  </header>
  <header className={styles.hidden}>
    <div className={styles.container}>
      <div className={styles["left-side"]}>
        <a href="">Home Decor</a>
      </div>
      <div className={styles["right-side"]}>
        <nav>
          <ul>
            <li>
              <i className="fa-solid fa-bars" style={{ color: "#ffffff" }} />
            </li>
            <li>
              <i className="fa-solid fa-xmark" style={{ color: "#ffffff" }} />
            </li>
          </ul>
        </nav>
      </div>
      <nav className={styles.dropdown}>
        <ul>
          <li>
            <a href="">Bedroom</a>
          </li>
          <li>
            <a href="">Decor</a>
          </li>
          <li>
            <a href="">Dining Room</a>
          </li>
          <li>
            <a href="">Cart</a>
          </li>
          <li>
            <a href="">Profile</a>
          </li>
          <li>
            <a href="">Sign In</a>
          </li>
          <li>
            <a href="">Logout</a>
          </li>
          <li>
            <a href="">Admin</a>
          </li>
        </ul>
      </nav>
    </div>
  </header>
  </>
    )
}