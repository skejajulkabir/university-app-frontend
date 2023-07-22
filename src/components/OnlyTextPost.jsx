import React , {useState} from 'react'
import { AiOutlineMenu } from 'react-icons/ai'
import { BiSolidLike , BiCommentDetail  } from 'react-icons/bi'

const OnlyTextPost = ({post}) => {
    const [isTruncate, setIsTruncate] = useState(true)
  return (
    <>
        <div className="flex flex-col rounded-lg bg-slate-200 shadow-2xl py-2 p-3 md:max-w-3xl mx-auto mb-2 w-full m-2">
            
            
            {/* Header of the post  */}
            
            <div className="flex flex-row justify-between mb-1">

                <div className="flex flex-row">

                    <div className="border-slate-400 border-2 rounded-full p-1">
                        <img src={post.author.image} alt="DP" className='w-11 rounded-full border-slate-600 '/>
                    </div>


                    <div className="ml-2 flex flex-col">

                        <div className="text-sm sm:text-lg truncate">
                            {post.author.name}
                        </div>

                        {
                            post.author.role.map((rol)=>{
                            return    (<div key={Math.random()} className="bg-slate-400 w-fit p-1 text-xs rounded px-2">
                                    {rol}
                                </div>)
                            })
                        }

                    </div>

                </div>


                <div className="my-auto mx-5 bg-slate-300 p-3 rounded-full">
                    <AiOutlineMenu className='text-xl'/>
                </div>
            </div>

            {/*  Caption  */}
            <div className="w-full  ">
                <textarea
                    className="bg-slate-200 p-2 mx-2 w-full scrollbar-hide"
                    rows={isTruncate ? 2 :12}
                    type="text"
                    name="caption"
                    disabled
                    value={post.caption}
                />
            </div>
            {isTruncate &&
                <span 
                className='text-blue-600 cursor-pointer'
                onClick={()=>setIsTruncate(false)}
                >
                    Expand.
                </span>
            }

            {!isTruncate &&
                <span 
                className='text-blue-600 cursor-pointer'
                onClick={()=>setIsTruncate(true)}
                >
                    Minimise.
                </span>
            }



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

export default OnlyTextPost