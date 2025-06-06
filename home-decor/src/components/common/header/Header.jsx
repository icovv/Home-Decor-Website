import { Link } from "react-router-dom"
import styles from "./Header.module.css"
import { useContext } from "react"
import AuthContext from "../../../contexts/AuthContext"
import CartContext from "../../../contexts/CartContext"
import CartSingleItemPreview from "./cartSingleItemPreview/cartSingleItemPreview"

export default function Header(){
  let {isAuthenticated, isAdmin, userID} = useContext(AuthContext)
  let {state} = useContext(CartContext)
  let totalAmount = 0;
  state.forEach(x => totalAmount += (x.counter * x.price))
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
            {state.length > 0 
            ?
            <div className= {styles["item-counter"]}>{state.length}</div>
            :
            <></>}
              <div className={styles["cart-dropdown"]}>
                <div className={styles["top-section"]}>
                  <h3>Order</h3>
                </div>
                <div className={styles["middle-section"]}>
                  {state.length > 0
                  ?
                  state.map(x => <CartSingleItemPreview key={x.itemId} item={x}></CartSingleItemPreview>)
                  :
                  <></>}
                </div>
                <div className={styles["bottom-section"]}>
                  <h4>Total Amount:</h4>
                  <p>{totalAmount} $</p>
                </div>
              </div>
              </Link> 
            </li>
            {isAuthenticated
            ?
            <>
            <li>
              <Link to={`/profile/${userID}`}><i className="fa-regular fa-user" /></Link>
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
          <Link to={`/profile/${userID}`}>Profile</Link>
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
        <Link to={`/profile/${userID}`}>Profile</Link>
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