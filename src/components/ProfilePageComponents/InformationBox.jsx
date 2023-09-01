import React from 'react'

const InformationBox = ({user}) => {
    
    const info = user?.info;
    console.log(user)



  return (
    <>
        <div className="lg:w-2/5 mx-2 h-full sticky lg:top-24">





            <div className="w-full h-fit bg-slate-200   p-3 rounded-md">
                <div className="flex flex-col h-fit">
                    <h1 className="xl:text-2xl border-b-2 border-slate-400">Info :</h1>
                    <div className="flex  flex-row xl:text-2xl font-bold my-2 text-slate-700   ">
                        <div className=" border-l-2 border-slate-600 pl-3 mr-3 ">Department :</div>
                        <div className="">{info?.department}</div>
                    </div>
                    <div className="flex  flex-row xl:text-2xl font-bold my-2 text-slate-700   ">
                        <div className=" border-l-2 border-slate-600 pl-3 mr-3 ">Roll No :</div>
                        <div className="">{info?.roll}</div>
                    </div>
                    <div className="flex  flex-row xl:text-2xl font-bold my-2 text-slate-700   ">
                        <div className=" border-l-2 border-slate-600 pl-3 mr-3 ">Admission session :</div>
                        <div className="">{info?.admissionSession}</div>
                    </div>
                    <div className="flex  flex-row xl:text-2xl font-bold my-2 text-slate-700   ">
                        <div className=" border-l-2 border-slate-600 pl-3 mr-3 ">Current Location :</div>
                        <div className="">{info?.currentLocation}</div>
                    </div>
                    <div className="flex  flex-row xl:text-2xl font-bold my-2 text-slate-700   ">
                        <div className=" border-l-2 border-slate-600 pl-3 mr-3 ">From :</div>
                        <div className="">{info?.from}</div>
                    </div>
                </div>
            </div>


            {
                user.role &&
                    <div className="w-full h-fit bg-slate-200 p-3 rounded-md mt-3">
                    <div className="w-full h-full">
                        <div className="xl:text-2xl border-b-2 border-slate-400">
                            Roles :
                        </div>
                    </div>

                    <div className="">
                        <div className="flex flex-row flex-wrap">

                            {
                            user.role &&  
                                user.role.map((rol , index)=>{
                                    return <div key={index} className=" p-2 bg-slate-50 w-fit m-2 rounded-md ">
                                    {rol}
                                </div>
                                })
                            }

                        </div>
                    </div>

            </div>
            }



                {
                user?.awards?.length > 0 ? (
                    <div className="w-full h-fit bg-slate-200 p-3 rounded-md mt-3">
                                        <div className="w-full h-full">
                                            <div className="xl:text-2xl border-b-2 border-slate-400">
                                                Awards :
                                            </div>
                                        </div>

                                        <div className="">
                                            <div className="flex flex-row flex-wrap">
                                                {
                                                    user.awards &&  
                                                        user.awards.map((awrd)=>{
                                                            return <div className=" p-2 bg-slate-50 w-fit m-2 rounded-md ">
                                                            {awrd}
                                                        </div>
                                                        })
                                                }
                                            </div>
                                        </div>

                                    </div>
                ) : (
                    <div className="w-full h-fit bg-slate-200 p-3 rounded-md mt-3">
                    <div className="w-full h-full">
                        <div className="xl:text-2xl border-b-2 border-slate-400">Awards :</div>
                    </div>
                    <div className="">
                        <div className="flex flex-row flex-wrap">
                        <div className="p-2 bg-slate-50 w-fit m-2 rounded-md">This user has no awards...</div>
                        </div>
                    </div>
                    </div>
                )
                }


            


        </div>
    </>
  )
}

export default InformationBox
