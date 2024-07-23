import React from 'react'
import { YOUTUBE_VIDEOS_API, YOUTUBE_SEARCH_API } from '../Utils/constants'
import Video, { HocComp } from './Video';
import { Link } from 'react-router-dom';
import VideoShimmer from '../shimmer/VideoShimmer';
import useFetch from '../hooks/useFetch';
import { useSelector } from 'react-redux';


const VideoContainer = () => {
  const searchText = useSelector(store => store.searchText)
  // const [Videos, setVideos] = useState();
  const url = searchText ? YOUTUBE_SEARCH_API + searchText : YOUTUBE_VIDEOS_API
  const { data: data, isLoading} = useFetch(url)
 
  // const getVideo = async()=>{
  //   const data = await fetch(YOUTUBE_VIDEOS_API);
  //   const json = await data.json()
  //   // console.log(json)
  //   setVideos(json?.items)
  // }

  // useEffect(()=>{
  //     getVideo()
  // }, [])

  if (isLoading)
    return (
  <>
      <div className="flex flex-wrap" id="videosContainer">
        {Array.from({ length: 12 }).map((_, index) => (
          <VideoShimmer key={index} />
        ))}
      </div>
       {/* <div className="flex flex-wrap" id="videosContainer">
       {data?.slice(firstIndex, lastIndex).map((video) => (
         <VideoCard
           key={video.id}
           info={video}
           id={typeof video.id !== "object" ? video.id : video.id.videoId}
         />
       ))}
       </div> */}
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
