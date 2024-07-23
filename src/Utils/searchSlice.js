import { createSlice } from "@reduxjs/toolkit";

const searchSlice = createSlice({
    name : "search",
    initialState : {
        searchText : "",
        cachedResults : {},
    },
    reducers : {
        setSearchedText : (state, action) => {
            state.searchText = action.payload
        },
        setCacheResults : (state, action) =>{
           return {...state, ...action.payload}
        }
    }
})

export const {setCacheResults, setSearchedText} = searchSlice.actions

export default searchSlice.reducer;