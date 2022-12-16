import React from 'react'
import { Outlet } from 'react-router-dom'
import { Footer, Header } from '../components'

const Layout = () => {
  return <>
   <div className='container'> 
    <Header />
    <Outlet />
    <Footer />
   </div>  
  </>
}

export default Layout
