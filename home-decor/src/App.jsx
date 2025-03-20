import './App.css'

import {Routes, Route} from 'react-router-dom'

import Header from './components/common/header/Header'
import Footer from './components/common/footer/Footer'
import Home from './components/home/Home'

function App() {
  return (
    <>
      <Header></Header>

      <Routes>

        <Route path='/' element={<Home></Home>}></Route>
      
      </Routes>
      
      <Footer></Footer>
    </>
  )
}

export default App
