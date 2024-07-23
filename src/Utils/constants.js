const GOOGLE_API_KEY = process.env.REACT_APP_API_KEY;

export const YOUTUBE_VIDEOS_API = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=IN&key= + 
${GOOGLE_API_KEY}`

export const YOUTUBE_GET_SINGLE_VIDEO_API = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&key=${GOOGLE_API_KEY}&id=`;

export const YOUTUBE_SUGGESTION_API =`http://suggestqueries.google.com/complete/search?client=firefox&ds=yt&key=${GOOGLE_API_KEY}&q=`

export const YOUTUBE_SEARCH_API = `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&key=${GOOGLE_API_KEY}&q=`;

export const formatCount = (views) => {
  if (views >= 100000) {
    return parseFloat((views / 100000).toFixed(1)) + " lakh";
  } else if (views > 1000) {
    return (views / 1000).toFixed(0) + "K";
  }
  return views;
};

export const buttonList = [
  "All",
  "TED",
  "Motivation",
  "Latest",
  "Funny",
  "Cricket",
  "React",
  "Music",
  "Cooking",
  "Nature",
  "Gaming",
  "Sports",
  "Romantic",
  "Technology",
  
];

export const MESSAGE_COUNT = 15;