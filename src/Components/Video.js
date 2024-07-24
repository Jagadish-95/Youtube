import React from 'react'
import { formatCount } from '../Utils/constants';
import { useSelector } from 'react-redux';

const Video = ({info}) => {
  const {isMenuOpen} = useSelector(store=>store.app)

    
    const {snippet, statistics} = info;
    const {title, channelTitle, thumbnails} = snippet;
    const {viewCount} = statistics
   
  return (
    <div className={`m-3 pb-2 ${isMenuOpen ? "w-80" : "w-[25rem]"} group`}>
      <img alt='video' className='rounded-lg' src={thumbnails?.medium?.url}/>
      <ul>
     
     <li className='py-1 font-bold'>  {title.length > 50 ? title.slice(0, 100) + "..." : title}</li>
     <li className='font-semibold'> {channelTitle}</li>
     <li>{formatCount(Number(viewCount)) } views</li>
     
      </ul>
     
    </div>
  )
}

export const HocComp = ({info})=>{
  return <div className='border border-red-600'><Video info={info}/></div>
}

export default Video
