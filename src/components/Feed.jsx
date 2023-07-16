import React, { useEffect , useState } from 'react'
import axios from 'axios'
import CreatePost from './CreatePost'
import Post from './Post'
import VideoPost from './VideoPost'
import OnlyTextPost from './OnlyTextPost'

const Feed = () => {

  const [postsData, setPostsData] = useState([])

  useEffect(() => {
    const fetchPosts = async () => {
      await axios
        .get(`${import.meta.env.VITE_REACT_APP_BACKEND_SERVER_URL}/client1/getposts`)
        .then((res) => {
          setPostsData(res.data.posts);
        })
        .catch((err) => {
          console.log("there was an error fetching the data.");
        });
    };
    fetchPosts();
  }, []);
  
  console.log(postsData);





  return (
    <>
    <div className="w-full bg-slate-500 px-4 ">

      <div className="w-full py-16 lg:hidden "></div>

      <CreatePost />


      {
        postsData.map((post)=>{
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