import React, { useEffect , useState } from 'react'
import axios from 'axios'
import CreatePost from './CreatePost'
import Post from './Post'
import VideoPost from './VideoPost'
import OnlyTextPost from './OnlyTextPost'

const Feed = () => {

  const [postsData, setPostsData] = useState([])
  const [page, setPage] = useState(1)


  const handleInfiniteScroll = ()=>{

    try {
      if((window.innerHeight + document.documentElement.scrollTop + 700)  + 1 >= document.documentElement.scrollHeight){
        setPage(prev=>prev + 1)
      }
    } catch (error) {
      console.log(error);
    }



  }



  useEffect(()=>{
    window.addEventListener('scroll', handleInfiniteScroll)
  },[])






  useEffect(() => {
    const fetchPosts = async () => {
      await axios
        .get(`${import.meta.env.VITE_REACT_APP_BACKEND_SERVER_URL}/client1/getposts?page=${page}&limit=2`)
        .then((res) => {
          setPostsData((prev)=> [...prev , ...res.data.paginatedPosts]);
          // console.log("fetched")
        })
        .catch((err) => {
          console.log("there was an error fetching the data.");
        });
    };
    fetchPosts();
  }, [page]);

  
  console.log(postsData);





  return (
    <>
    <div className="w-full bg-slate-500 px-4 ">

      <div className="w-full py-16 lg:hidden "></div>

      <CreatePost />


      {
        postsData?.map((post)=>{
          if (post.typeOfThePost === "Video") {
            return <VideoPost  key={post._id} post={post} />
          } else if(post.typeOfThePost === "Photo") {
            return <Post key={post._id} post={post} />
          } else if(post.typeOfThePost === "onlyText") {
            return <OnlyTextPost key={post._id} post={post} />
          }
        })
      }



      {/* <VideoPost/> */}

      {/* <Post/> */}
      
    </div>
    </>
  )
}

export default Feed