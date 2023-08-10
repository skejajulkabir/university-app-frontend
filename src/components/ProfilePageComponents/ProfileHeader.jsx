import React from 'react'

const ProfileHeader = ({userData}) => {
  return (
    <div>
                {/* cover */}
                <div className="w-full mx-auto overflow-hidden   border-2 border-slate-500 p-3 ">
                    <div className="    lg:h-full w-full object-center ">
                        <img className='h-full w-full object-cover' src="/utils/default-cover.jpg" alt="" />
                    </div>
                </div>



                {/* DP */}
                <div className="flex flex-col lg:flex-row items-center border-b-2 pb-24 -mt-16 lg:-mt-32">
                    <div className="w-56  ml-4 lg:w-72 lg:h-72 ">
                        <img className="rounded-full w-full h-full object-cover border-4 border-slate-700 p-1 m-3  max-w-xs" src={userData.avatar} alt="" />
                    </div>

                    <div className="">
                        <h1 className=" text-4xl lg:text-6xl font-bold  text-slate-800  bg-slate-200 p-4 rounded-lg bg-opacity-70 ml-5">
                            {userData.name}
                        </h1>
                    </div>
                </div>
    </div>
  )
}

export default ProfileHeader