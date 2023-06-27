import React from 'react'
import { MdBloodtype } from 'react-icons/md'

const PlatformDonors = () => {
  return (
    <>
        <div className="flex flex-row rounded-md w-11/12 h-fit m-4 bg-slate-300 overflow-y-hidden overflow-x-hidden ">


          <div className="w-full m-4 flex flex-col">


            <div className="w-full ">
              <img src="https://scontent.fjsr8-1.fna.fbcdn.net/v/t39.30808-6/343331330_1371814486942572_732636332432882534_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=174925&_nc_ohc=o6SBLbSIXSYAX8-SdcB&_nc_ht=scontent.fjsr8-1.fna&oh=00_AfB94tkGp02LsEVLK-oCGQIjYmNfHOUD2mOwaTXMcUb3Xg&oe=649E4620" alt="donor pic" />
            </div>


            <div className="flex flex-col">
              <div className="text-xl py-2 font-semibold">
                Ikhtiyar Khilji.
              </div>

              <div className="text-xs truncate">
                Dept of XYZ, 2017.
              </div>

              <div className="text-sm">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsa voluptatum officiis autem omnis veritatis expedita provident in at excepturi sint.
              </div>
            </div>


          </div>



          
        </div>

        
    </>
  )
}

export default PlatformDonors