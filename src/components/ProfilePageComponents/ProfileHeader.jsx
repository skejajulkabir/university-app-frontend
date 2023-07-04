import React from 'react'

const ProfileHeader = () => {
  return (
    <div>
        <div className="w-full mx-auto overflow-hidden h-96 object-center border-2 border-slate-500 p-3 ">
                    <div className="h-full w-full object-center">
                        <img src="/utils/default-cover.jpg" alt="" />
                    </div>
                </div>


                <div className="flex flex-row items-center border-b-2 pb-24">
                    <div className="ml-4">
                        <img className="rounded-full border border-4 border-slate-700 p-1 m-3 -my-32 max-w-xs" src="/profile-photos/dp.jpg" alt="" />
                    </div>

                    <div className="">
                        <h1 className="text-6xl font-bold  text-slate-800 mt-11">
                            SK Ejajul Kabir
                        </h1>
                    </div>
                </div>
    </div>
  )
}

export default ProfileHeader