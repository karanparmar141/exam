import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../pages/Home'
import Women from '../pages/Women'
import Men from '../pages/Men'
import Login from '../compentes/Login'

const Allroute = () => {
  return (
    <>
    <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/men' element={<Men/>}/>
        <Route path='/women' element={<Women/>}/>
        <Route path='/login' element={<Login/>}/>
    </Routes>
    </>
  )
}

export default Allroute