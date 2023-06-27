import React from 'react'

const ProfileHeader = () => {
  return (
    <div>
        <div className="w-full mx-auto overflow-hidden h-96 object-center border-2 border-slate-500 p-3 ">
                    <div className="h-full w-full object-center">
                        <img src="https://scontent.fjsr8-1.fna.fbcdn.net/v/t39.30808-6/356371576_3674174506137622_5142504487296516411_n.jpg?stp=cp6_dst-jpg&_nc_cat=105&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=Kd_t5KNEQ-IAX-U6JYo&_nc_ht=scontent.fjsr8-1.fna&oh=00_AfDT_i4DhDIGMl-jJdXgevGS9sl5Wi83LRgZuSeKwHh_lQ&oe=649E8F06" alt="" />
                    </div>
                </div>


                <div className="flex flex-row items-center border-b-2 pb-24">
                    <div className="ml-4">
                        <img className="rounded-full border border-4 border-slate-700 p-1 m-3 -my-32 " src="https://scontent.fjsr8-1.fna.fbcdn.net/v/t39.30808-1/337565198_611760390381817_9011426361755166686_n.jpg?stp=dst-jpg_p240x240&_nc_cat=111&ccb=1-7&_nc_sid=7206a8&_nc_ohc=oxJLbCvi-eYAX9jP_hA&_nc_ht=scontent.fjsr8-1.fna&oh=00_AfD1XzoCV4WMRFEE0_MhSGT1AiPiGr9zYOu0pY4-Gl5igw&oe=649D40FE" alt="" />
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