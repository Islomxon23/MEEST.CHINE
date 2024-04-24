import React from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Firstpage from '../pages/firstpage'
import Userdashboard from '../pages/userdashboard'

export default function route() {
  return (
    <BrowserRouter>
        <Routes>
            <Route  path="/"  element={<Firstpage/>}/>
            <Route  path="/userdashboard"  element={<Userdashboard/>}/>
            
    
        </Routes>
       
    </BrowserRouter>
  )
}
