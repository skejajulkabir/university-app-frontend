import React, { useState } from "react";
import MediaUploadingModes from "../components/MediaUploadingModes";

const CreatePostPage = () => {
  const [caption, setCaption] = useState("");
  const [willingToUploadMedia, setWillingToUploadMedia] =
    useState("notselected");
  const [mediaUploadingModes, setMediaUploadingModes] = useState("onlyText");

  const handleCaptionChange = (event) => {
    setCaption(event.target.value);
  };

  const handleFileChange = (event) => {
    const fileList = Array.from(event.target.files);
    setFiles(fileList);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // Perform your post creation logic here, using the 'caption' and 'files' state values
    // ...

    // Reset the form
    setCaption("");
    setFiles([]);
  };

  return (
    <div className="container mx-auto md:p-24">
      <h2 className="text-2xl font-bold mb-4">Create a post as a JUSTIAN!</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="caption" className="text-lg font-medium">
            Caption:
          </label>
          <textarea
            id="caption"
            className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            value={caption}
            onChange={handleCaptionChange}
            required
          />
        </div>

        {/* <MediaUploadingModes/> */}

        <div className="bg-slate-100 my-4">
          <div className="text-2xl  my-4 p-4 w-fit mx-auto">
            Do you Want to post any media? Like photo or Video?
          </div>

          <div className="flex flex-row justify-evenly">
            <button
              className="bg-slate-400 hover:bg-blue-600 text-white font-medium py-2 px-4 rounded m-4 w-1/3 hover:scale-110 transition-transform duration-300 ease-in-out  hover:scale-110 transition-transform duration-300 ease-in-out"
              onClick={() => {
                setWillingToUploadMedia("Yes");
              }}
            >
              Yes
            </button>
            <button
              className="bg-slate-400 hover:bg-blue-600 text-white font-medium py-2 px-4 rounded m-4 w-1/3 hover:scale-110 transition-transform duration-300 ease-in-out  hover:scale-110 transition-transform duration-300 ease-in-out"
              onClick={() => {
                setWillingToUploadMedia("No");
                setMediaUploadingModes("onlyText")
              }}
            >
              No
            </button>
          </div>
        </div>

        {willingToUploadMedia === "Yes" ? (
          <div className="w-full bg-slate-100 rounded">
            <h1 className="w-fit mx-auto text-2xl">
              What do you want to post?
            </h1>

            <div className="flex flex-row justify-evenly">
              <button
                className="bg-slate-400 hover:bg-blue-600 text-white font-medium py-2 px-4 rounded m-4 w-1/3 hover:scale-110 transition-transform duration-300 ease-in-out  hover:scale-110 transition-transform duration-300 ease-in-out"
                onClick={() => setMediaUploadingModes("Photo")}
              >
                <div className="w-fit mx-auto">Photo</div>
              </button>

              <button
                className="bg-slate-400 hover:bg-blue-600 text-white font-medium py-2 px-4 rounded m-4 w-1/3 hover:scale-110 transition-transform duration-300 ease-in-out  hover:scale-110 transition-transform duration-300 ease-in-out"
                onClick={() => setMediaUploadingModes("Video")}
              >
                <div className="w-fit mx-auto">Video</div>
              </button>
            </div>
          </div>
        ):null}








{
  mediaUploadingModes === "Photo" && willingToUploadMedia === "Yes" ? (
        <div className=" my-4 bg-blue-300 rounded items-center">
            <div className="text-2xl  my-4 p-4 w-fit mx-auto font-bold text-3xl">
                Enter photo URL.(Any public URL will WORK!) 
            </div>

            <div className=" w-3/4 mx-auto p-3">
            <input type="text" id="full-name" name="full-name" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out "/>
            </div>
        </div>
  ) : mediaUploadingModes === "Video" && willingToUploadMedia === "Yes" ? (
    <div className=" my-4 bg-red-300 rounded items-center">
            <div className="text-2xl  my-4 p-4  w-fit mx-auto font-bold text-3xl">
                Enter Video URL.(Only Youtube URLs are allowed) 
            </div>

            <div className=" w-3/4 mx-auto p-3">
            <input type="text" id="full-name" name="full-name" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out "/>
            </div>
        </div>
        
  ) : null
}




        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-4 rounded w-full  hover:scale-110 transition-transform duration-300 ease-in-out"
        >
            Post
        </button>
      </form>
    </div>
  );
};

export default CreatePostPage;




