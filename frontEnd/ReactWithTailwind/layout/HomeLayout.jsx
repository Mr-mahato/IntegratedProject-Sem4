import React from 'react'
import { Outlet } from 'react-router-dom'
import Footer from '../pages/Footer'
import Header from '../pages/Header'
export default function HomeLayout() {
  return (

      <div className="flex flex-col min-h-screen">
    <Header/>
    <Outlet/>
    <Footer/>
    </div>
    
  )
}
