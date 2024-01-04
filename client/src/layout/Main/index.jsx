import React from 'react'
import Header from '../Header'
import Footer from '../Footer'
import { Outlet } from 'react-router-dom'
import Overlay from '../../components/CommonComponents/Overlay'

const Main = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
      {/* <Overlay /> */}
    </>
  )
}

export default Main
