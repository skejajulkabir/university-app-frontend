import React from 'react'
import CreatePost from './CreatePost'
import Post from './Post'
import VideoPost from './VideoPost'

const Feed = () => {
  return (
    <>
    <div className="w-full bg-slate-500 px-4 ">

      <div className="w-full py-16 lg:hidden "></div>

      <CreatePost />



      <VideoPost/>

      <Post/>
      <Post/>
      <Post/>
      <Post/>
      <Post/>
      <Post/>
      <Post/>
      <Post/>
      <Post/>
      <Post/>
      <Post/>
    </div>
    </>
  )
}

export default Feed