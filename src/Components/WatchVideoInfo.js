import React, { useState } from "react";
import { formatCount } from "../Utils/constants";
import { BiLike } from "react-icons/bi";
import { PiShareFat } from "react-icons/pi";
import { FiCheckCircle } from "react-icons/fi";
import { BsFillEyeFill } from "react-icons/bs";
import { FaCalendarDay } from "react-icons/fa";
import { formatDistanceToNow } from "date-fns";
import CommentsContainer from "./comments/CommentsContainer";


const VideoInfo = ({ video }) => {
  const { snippet, statistics } = video;
  const { title, channelTitle, description, publishedAt } = snippet;
  const { viewCount, likeCount, commentCount } = statistics;
  const [showFullDescription, setShowFullDescription] = useState(false);
  const [subscribed, setSubscribed] = useState(false);
  const publishedDate = new Date(publishedAt);
  const timeAgo = formatDistanceToNow(publishedDate, { addSuffix: true });
  return (
    <>
    <div className="mt-3 w-[57rem]">
      <h2 className="text-xl font-semibold">{title}</h2>
      <div className="flex justify-between mt-2">
        <div className="flex items-center">
          <span className="font-semibold flex items-center">
            {channelTitle}
            <FiCheckCircle className="ml-2" />
          </span>
          <button
            className={`ml-5 rounded-2xl py-1 px-3 ${
              subscribed
                ? "bg-red-700 hover:bg-red-800"
                : "bg-blue-700 hover:bg-blue-800"
            }  font-medium text-white`}
            onClick={() => {
              setSubscribed(!subscribed);
            }}
          >
            {subscribed ? "Unsubscribe" : "Subscribe"}
          </button>
        </div>
        <div className="flex items-center">
          <button className="rounded-2xl py-1 px-3 bg-gray-200 hover:bg-gray-300 flex items-center font-medium">
            <BiLike className="mr-2" />
            {formatCount(likeCount)}
          </button>
          <button className="flex items-center ml-3 rounded-2xl py-1 px-3 bg-gray-200 hover:bg-gray-300 font-medium">
            <PiShareFat className="mr-2" />
            Share
          </button>
        </div>
      </div>
      <div
        className="rounded-lg bg-gray-100 hover:bg-gray-200 p-2 my-2 cursor-pointer"
        onClick={() => setShowFullDescription(!showFullDescription)}
      >
        <div className="flex items-center">
          <span className="mx-1">
            <BsFillEyeFill />
          </span>
          <span className="font-medium">{formatCount(viewCount)} views</span>
          <span className="mr-1 ml-3">
            <FaCalendarDay />
          </span>
          <span className="font-medium">{timeAgo}</span>
        </div>
        {description && (
          <p className="mt-2">
            {showFullDescription
              ? description
              : description.slice(0, 200) + "..."}
            <span className="font-medium ml-2">
              {showFullDescription ? "Show Less" : "Show More"}
            </span>
          </p>
        )}
      </div>
    </div>
    <CommentsContainer commentCount={commentCount}/>
    </>
  );
};

export default VideoInfo;