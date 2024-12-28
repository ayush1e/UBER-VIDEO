 import React from 'react'
import { Link, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Login from './pages/Login'
import Signup from './pages/Signup'
import Captainlogin from './pages/Captainlogin'
import CaptainSignup from './pages/CaptainSignup'

 
 function App() {
   return (
      
    <>
 
   
    <div>

       <Routes>
          <Route path='/' element={<Home />} ></Route>
          <Route path='/login' element={<Login />} ></Route>
          <Route path='/signup' element={<Signup/>} ></Route>
          <Route path='/captain-login' element={<Captainlogin />} ></Route>
          <Route path='/captain-signup' element={<CaptainSignup />} ></Route>

       </Routes>

    </div>

    </>

   )
 }
 
 export default App