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
      </Routes>
      
      <Footer></Footer>
    </>
  )
}

export default App
