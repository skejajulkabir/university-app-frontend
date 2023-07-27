import React from 'react'
import { CgProfile } from 'react-icons/cg'
import { Link } from 'react-router-dom'

const UpdateProfilePage = () => {

  



  return (
    <>
        <div className="pt-36 bg-slate-400 w-full min-h-screen ">
        <div className="w-full">

          <div className="px-4 w-full pb-3" >

            <Link to="/updatedp">
                <div className="flex flex-row bg-slate-300 m-4 p-3 items-center rounded-md mt-2 hover:scale-105 transition-transform duration-300 ease-in-out ">
                <div className="w-11  pl-3">
                    <CgProfile className="text-2xl " />
                </div>

                <div className="ml-4 text-xl  truncate font-bold">Update DP</div>
                </div>
            </Link>


          </div>
        </div>
      </div>
    </>
  )
}

export default UpdateProfilePage