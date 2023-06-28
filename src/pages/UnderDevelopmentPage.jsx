import React from 'react'
import { Link } from 'react-router-dom'

const UnderDevelopmentPage = () => {
  return (
    <>
        <Link to='/'>
            <div className="h-screen w-screen flex flex-col bg-slate-50 justify-center items-center">
                <h1 className='text-6xl'>
                    This portion of the application is under development...
                </h1>
                    <h1 className='text-2xl mt-10 bg-slate-300 rounded-md p-5'>
                        Go to Homepage
                    </h1>
            </div>
        </Link>
    </>
  )
}

export default UnderDevelopmentPage