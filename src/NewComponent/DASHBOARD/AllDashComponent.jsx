import React from 'react'
import Sidebar from './Sidebar'
import DashHeader from './DashHeader'
import DashHome from './DashHome'
import DashNavbar from './DashNavbar'

const AllDashComponent = () => {
  return (
    <>
    <DashNavbar/>
      <Sidebar/>
      <DashHome/>

    </>
  )
}

export default AllDashComponent
