import { Link } from "react-router-dom"
import styles from "./Header.module.css"
import { useContext } from "react"
import AuthContext from "../../../contexts/AuthContext"
import useFormSubmitHandlers from "../../../hooks/useFormSubmitHandlers"

export default function Header(){
  let {isAuthenticated, isAdmin} = useContext(AuthContext)
    return (
        <>
        <header className= {styles.visible}>
    <div className= {styles.container}>
      <div className={styles["left-side"]}>
        <Link to="/">Home Decor</Link>
        <nav className={styles.menu}>
            {isAuthenticated 
            ?
            isAdmin 
            ?
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
            <Link to='/admin'>Admin</Link>
            </li>
            </ul>
            :
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
            </ul>
            :
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
            <Link to='/sign-in'>Sign In</Link>
          </li>
          </ul>
            }

        </nav>
      </div>
      <div className={styles["right-side"]}>
        <nav>
          <ul>
            <li>
            <Link to='/cart'><i className="fa-solid fa-bag-shopping Cart" />
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
              </Link> 
            </li>
            {isAuthenticated
            ?
            <>
            <li>
              <Link to='/profile/1'><i className="fa-regular fa-user" /></Link>
            </li>
            <li>
             <Link to='/logout'><i className="fa-solid fa-right-from-bracket" /></Link>
            </li>
            </>
            :
            <></>
            }
          </ul>
        </nav>
      </div>
    </div>
  </header>
  <header className={styles.hidden}>
    <div className={styles.container}>
      <div className={styles["left-side"]}>
      <Link to="/">Home Decor</Link>
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
        {isAuthenticated
        ?
        isAdmin
        ?
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
          <Link to='/cart'>Cart</Link>  
          </li>
          <li>
          <Link to='/profile/1'>Profile</Link>
          </li>
          <li>
            <Link to='/logout'>Logout</Link>
          </li>
          <li>
          <Link to='/admin'>Admin</Link>
          </li>
        </ul>
        :
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
        <Link to='/cart'>Cart</Link>  
        </li>
        <li>
        <Link to='/profile/1'>Profile</Link>
        </li>
        <li>
          <Link to='/logout'> Logout </Link>
        </li>
      </ul>
        :
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
        <Link to='/cart'>Cart</Link>  
        </li>
        <li>
        <Link to='/sign-in'>Sign In</Link>
        </li>
      </ul>
        }
        
      </nav>
    </div>
  </header>
  </>
    )
}