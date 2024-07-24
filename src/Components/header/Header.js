import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector} from 'react-redux'
import { toggleMenu } from '../../Utils/appSlice';
import { YOUTUBE_SUGGESTION_API } from '../../Utils/constants';
import { FiSearch } from 'react-icons/fi';
import { setCacheResults, setSearchedText } from '../../Utils/searchSlice';
import { useNavigate } from 'react-router-dom';



const Header = () => {
 
  const [searchQuery, setSearchQuery] = useState("");
  const [showSuggestions, setShowSuggestions] = useState(false)
  const [suggestions, setSuggestions] = useState()
   

  const cachedResults = useSelector(store=> store.search)


 

  
  // console.log(searchQuery)
  const navigate = useNavigate()
  const dispatch = useDispatch();

  const toggleApp = () => {
    dispatch(toggleMenu());
  };

  const getSearchFunction = async()=>{
    
    const data = await fetch(YOUTUBE_SUGGESTION_API + searchQuery);
    const result = await data.json()
    console.log(result)
    setShowSuggestions(result[1])

    dispatch(setCacheResults({[searchQuery] : result[1] }))
    window.scrollTo(0,0)
    
    
  }

  useEffect(()=>{
    const timer = setTimeout(()=>{
    if(cachedResults[searchQuery]){
      setSuggestions(cachedResults[searchQuery])
    } else { 
    
        getSearchFunction()
    }
      },200)
    
      return () =>{
        clearTimeout(timer)
      }
  },[searchQuery])

  const handleClickSuggest = (suggest) => {
    navigate("/")
    setSearchQuery(suggest)
    dispatch(setSearchedText(suggest))
    setShowSuggestions(false)
  }



  const handleEnter = (e) => {
    if(e.key === "Enter" && searchQuery) {
      navigate('/')
      dispatch(setSearchedText(searchQuery))
      setShowSuggestions(false)

    }
  }

 

  return (
    <div className=' grid grid-flow-col shadow-lg  p-2 '>
      
      <div className="flex col-span-1">
        <img
          className="h-8 cursor-pointer"
          alt="hamburger_icon"
          src="https://cdn.icon-icons.com/icons2/2596/PNG/512/hamburger_button_menu_icon_155296.png"
          onClick={toggleApp}
        />
        <img
          className="h-8 ml-5 cursor-pointer"
          alt="youtube_logo"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/YouTube_Logo_2017.svg/1200px-YouTube_Logo_2017.svg.png"
          onClick={() => {
            navigate("/");
            toggleApp();
          }}
        />
      </div>
        
    <div className=' mx-auto col-span-10 w-1/2 p-2  ' >
       <div className='flex'>
        <input className='border border-gray-300 w-full rounded-l-full px-5 py-2 '
        value={searchQuery}
        onChange={(e)=>setSearchQuery(e.target.value)}
         placeholder=" Search" 
         type='text'
         onFocus={()=>setShowSuggestions(true)}
         onBlur={()=>setShowSuggestions(false)}
         onKeyDown={handleEnter}
         />

        <button  className=' border border-gray-300 rounded-r-full px-5 bg-gray-100'>
        <img className='h-7'
          alt="search_icon"
          src="https://static.thenounproject.com/png/3184147-200.png"
          onClick={()=>{
            dispatch(setSearchedText(searchQuery))
            setShowSuggestions(false)
          }}
        />
        </button>
        <div>
      { showSuggestions && <div className='fixed px-5 py-2  bg-white border-gray-400  w-[31.5rem] rounded-lg'>
        <ul>
          {suggestions?.map(s=> <li key={s} className=' flex  hover:bg-gray-100'>
            <FiSearch className='m-2'/>  {s}</li>)} 
        </ul>
          </div>}
    </div>
        </div>
      
    </div>
    <div className='col-span-1' >
        <img className='h-8 m-2' alt='user icon' src='https://cdn-icons-png.flaticon.com/512/149/149071.png'/>
    </div>
   
    </div>
  )
}

export default Header
