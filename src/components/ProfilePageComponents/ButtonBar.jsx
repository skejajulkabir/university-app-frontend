import React from 'react'

const ButtonBar = () => {
  return (
    <>
        <div className="bg-slate-50">
            <div className="w-full flex flex-row  justify-evenly border-b-2 border-slate-200 pb-2 mt-10">
                <button className="bg-slate-300 px-8 py-2 mx-3 mt-2 rounded-lg ">Button</button>
                <button className="bg-slate-300 px-8 py-2 mx-3 mt-2 rounded-lg ">Button</button>
                <button className="bg-slate-300 px-8 py-2 mx-3 mt-2 rounded-lg ">Button</button>
                <button className="bg-slate-300 px-8 py-2 mx-3 mt-2 rounded-lg ">Button</button>
                <button className="bg-slate-300 px-8 py-2 mx-3 mt-2 rounded-lg ">Button</button>
                <button className="bg-slate-300 px-8 py-2 mx-3 mt-2 rounded-lg ">Button</button>
            </div>
        </div>
    </>
  )
}

export default ButtonBar