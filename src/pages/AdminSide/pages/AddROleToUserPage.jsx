import React from 'react'
import LeftSideBar from '../components/LeftSideBar'

const AddROleToUserPage = () => {
  return (
    <>
        <div className="pt-20 bg-slate-200 min-h-screen">

            <div className="flex flex-row">
                <LeftSideBar/>

                <div className="w-full p-3 rounded-md">
                    <div className="bg-slate-400 w-full min-h-screen rounded-md p-3">
                        <div className="bg-slate-300 text-center p-3 text-xl rounded-md font-bold ">
                            Add Role To User
                        </div>

                        <div className="flex bg-slate-200 my-4 flex-row p-4 rounded-md">

                            <label htmlFor="usrID">
                                <div className="text-xl font-bold">
                                    Add the users userID : 
                                </div>
                            </label>

                            <div className="w-9/12 pl-3">
                                <input className='p-2 w-full' type="text" name="" id="usrID" />
                            </div>
                        </div>



                        <div className="">
                            <div className="">
                                <select name="" id="">
                                    <option value="">STUDENT</option>
                                </select>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default AddROleToUserPage