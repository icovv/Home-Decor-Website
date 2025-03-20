import './App.css'

import {Routes, Route} from 'react-router-dom'

import Header from './components/common/header/Header'
import Footer from './components/common/footer/Footer'
import Home from './components/home/Home'
import Bedroom from './components/catalog/bedroom/Bedroom'

function App() {
  return (
    <>
      <Header></Header>

      <Routes>

        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/catalog-bedroom' element={<Bedroom></Bedroom>}></Route>
        
      </Routes>
      
      <Footer></Footer>
    </>
  )
}

export default App
