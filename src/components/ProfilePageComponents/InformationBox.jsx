import React from 'react'

const InformationBox = ({user}) => {
    
    const info = user?.info;
    console.log(user)



  return (
    <>
        <div className="lg:w-2/5 mx-2 h-full sticky lg:top-24">






            <div className="w-full h-fit bg-slate-200 p-3 rounded-md">
                <h1 className="xl:text-2xl border-b-2 border-slate-400">Info :</h1>
                <table className="w-full mt-4">
                    <tbody>
                    <tr className="xl:text-2xl font-bold text-slate-700">
                        <td className="border-l-2 border-slate-600 pl-3 pr-3">Department :</td>
                        <td>{info?.department}</td>
                    </tr>
                    <tr className="xl:text-2xl font-bold text-slate-700">
                        <td className="border-l-2 border-slate-600 pl-3 pr-3">Roll No :</td>
                        <td>{info?.roll}</td>
                    </tr>
                    <tr className="xl:text-2xl font-bold text-slate-700">
                        <td className="border-l-2 border-slate-600 pl-3 pr-3">Admission session :</td>
                        <td>{info?.admissionSession}</td>
                    </tr>
                    <tr className="xl:text-2xl font-bold text-slate-700">
                        <td className="border-l-2 border-slate-600 pl-3 pr-3">Current Location :</td>
                        <td>{info?.currentLocation}</td>
                    </tr>
                    {info?.bloodGroup && (
                        <tr className="xl:text-2xl font-bold text-slate-700">
                        <td className="border-l-2 border-slate-600 pl-3 pr-3">Blood group :</td>
                        <td>{info?.bloodGroup}</td>
                        </tr>
                    )}
                    <tr className="xl:text-2xl font-bold text-slate-700">
                        <td className="border-l-2 border-slate-600 pl-3 pr-3">From :</td>
                        <td>{info?.from}</td>
                    </tr>
                    </tbody>
                </table>
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
