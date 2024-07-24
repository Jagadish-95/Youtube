import React, { useRef, useState } from 'react'
import { BiSolidChevronLeft, BiSolidChevronRight } from "react-icons/bi";
import { buttonList } from '../Utils/constants';

const ButtonList = () => {
  const scrollRefContainer = useRef(null)
  const [isLeftVisible, setIsLeftVisible] = useState(false)

  const scrollHorizontally = (direction) => {
    direction === "right"
      ? (scrollRefContainer.current.scrollLeft += 100)
      : (scrollRefContainer.current.scrollLeft -= 100);
    if (scrollRefContainer.current.scrollLeft > 0) {
      setIsLeftVisible(true);
    } else {
      setIsLeftVisible(false);
    }
  };
  return (
    <div className='flex '>
       {isLeftVisible && (
        <span
          className="p-1 bg-zinc-500 hover:bg-blue-800 text-white text-xl rounded-full cursor-pointer mr-1"
          onClick={() => {
            scrollHorizontally("left");
          }}
        >
          <BiSolidChevronLeft />
        </span>
      )}
      <div
        className="flex overflow-x-auto "
        ref={scrollRefContainer}
      >
        {buttonList.map((btn, i) => (
          <button className='px-3 py-1 mx-2 rounded-lg scroll-button hover:bg-gray-300' key={i}>{btn}</button>
        ))}
      </div>
      <span
        className="p-1 bg-zinc-500 hover:bg-blue-800 text-white text-xl rounded-full cursor-pointer ml-1"
        onClick={() => {
          scrollHorizontally("right");
        }}
      >
        <BiSolidChevronRight />
      </span>
    
    </div>
  )
}

export default ButtonList
