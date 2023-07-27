import React from 'react'

const ProfileHeader = ({userData}) => {
  return (
    <div>
        <div className="w-full mx-auto overflow-hidden h-96  border-2 border-slate-500 p-3 ">
                    <div className="h-full w-full object-center ">
                        <img className='h-full w-full object-cover' src="/utils/default-cover.jpg" alt="" />
                    </div>
                </div>


                <div className="flex flex-row items-center border-b-2 pb-24 -mt-32">
                    <div className="ml-4 w-72 h-72 ">
                        <img className="rounded-full w-full h-full object-cover border-4 border-slate-700 p-1 m-3  max-w-xs" src={userData.avatar} alt="" />
                    </div>

                    <div className="">
                        <h1 className="text-6xl font-bold  text-slate-800  bg-slate-200 p-4 rounded-lg bg-opacity-70 ml-5">
                            {userData.name}
                        </h1>
                    </div>
                </div>
    </div>
  )
}

export default ProfileHeader