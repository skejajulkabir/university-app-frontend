import React from 'react'
import CreatePost from './CreatePost'
import Post from './Post'
import VideoPost from './VideoPost'

const Feed = () => {
  return (
    <>
    <div className="w-full bg-slate-500 px-4">

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