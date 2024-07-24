import React from 'react'
import { YOUTUBE_VIDEOS_API, YOUTUBE_SEARCH_API } from '../Utils/constants'
import Video, { HocComp } from './Video';
import { Link } from 'react-router-dom';
import VideoShimmer from '../shimmer/VideoShimmer';
import useFetch from '../hooks/useFetch';
import { useSelector } from 'react-redux';


const VideoContainer = () => {
  const searchText = useSelector(store => store.searchText)
  
  const url = searchText ? YOUTUBE_SEARCH_API + searchText : YOUTUBE_VIDEOS_API
  const { data: data, isLoading} = useFetch(url)
 
 
  if (isLoading)
    return (
  <>
      <div className="flex flex-wrap" id="videosContainer">
        {Array.from({ length: 12 }).map((_, index) => (
          <VideoShimmer key={index} />
        ))}
      </div>
      
       </>
    );

  if(data)
     return (
    <div className='flex flex-wrap'>
     { data &&<HocComp info={data[0]}/>}
      {data.map(video =><Link key={video?.id} to={"/watch?v=" + video.id }><Video   info={video} /></Link> )}
     
    
    </div>
  )
}

export default VideoContainer
