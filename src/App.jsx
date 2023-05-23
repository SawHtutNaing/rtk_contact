import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Login from './Components/Login'
import Register from './Components/Register'
import Nav from './Components/Nav'

const App = () => {
  return (
 <>
 <Nav></Nav>
   <Routes>
    
    <Route path="/login" element={<Login></Login>} />
    <Route path="/register" element={<Register></Register>} />
   </Routes>
   </>
  )
}

export default App