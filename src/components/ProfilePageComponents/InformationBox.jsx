import React from 'react'

const InformationBox = () => {
  return (
    <>
        <div className="w-2/5 mx-2 h-full sticky top-24">





            <div className="w-full h-fit bg-slate-200   p-3 rounded-md">
                <div className="flex flex-col h-fit">
                    <h1 className="text-2xl border-b-2 border-slate-400">Info :</h1>
                    <div className="flex  flex-row text-2xl font-bold my-2 text-slate-700   ">
                        <div className=" border-l-2 border-slate-600 pl-3 mr-3 ">Department :</div>
                        <div className="">Physics</div>
                    </div>
                    <div className="flex  flex-row text-2xl font-bold my-2 text-slate-700   ">
                        <div className=" border-l-2 border-slate-600 pl-3 mr-3 ">Roll No :</div>
                        <div className="">211338</div>
                    </div>
                    <div className="flex  flex-row text-2xl font-bold my-2 text-slate-700   ">
                        <div className=" border-l-2 border-slate-600 pl-3 mr-3 ">Admission session :</div>
                        <div className="">2021-2022</div>
                    </div>
                    <div className="flex  flex-row text-2xl font-bold my-2 text-slate-700   ">
                        <div className=" border-l-2 border-slate-600 pl-3 mr-3 ">Current Location :</div>
                        <div className="">Palbari.</div>
                    </div>
                </div>
            </div>


            <div className="w-full h-fit bg-slate-200 p-3 rounded-md mt-3">
                <div className="w-full h-full">
                    <div className="text-2xl border-b-2 border-slate-400">
                        Roles :
                    </div>
                </div>

                <div className="">
                    <div className="flex flex-row flex-wrap">
                        <div className=" p-2 bg-slate-50 w-fit m-2 rounded-md ">
                            Coder
                        </div>
                        <div className=" p-2 bg-slate-50 w-fit m-2 rounded-md ">
                            Artist
                        </div>
                        <div className=" p-2 bg-slate-50 w-fit m-2 rounded-md ">
                            Guitarist
                        </div>
                        <div className=" p-2 bg-slate-50 w-fit m-2 rounded-md ">
                            Biker
                        </div>
                        <div className=" p-2 bg-slate-50 w-fit m-2 rounded-md ">
                            smoker
                        </div>
                        <div className=" p-2 bg-slate-50 w-fit m-2 rounded-md ">
                            Active
                        </div>
                        <div className=" p-2 bg-slate-50 w-fit m-2 rounded-md ">
                            Blood donor
                        </div>
                        <div className=" p-2 bg-slate-50 w-fit m-2 rounded-md ">
                            Physisist
                        </div>
                    </div>
                </div>

            </div>


            <div className="w-full h-fit bg-slate-200 p-3 rounded-md mt-3">
                <div className="w-full h-full">
                    <div className="text-2xl border-b-2 border-slate-400">
                        Awards :
                    </div>
                </div>

                <div className="">
                    <div className="flex flex-row flex-wrap">
                        <div className=" p-2 bg-yellow-300 w-fit m-2 rounded-md ">
                            Cricket Champion
                        </div>
                    </div>
                </div>

            </div>


        </div>
    </>
  )
}

export default InformationBox