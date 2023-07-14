import React from 'react'
import { Link } from 'react-router-dom'
import LeftSideBar from '../components/LeftSideBar'

const AdminHomePage = () => {
  return (
    <>
        <div className="pt-20">
            <div className="flex flex-row">

                <LeftSideBar/>



                <div className="w-5/6 p-4 bg-slate-200 min-h-screen m-2">
                    Dashboard body
                </div>
                

            </div>
        </div>   
    </>
  )
}

export default AdminHomePage