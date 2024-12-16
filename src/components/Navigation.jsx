import React from 'react'

const Navigation = () => {
  return (
    <div className='sticky hidden xl:flex items-start justify-end flex-1'>
      <ul className='sticky top-10 flex w-4/6 flex-col gap-3 rounded-3xl border bg-white p-5'>
        <li className='rounded-full p-3 transition colors duration-200 hover:bg-gray-100'>
          <a href='#' className='flex items-center justify-start gap-2 text-xl hover:text-blue-500'>
            
            Home</a>
        </li>

        <li className='rounded-full p-3 transition colors duration-200 hover:bg-gray-100'>
          <a href='#' className='flex items-center justify-start gap-2 text-xl hover:text-blue-500'>
            
            Explore</a>
        </li>

        <li className='rounded-full p-3 transition colors duration-200 hover:bg-gray-100'>
          <a href='#' className='flex items-center justify-start gap-2 text-xl hover:text-blue-500'>
            
            Your Profile</a>
        </li>

        <li className='rounded-full p-3 transition colors duration-200 hover:bg-gray-100'>
          <a href='#' className='flex items-center justify-start gap-2 text-xl hover:text-blue-500'>
            
            Groups</a>
        </li>

        <li className='rounded-full p-3 transition colors duration-200 hover:bg-gray-100'>
          <a href='#' className='flex items-center justify-start gap-2 text-xl hover:text-blue-500'>
            
            Notifications</a>
        </li>

        <li className='rounded-full p-3 transition colors duration-200 hover:bg-gray-100'>
          <a href='#' className='flex items-center justify-start gap-2 text-xl hover:text-blue-500'>
            
            Saved</a>
        </li>

        <li className='rounded-full p-3 transition colors duration-200 hover:bg-gray-100'>
          <a href='#' className='flex items-center justify-start gap-2 text-xl hover:text-blue-500'>
            
            Settings</a>
        </li>

        <li className='rounded-full p-3 transition colors duration-200 hover:bg-gray-100'>
          <a href='#' className='flex items-center justify-start gap-2 text-xl hover:text-blue-500'>
            
            Logout</a>
        </li>
      </ul>
    </div>
  )
}

export default Navigation