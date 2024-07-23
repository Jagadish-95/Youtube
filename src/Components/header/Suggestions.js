import React from 'react'
import { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { YOUTUBE_SUGGESTION_API } from '../../Utils/constants';
import { FiSearch } from 'react-icons/fi';
import { setCacheResults, setSearchedText } from '../../Utils/searchSlice';


const Suggestions = ({searchQuery, setSearchQuery, showSuggestions, setShowSuggestions}) => {
    const [suggestions, setSuggestions] = useState()
    const dispatch = useDispatch()
    const navigate = useNavigate()

  const cachedResults = useSelector(store=> store.search)


  const getSearchFunction = async()=>{
    // console.log("API -:" +  searchQuery)
    const data = await fetch(YOUTUBE_SUGGESTION_API + searchQuery);
    const result = await data.json()
    console.log(result)
    setShowSuggestions(result[1])

    dispatch(setCacheResults({[searchQuery] : result[1] }))
    window.scrollTo(0,0)
    // console.log(result)
    
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

 
  return (
    <div>
      {setSuggestions?.length > 0 && showSuggestions && <div className='fixed px-5 py-2  bg-white border-gray-400  w-[31.5rem] rounded-lg'>
        <ul>
          {suggestions?.map(s=> <li key={s} className=' flex  hover:bg-gray-100' onClick={handleClickSuggest()}>
            <FiSearch className='m-2'/>  {s}</li>)} 
        </ul>
          </div>}
    </div>
  )
}

export default Suggestions
