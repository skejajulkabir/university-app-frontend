import React from 'react'
import { CgNotes } from 'react-icons/cg'

const NoticeBar = () => {
  return (
    <>
        <div className="flex flex-row bg-slate-300 m-4 p-3 items-center rounded-md mt-2 cursor-pointer hover:scale-105 transition-transform duration-300 ease-in-out">
          <div className="w-11 text-3xl ml-2">
            <CgNotes/>
          </div>

          <div className="ml-1 w-5/6">
            <div className="ml-4 text-lg font-semibold">
              Notices.
            </div>
          </div>
        </div>
        
    </>
  )
}

export default NoticeBar