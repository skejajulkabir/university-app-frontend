import React, { useEffect , useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from "react-redux";
import { setLoading } from '../Redux/features/utilSlice';
import {  OnlyTextPost, VideoPost } from '../components'
import Post from '../components/Post'
import LoadingComponent from '../Utils/LoadingComponent';


const BloodDonationPage = () => {

  const [noticeData, setNoticeData] = useState([])
  const [page, setPage] = useState(1)

  const dispatch = useDispatch();


  
  const globalUser = useSelector((state) => state.globalUser.user);
  const globalUtil = useSelector((state) => state.globalUtils);


  const handleInfiniteScroll = ()=>{
    try {
      if((window.innerHeight + document.documentElement.scrollTop)  + 1 >= document.documentElement.scrollHeight){
        setPage(prev=>prev + 1)
      }
    } catch (error) {
      console.log(error);
    }
  }



  // useEffect(()=>{
  //   window.addEventListener('scroll', handleInfiniteScroll)
  // },[])





  useEffect(() => {
    // Add the event listener for scroll on mount
    window.addEventListener('scroll', handleInfiniteScroll);

    // Remove the event listener on unmount
    return () => {
      window.removeEventListener('scroll', handleInfiniteScroll);
    };
  }, []);






  useEffect(() => {
    const fetchPosts = async () => {

      dispatch(setLoading(true))
      await axios
        // .get(`${import.meta.env.VITE_REACT_APP_BACKEND_SERVER_URL}/client1/getnotice?page=${page}&limit=4`)
        .get(`${import.meta.env.VITE_REACT_APP_BACKEND_SERVER_URL}/client1/getbloodnotice?page=${page}&limit=10`)
        .then((res) => {
          dispatch(setLoading(false))
          setNoticeData((prev)=> [...prev , ...res.data.notices]);
        })
        .catch((err) => {
          dispatch(setLoading(false))
          console.log("there was an error fetching the data." , err);
        });
    };
    fetchPosts();
  }, [page]);

  


  return (
    <>
    {
      globalUtil.isLoading &&
                <LoadingComponent/>
    }
    <div className="w-full bg-slate-500 px-4 min-h-screen">

      <div className="w-full py-20 lg:py-1  "></div>



      <Link to={"/createblooddonationnotice"}>
        <div className="flex flex-col  rounded-lg bg-slate-200 shadow-2xl  lg:mt-20  md:max-w-3xl mx-auto mb-2 ">
          <div className="text-xl py-1 px-2 text-slate-600 ml-2">
            Create new Blood Donation POST.
          </div>
          <div className="bg-slate-300 p-4 flex flex-row rounded-lg h-full justify-center items-center mx-2 ">
            <div className="w-10 h-10">
              <img
                src={globalUser.avatar}
                alt="profile pic"
                className="w-full h-full object-cover rounded-full justify-center border-gray-400 border-2 p-1"
              />
            </div>

            <input
              className="ml-3   placeholder:italic placeholder:text-slate-600 block bg-white w-full border border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm cursor-pointer "
              autoComplete="off"
              placeholder="Create a notice!"
              type="text"
              name="search"
            />
          </div>

          <button className="bg-slate-400 w-2/3 mx-auto rounded  my-2 hover:scale-110 transition-transform duration-300 ease-in-out text-slate-100">
            Add a photo!
          </button>
        </div>
      </Link>

      {
        noticeData?.map((post , index)=>{
          if (post.typeOfThePost === "Video") {
            return <VideoPost  key={index} pst={post} />
          } else if(post.typeOfThePost === "Photo") {
            return <Post key={index} pst={post} />
          } else if(post.typeOfThePost === "onlyText") {
            return <OnlyTextPost key={index} pst={post} />
          }else{
            return
          }
        })
      }


      
    </div>
    </>
  )
}

export default BloodDonationPage
