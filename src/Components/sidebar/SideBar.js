import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

const SideBar = () => {
  const toggleMenu = useSelector(store => store.app.isMenuOpen)
//  early return pattern
  if(!toggleMenu) return null;
 
 return (
    

      
      <div className='p-5 shadow-lg w-48'>
        <ul>
        <li><Link to="/">Home</Link></li>
        <li>Shorts</li>
        <li>Playlist</li>
        <li>Watch Later</li>
        <li>Liked Videos</li>
        </ul>
        <hr className='my-3'/>
      <h1 className='font-bold pt-5'>Subscriptions</h1>
      <ul>
     <li>News</li>
     <li>Music</li>
     <li>Sports</li>
     <li>Latest</li>
     <li>Trending</li>
     <hr className='my-3'/>
      </ul>
      <h1 className='font-bold pt-5'>Subscriptions</h1>
      <ul>
     <li>News</li>
     <li>Music</li>
     <li>Sports</li>
     <li>Latest</li>
     <li>Trending</li>
      </ul>
      </div>
      
    
  )

}

export default SideBar
