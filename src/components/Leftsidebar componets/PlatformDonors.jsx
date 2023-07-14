import React from 'react'
import { Link } from 'react-router-dom'
const PlatformDonors = () => {
  return (
    <>
        {/* <Link to="/platformdonors"> */}
          <div className="flex flex-row rounded-md w-11/12 h-fit m-4 bg-slate-300 overflow-y-hidden overflow-x-hidden ">


            <div className="w-full m-4 flex flex-col">


              <div className="w-full ">
                <img src="/profile-photos/donor pic.jpg" alt="donor pic" />
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
        {/* </Link> */}

        
    </>
  )
}

export default PlatformDonors