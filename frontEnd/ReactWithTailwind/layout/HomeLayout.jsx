import React from 'react'
import { Outlet } from 'react-router-dom'
import Footer from '../pages/Footer'
import Header from '../pages/Header'
export default function HomeLayout() {
  return (
    <>
    <Header/>
    <Outlet/>
    <Footer/>
    </>
  )
}
