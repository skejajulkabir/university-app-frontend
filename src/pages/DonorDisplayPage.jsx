import React from 'react'

const DonorDisplayPage = () => {
  return (
    <>
       <div className="pt-28">
        <div className="w-full min-h-screen">
            <div className="w-4/6 mx-auto ">
                <div className="w-full flex justify-center bg-slate-400 py-3 rounded hover:scale-110 transition-transform duration-300 ease-in-out">
                    <div className="text-6xl font-bold  font-serif">
                        Platform Donors.
                    </div>
                </div>

                <div className="w-full bg-slate-200 mt-3">
                    <div className="h-4">
                    </div>
                </div>



                {/* donorCards */}
                

                {/* <div className="flex flex-row items-center justify-between h-fit">

                    <div className="h-fit">
                        <div className="w-80 m-3">
                            <img src="/public/profile-photos/donor pic.jpg" alt="" />
                        </div>
                    </div>

                    <div className="bg-sky-100 w-full h-80 m-2 overflow-y-scroll overflow-x-hidden">
                        <div className="">
                            <div className="flex flex-row text-3xl font-bold font-serif p-2">
                                <span className=''>
                                    Name :
                                </span>

                                <div className="pl-2">
                                    Ekhtiyar Uddin
                                </div>
                            </div>





                            <div className="flex flex-row text-lg font-bold font-serif p-2">
                                <span className=''>
                                    Identity:
                                </span>

                                <div className="pl-2 ">
                                    Hello I'm a student of physics department of 12-13 session.
                                </div>
                            </div>



                            <div className="flex flex-row text-lg font-bold font-serif p-2">
                                <span className=''>
                                    Description:
                                </span>

                                <div className="pl-2">
                                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ut ea numquam neque facere veritatis. Quo optio voluptatem, eaque adipisci praesentium eos, mollitia laborum fuga quas similique, qui iusto doloribus? Illum unde minima delectus eos quod culpa. Non sequi aspernatur voluptates?
                                    
                                </div>
                            </div>



                        </div>
                    </div>

                </div> */}

                <DonorCard/>
                <DonorCard/>
                <DonorCard/>
                <DonorCard/>




            </div>
        </div>
       </div>
    </>
  )
}

export default DonorDisplayPage





const DonorCard = () => {
  return (
    <>
        <div className="flex flex-row items-center justify-between h-fit rounded bg-slate-300 my-2 hover:scale-105 transition-transform duration-300 ease-in-out border-2 border-slate-600">

            <div className="h-fit">
                <div className="w-80 m-3 hover:scale-110 transition-transform duration-300 ease-in-out rounded-full border-2 border-slate-600 p-2">
                    <img className='rounded-full' src="/public/profile-photos/donor pic.jpg" alt="" />
                </div>
            </div>

            <div className="bg-sky-100 w-full h-80 m-2 overflow-y-scroll overflow-x-hidden">
                <div className="">
                    <div className="flex flex-row text-3xl font-bold font-serif p-2">
                        <span className=''>
                            Name :
                        </span>

                        <div className="pl-2">
                            Ekhtiyar Uddin
                        </div>
                    </div>





                    <div className="flex flex-row text-lg font-bold font-serif p-2">
                        <span className=''>
                            Identity:
                        </span>

                        <div className="pl-2 ">
                            Hello I'm a student of physics department of 12-13 session.
                        </div>
                    </div>



                    <div className="flex flex-row text-lg font-bold font-serif p-2">
                        <span className=''>
                            Description:
                        </span>

                        <div className="pl-2">
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ut ea numquam neque facere veritatis. Quo optio voluptatem, eaque adipisci praesentium eos, mollitia laborum fuga quas similique, qui iusto doloribus? Illum unde minima delectus eos quod culpa. Non sequi aspernatur voluptates?
                            
                        </div>
                    </div>



                </div>
            </div>

        </div>
    </>
  )
}
