import React, { useState } from "react";
import { SlOptions } from "react-icons/sl";
import { AiFillCloseCircle } from "react-icons/ai";
import { Link } from "react-router-dom";
import axios from "axios";
import { useSelector } from "react-redux";
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';

const Comment = ({ setPost , com , postId }) => {

  const [showModal, setShowModal] = useState(false);


  
  return (
    <>

      {
        showModal && <OptionsModal setPost={setPost} postId={postId} setShowModal={setShowModal} com={com}/>
      }


      <div className="comment flex flex-row mb-3 relative">
        

        {/* options button */}
        <div className="absolute top-3 right-6" onClick={()=>setShowModal(true)}>
          <div className="bg-slate-100 p-2 rounded-full cursor-pointer">
            <SlOptions/>
          </div>
        </div>



        <Link to={`/profile/${com.commenter._id}`}>
          <div className="w-10 h-10 m-1    border-slate-400 border-2 rounded-full p-1">
            <img
              src={com.commenter.avatar}
              alt="DP"
              className="w-full h-full object-cover rounded-full border-slate-600  "
            />
          </div>
        </Link>

        <div className="bg-slate-300 w-full p-3 pt-1 rounded-lg mx-2 ">
          <Link to={`/profile/${com.commenter._id}`}>
            <div className="font-bold text-lg text-slate-800">{com.commenter.name}</div>
            <div className="font-bold text-xs text-slate-800">
              {com.commenter.userName}
            </div>
          </Link>
          <div className="">{com.comment}</div>
        </div>
      </div>
    </>
  );
};



const OptionsModal = ({ setPost , setShowModal , com , postId })=>{



  const globalUser = useSelector((state) => state.globalUser.user);




  const handleDeleteComment = () => {


    const confirmation = window.confirm("Proceed to delete comment?");
  
    if (confirmation) {
  
      axios
        .delete(`${import.meta.env.VITE_REACT_APP_BACKEND_SERVER_URL}/client1/deletecomment`, {
          data: {
            postId: postId,
            commentId: com._id,
            userId: globalUser._id,
          },
        })
        .then((res) => {
          console.log(res);
          if(res.status === 200){
            setPost(res.data.newPost);
            setShowModal(false);
            toast.success(res.data.msg);
          }
        })
        .catch((error) => {
          console.error(error);
          toast.error("Something went wrong!");
        });
    } else {
      return;
    }
  };
  



  
  return(
    <>
    <ToastContainer
        position="top-center"
        autoClose={8000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      {
        globalUser._id === com.commenter._id &&

        <div className="min-h-screen w-full bg-slate-600 bg-opacity-70 z-20 fixed top-0 left-0 flex items-center justify-center" >
          <div className="p-6 pt-20 bg-slate-300 rounded-md flex flex-col relative">


            <div className="bg-slate-200 p-3 rounded-md cursor-pointer text-2xl absolute top-4 right-4"
              onClick={()=> setShowModal(false)}
            >
              <AiFillCloseCircle/>
            </div>
            <div className="bg-slate-200 p-3 rounded-md cursor-pointer text-2xl " 
              onClick={handleDeleteComment}
            >
              DELETE COMMENT.
            </div>
            

          </div>
        </div>

      }


      {
        globalUser._id !== com.commenter._id &&

        <div className="min-h-screen w-full bg-slate-600 bg-opacity-70 z-20 fixed top-0 left-0 flex items-center justify-center" >
          <div className="p-6 pt-20 bg-slate-300 rounded-md flex flex-col relative">


          <div className="bg-slate-200 p-3 rounded-md cursor-pointer text-2xl absolute top-4 right-4"
            onClick={()=> setShowModal(false)}
          >
            <AiFillCloseCircle/>
          </div>

          <div className="bg-red-200 p-3 rounded-md cursor-pointer text-2xl " >
            You don't have permissions to make any changes to this comment.
          </div>
            

          </div>
        </div>

      }




    </>
  )
}





export default Comment;
