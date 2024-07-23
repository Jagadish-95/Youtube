import React from 'react'

// import MainContainer from './MainContainer'
import { Outlet } from 'react-router-dom'
import Header from './header/Header'
import Sidebar from './sidebar/SideBar'

const Body = () => {
  return (
    <>
    <Header/>
    <div className='grid grid-flow-col '>
   <Sidebar/>
     <Outlet/>
    </div>
    </>
  )
}

export default Body
