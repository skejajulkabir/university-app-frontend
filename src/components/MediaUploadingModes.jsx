import React , {useState} from 'react'

const MediaUploadingModes = () => {
    const [willingToUploadMedia, setWillingToUploadMedia] = useState("notselected");
    const [mediaUploadingModes, setMediaUploadingModes] = useState("onlyText");

  return (
        <>

        <div className="bg-slate-100 my-4">

            <div className="text-2xl  my-4 p-4">
                Do you Want to post any media? Like photo or Video?
            </div>

            <div className="flex flex-row justify-evenly">
                <button className="bg-slate-400 hover:bg-blue-600 text-white font-medium py-2 px-4 rounded m-4 w-1/3 hover:scale-110 transition-transform duration-300 ease-in-out" onClick={()=>{setWillingToUploadMedia("Yes")}}>Yes</button>
                <button className="bg-slate-400 hover:bg-blue-600 text-white font-medium py-2 px-4 rounded m-4 w-1/3 hover:scale-110 transition-transform duration-300 ease-in-out" onClick={()=>{setWillingToUploadMedia("No")}}>No</button>
            </div>
        </div>


            {
             willingToUploadMedia === "Yes" &&  <div className="w-full bg-slate-100 rounded">
                <h1 className="w-fit mx-auto text-2xl">
                    What do you want to post?
                </h1>



              
                

                <div className="flex flex-row justify-evenly">
                    <button className="bg-slate-400 hover:bg-blue-600 text-white font-medium py-2 px-4 rounded m-4 w-1/3 hover:scale-110 transition-transform duration-300 ease-in-out"><div className="w-fit mx-auto"onClick={setMediaUploadMode("Photo")}>Photo</div></button>


                    <button  className="bg-slate-400 hover:bg-blue-600 text-white font-medium py-2 px-4 rounded m-4 w-1/3 hover:scale-110 transition-transform duration-300 ease-in-out"><div className="w-fit mx-auto" onClick={setMediaUploadMode("Video")} >Video</div></button>
                </div>
            </div>
            }
        </>

  )
}

export default MediaUploadingModes