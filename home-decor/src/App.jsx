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

function App() {
  return (
    <>
      <Header></Header>

      <Routes>

        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/catalog-bedroom' element={<Bedroom></Bedroom>}></Route>
        <Route path='/catalog-decor' element={<Decor></Decor>}></Route>
        <Route path='/catalog-dining-room' element={<DiningRoom></DiningRoom>}></Route>
        <Route path='/catalog-bedroom/:itemID' element={<BedroomDetails></BedroomDetails>}></Route>
        <Route path='/catalog-decor/:itemID' element={<DecorDetails></DecorDetails>}></Route>
        <Route path='/catalog-dining-room/:itemID' element={<DiningRoomDetails></DiningRoomDetails>}></Route>
        <Route path='/profile/:userID' element={<Profile></Profile>}></Route>
        <Route path='/sign-in' element={<SignIn></SignIn>}></Route>
        <Route path='/sign-up' element={<SignUp></SignUp>}></Route>
        <Route path='/cart' element={<CartOverview></CartOverview>}></Route>
        <Route path='/cart/order' element={<OrderDetails></OrderDetails>}></Route>
        <Route path='/admin' element={<Admin></Admin>}></Route>
        <Route path='/admin/list' element={<AdminList></AdminList>}></Route>
        <Route path='/admin/create' element={<AdminCreate></AdminCreate>}></Route>
        <Route path='/admin/edit/:itemID' element={<AdminEdit></AdminEdit>}></Route>

        
      </Routes>
      
      <Footer></Footer>
    </>
  )
}

export default App
