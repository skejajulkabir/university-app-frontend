import React from 'react'
import { AiOutlineMenu } from 'react-icons/ai'
import { BiCommentDetail, BiSolidLike } from 'react-icons/bi'

const VideoPost = () => {
  return (
    <>
        <div className="flex flex-col rounded-lg bg-slate-200 shadow-2xl py-2 p-3 md:max-w-3xl mx-auto mb-2 ">
            
            
            {/* Header of the post  */}
            
            <div className="flex flex-row justify-between mb-1">

                <div className="flex flex-row">

                    <div className="border-slate-400 border-2 rounded-full p-1 ">
                        <img src="https://scontent.fjsr8-1.fna.fbcdn.net/v/t39.30808-1/347620645_780008180510762_9150278967896735735_n.jpg?stp=cp6_dst-jpg_p240x240&_nc_cat=108&ccb=1-7&_nc_sid=f67be1&_nc_ohc=ArEislmFMNAAX93D_dn&_nc_ht=scontent.fjsr8-1.fna&oh=00_AfD7nbtf4iQBzJoIOYQi4nfHV5c1nYRbmSCISmxWDlZEtA&oe=649E1364" alt="DP" className='w-11 rounded-full border-slate-600 '/>
                    </div>


                    <div className="ml-2 flex flex-col">

                        <div className="text-sm sm:text-lg ">
                            MD. Rayhan Rahman Rabbi
                        </div>

                        <div className="bg-slate-400 w-fit p-1 text-xs rounded px-2">
                            role
                        </div>

                    </div>

                </div>


                <div className="my-auto mx-5 bg-slate-300 p-3 rounded-full">
                    <AiOutlineMenu className='text-xl'/>
                </div>
            </div>

            {/*  Caption  */}
            <div className="truncate">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Reprehenderit et perferendis suscipit alias laudantium rerum obcaecati earum consequatur ratione ab pariatur amet velit, explicabo tenetur sit, incidunt numquam nam soluta labore quae! Provident, temporibus.
            </div>
            <span className='text-blue-600 cursor-pointer'>see more...</span>



            {/* photo  */}

            <div className="m-2 ">
                <iframe width="560" height="500" src="https://www.youtube.com/embed/a7V9bUwc4cU"  frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen={true} className='w-full '></iframe>
            </div>


            {/* Reaction share and comment  */}


            {/* counts  */}
            <div className="flex flex-row justify-between">
                <span className='pl-3 my-2'>43 people liked this post</span>
                <span className='pr-3 my-2'>3comments</span>
            </div>



            {/* hr  */}
            <div className="w-full h-1 bg-slate-300"></div>

            <div className="flex flex-row justify-evenly">
                {/* like  */}
                <div className=" bg-slate-200 hover:bg-slate-300 hover:scale-110 transition-transform duration-200 ease-in-out px-2 mx-7 py-2 w-1/4 flex justify-center items-center text-lg">
                    <div >
                        <BiSolidLike/> 
                    </div>
                    <span className='px-2'>Like</span>
                </div>
                {/* comment  */}
                <div className=" bg-slate-200 hover:bg-slate-300 hover:scale-110 transition-transform duration-200 ease-in-out px-2 mx-7 py-2 w-1/4 flex justify-center items-center text-lg">
                    <div>

                    <BiCommentDetail/>
                    </div>
                    <span className='px-2'>Comment</span>
                </div>
                {/* share 
                <div className=" bg-slate-400 px-2 mx-7 py-2 w-1/4 flex justify-center ">
                    <BiSolidLike/>
                </div> */}
            </div>

            {/* hr  */}
            <div className="w-full h-1 bg-slate-300"></div>




            
        </div>
    </>
  )
}

export default VideoPost