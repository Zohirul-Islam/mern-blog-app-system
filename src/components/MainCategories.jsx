import React from 'react'
import { Link } from 'react-router-dom'
import { CiSearch } from "react-icons/ci";
const MainCategories = () => {
  return (
    <div className='hidden md:flex items-center justify-center rounded-3xl bg-white xl:rounded-full p-4 shadow-lg gap-8'>
        {/* links */}
        <div className='flex-1 flex items-center justify-between flex-wrap'>
            <Link  className='bg-blue-800 text-white rounded-full py-2 px-4' to={'/posts'}>All posts</Link>
            <Link className='hover:bg-blue-50   rounded-full py-2 px-4' to={'/posts?cat=web-design'}>Web Design</Link>
            <Link className='hover:bg-blue-50 rounded-full py-2 px-4' to={'/posts?cat=devlopment'}>Devlopment</Link>
            <Link className='hover:bg-blue-50 rounded-full py-2 px-4' to={'/posts?cat=databases'}>Databases</Link>
            <Link className='hover:bg-blue-50 rounded-full py-2 px-4' to={'/posts?cat=seo'}>SearchEngine</Link>
            <Link className='hover:bg-blue-50 rounded-full py-2 px-4' to={'/posts?cat=marketing'}>marketing</Link>
        </div>
        <span className='text-xl font-medium'>|</span>
        {/* search */}
        <div className='bg-gray-100 p-2 flex items-center rounded-full gap-2'>
            <CiSearch className='text-xl font-bold' />
            <input className='outline-none bg-transparent' type="text" placeholder='Search a post here..' />
        </div>
    </div>
  )
}

export default MainCategories