import React from 'react'
import {  Feed, LeftSidebar, RightSidebar } from '../components'

const Home = () => {
  return (
    <>

      <div className="flex flow-row w-full bg-slate-600 justify-between">

      <LeftSidebar />

      <Feed/>

      <RightSidebar />

      </div>


      {/* <div className="min-h-screen bg-slate-500">home</div> */}

    </>
  )
}

export default Home