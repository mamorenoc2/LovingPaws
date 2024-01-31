import React from 'react'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import Routers from '../../routes/Router'


const Layout = () => {
  return (
  <>  
  <div>
    <Routers/>
  </div>
  <Header/>
  </>
  )
}

export default Layout