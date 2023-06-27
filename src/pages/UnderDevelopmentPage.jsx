import React from 'react'
import { Link } from 'react-router-dom'

const UnderDevelopmentPage = () => {
  return (
    <>
        <div className="h-screen w-screen flex flex-col bg-slate-50 justify-center items-center">
            <h1 className='text-6xl'>
                This portion of the application is under development...
            </h1>
            <Link to='/'>
                <h1 className='text-2xl mt-10 bg-slate-300 rounded-md p-5'>
                    Go to Homepage
                </h1>
            </Link>
        </div>
    </>
  )
}

export default UnderDevelopmentPage