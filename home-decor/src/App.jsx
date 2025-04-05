import './App.css'

import {Routes, Route} from 'react-router-dom'

import Header from './components/common/header/Header'
import Footer from './components/common/footer/Footer'
import Home from './components/home/Home'
import Bedroom from './components/catalog/bedroom/Bedroom'
import Decor from './components/catalog/decor/Decor'
import DiningRoom from './components/catalog/dining-room/DiningRoom'
import BedroomDetails from './components/catalog/bedroom/bedroom-details/BedroomDetails'
import DecorDetails from './components/catalog/decor/decor-details/DecorDetails'
import DiningRoomDetails from './components/catalog/dining-room/dining-room-details/DiningRoomDetails'
import Profile from './components/profile/Profile'
import SignIn from './components/sign-in/SignIn'
import SignUp from './components/sign-in/sign-up/SignUp'
import CartOverview from './components/cart/overview/CartOverview'
import OrderDetails from './components/cart/order/OrderDetails'
import Admin from './components/admin/admin-header/Admin'
import AdminList from './components/admin/admin-list/AdminList'
import AdminCreate from './components/admin/admin-create/AdminCreate'
import AdminEdit from './components/admin/admin-edit/AdminEdit'
import { AuthProvider } from './contexts/AuthContext'
import AuthGuard from './guards/AuthGuard'
import Logout from './components/common/logout/Logout'

function App() {
  return (
    <>
      <AuthProvider>
      <Header></Header>

      <Routes>

        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/catalog-bedroom' element={<Bedroom></Bedroom>}></Route>
        <Route path='/catalog-decor' element={<Decor></Decor>}></Route>
        <Route path='/catalog-dining-room' element={<DiningRoom></DiningRoom>}></Route>
        <Route path='/catalog-bedroom/:itemID' element={<BedroomDetails></BedroomDetails>}></Route>
        <Route path='/catalog-decor/:itemID' element={<DecorDetails></DecorDetails>}></Route>
        <Route path='/catalog-dining-room/:itemID' element={<DiningRoomDetails></DiningRoomDetails>}></Route>
        <Route path='/profile/:userID' element={<AuthGuard><Profile></Profile></AuthGuard>}></Route>
        <Route path='/sign-in' element={<AuthGuard><SignIn></SignIn></AuthGuard>}></Route>
        <Route path='/sign-up' element={<AuthGuard><SignUp></SignUp></AuthGuard>}></Route>
        <Route path='/cart' element={<CartOverview></CartOverview>}></Route>
        <Route path='/cart/order' element={<OrderDetails></OrderDetails>}></Route>
        <Route path='/admin' element={<AuthGuard><Admin></Admin></AuthGuard>}></Route>
        <Route path='/admin/list' element={<AuthGuard><AdminList></AdminList></AuthGuard>}></Route>
        <Route path='/admin/create' element={<AuthGuard><AdminCreate></AdminCreate></AuthGuard>}></Route>
        <Route path='/admin/edit/:itemID' element={<AuthGuard><AdminEdit></AdminEdit></AuthGuard>}></Route>
        <Route path='/logout' element={<AuthGuard><Logout></Logout></AuthGuard>}></Route>
        
      </Routes>
      
      <Footer></Footer>
      </AuthProvider>
    </>
  )
}

export default App
