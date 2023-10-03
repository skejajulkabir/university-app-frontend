import React, { useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { FaLocationArrow } from "react-icons/fa";
import { BiCommentDetail, BiSolidLike } from "react-icons/bi";
import axios from "axios";
import Comment from "./Comment";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";

const VideoPost = ({ pst }) => {
  const [isTruncate, setIsTruncate] = useState(true);
  const [newComment, setNewComment] = useState("");
  const [showComment, setShowComment] = useState(false);
  const [post, setPost] = useState(pst);

  const globalUser = useSelector((state) => state.globalUser.user);

  let vdoURL;
  if (post.videoURL.includes("www.youtube.com/watch?v")) {
    const URLextension = post.videoURL.split("=")[1];

    // setExtractedURL(URLextension);
    vdoURL = URLextension;
  }

  const handleLikeClick = () => {
    axios
      .post(
        `${import.meta.env.VITE_REACT_APP_BACKEND_SERVER_URL}/client1/like`,
        {
          postId: post._id,
          name: globalUser.name,
          userName: globalUser.userName,
        }
      )
      .then((res) => {
        // console.log(res.data.response); // Check the response
        setPost(res.data.response); // Make sure this updates the state correctly
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const handleAddComment = () => {
    if (newComment === "") {
      toast.error("Comments cannot be empty.");
      return;
    }

    axios
      .post(
        `${import.meta.env.VITE_REACT_APP_BACKEND_SERVER_URL}/client1/comment`,
        {
          postId: post._id,
          userId: globalUser._id,
          img: globalUser.avatar,
          name: globalUser.name,
          userName: globalUser.userName,
          comment: newComment,
        }
      )
      .then((res) => {
        setPost(res.data.updatedPost);
        setNewComment("");
      })
      .catch((error) => {
        console.error(error);
      });
  };


  
  const timestamp = post.createdAt;
  const formattedDate = new Date(timestamp).toLocaleString();

  return (
    <>
      <ToastContainer
        position="top-center"
        autoClose={4000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      <div className="flex flex-col rounded-lg bg-slate-200 shadow-2xl py-2 p-3 md:max-w-3xl mx-auto mb-2 w-full relative">







      <div className="">
          <div className="bg-slate-800 w-fit absolute top-0 right-0 text-white text-xs p-1 rounded-md  -mt-1">
            {post.postType}
          </div>
        </div>





        {/* Header of the post  */}

        <div className="flex flex-row justify-between mb-1 relative">
          <div className="flex flex-row">
            <Link to={`/profile/${post.author._id}`}>
              <div className="w-14 h-14    border-slate-400 border-2 rounded-full p-1">
                <img
                  src={post.author.avatar}
                  alt="DP"
                  className="w-full h-full object-cover rounded-full border-slate-600 "
                />
              </div>
            </Link>

            <div className=" flex flex-col pl-1">
              <Link to={`/profile/${post.author?._id}`}>
                <div className="text-sm sm:text-lg truncate font-bold">
                  {post.author.name}
                </div>
              </Link>


              <div className="text-xs ">
                {formattedDate}
              </div>



              <div className="flex flex-row w-5/6 overflow-x-scroll scrollbar-hide">
                {post.author.role && post.author.role.map((rol, index) => {
                  return (
                    <div
                      key={index}
                      className="bg-slate-400 w-fit p-1 text-xs rounded px-2 mx-1 text-slate-800 my-1"
                    >
                      {rol}
                    </div>
                  );
                })}
              </div>




            </div>
          </div>

          <div className="absolute top-4 right-2 bg-slate-300 p-3 rounded-full cursor-pointer">
            <AiOutlineMenu className="text-xl" />
          </div>
        </div>

        <div className="w-full h-1 bg-slate-300"></div>

        {/*  Caption  */}
        <div className="w-full  ">
          <textarea
            className="bg-slate-200 p-2 mx-2 w-full scrollbar-hide"
            rows={isTruncate ? 2 : 12}
            type="text"
            name="caption"
            disabled
            value={post.caption}
          />
        </div>
        {isTruncate && (
          <span
            className="text-blue-600 cursor-pointer"
            onClick={() => setIsTruncate(false)}
          >
            Expand.
          </span>
        )}

        {!isTruncate && (
          <span
            className="text-blue-600 cursor-pointer"
            onClick={() => setIsTruncate(true)}
          >
            Minimise.
          </span>
        )}

        {/* photo  */}

        <div className="">
          <iframe
            width="560"
            height="500"
            src={`https://www.youtube.com/embed/${vdoURL}`}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen={true}
            className="w-full "
          ></iframe>
        </div>

        {/* Reaction share and comment  */}

        {/* counts  */}
        <div className="flex flex-row justify-between">
          <span className="pl-3 my-2">
            {post.likes.length} people liked this post
          </span>
          <span className="pr-3 my-2">{post.comments.length} comments</span>
        </div>

        {/* hr  */}
        <div className="w-full h-1 bg-slate-300"></div>

        <div className="flex flex-row justify-evenly">
          {/* like  */}
          <div
            className=" bg-slate-200 hover:bg-slate-300 hover:scale-110 transition-transform duration-200 ease-in-out px-2 mx-7 py-2 w-1/4 flex justify-center items-center text-lg"
            onClick={handleLikeClick}
          >
            <div>
              <BiSolidLike />
            </div>
            <span className="px-2">Like</span>
          </div>
          {/* comment  */}
          <div
            className=" bg-slate-200 hover:bg-slate-300 hover:scale-110 transition-transform duration-200 ease-in-out px-2 mx-7 py-2 w-1/4 flex justify-center items-center text-lg"
            onClick={() =>
              setShowComment((prev) => {
                return !prev;
              })
            }
          >
            <div>
              <BiCommentDetail />
            </div>
            <span className="px-2">Comment</span>
          </div>
          {/* share 
                <div className=" bg-slate-400 px-2 mx-7 py-2 w-1/4 flex justify-center ">
                    <BiSolidLike/>
                </div> */}
        </div>

        {/* hr  */}
        <div className="w-full h-1 bg-slate-300"></div>

        {showComment && (
          // post.comments.length > 0 &&

          <div className="w-full h-fit max-h-screen overflow-hidden overflow-x-hidden overflow-y-scroll ">
            <div className="w-full">
              <div className="mx-2 py-2 pt-5 flex flex-row ">
                <div className="w-11/12">
                  <textarea
                    rows={1}
                    className="w-full p-2 pl-5 rounded-md border-slate-100 border-2 focus:outline-slate-400"
                    placeholder="Add a comment..."
                    type="text"
                    value={newComment}
                    onChange={(e) => setNewComment(e.target.value)}
                  />
                </div>
                <div
                  className="w-1/12  bg-slate-300 hover:bg-slate-400 flex justify-center items-center rounded-full "
                  onClick={handleAddComment}
                >
                  <div className="flex justify-center items-center text-xl text-slate-800">
                    <FaLocationArrow />
                  </div>
                </div>
              </div>

              {post.comments.map((com, index) => {
                return (
                  <Comment setPost={setPost} postId={post._id} key={index} com={com}/>
                );
              })}
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default VideoPost;
