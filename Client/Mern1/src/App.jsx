import React from 'react'
import CreateUserData from './Routes/CreateUserData'
import Checkout from './Routes/Checkout'
import {Routes, Route} from 'react-router-dom'
import Navbar from './components/Navbar'
import Update from './Routes/Update'
const App = () => {
  return (
    <>
    <Navbar/ >
      <Routes>
        <Route path='/' element={<CreateUserData />} />
        <Route path='/checkout' element={<Checkout />}/>
        <Route path='/:id' element={<Update />}/>
      </Routes>
    </>
  )
}

export default App
