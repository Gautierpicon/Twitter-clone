import React from 'react'
import SharePost from './SharePost'
import Posts from './Posts'

const Feed = () => {
  return (
  <div className='flex flex-[2] flex-col items-center justify-center gap-3 px-3'>
    <SharePost />
    <Posts />
    <Posts />
    <Posts />
    <Posts />
    <Posts />
    <Posts />
    <Posts />
    <Posts /> 
  </div>
  )
}

export default Feed