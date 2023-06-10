import {createSlice} from "@reduxjs/toolkit";


const initialState={
    currentSocialMedia:null,
    loading:false,
    error:false,
}

export const socialmediaSlice = createSlice({
    name: 'socialmedia',
    initialState,
    reducers: {
      fetchStart:(state)=>{
        state.loading=true
      },
      fetchSuccess:(state,action)=>{
        state.loading=false
        state.currentSocialMedia=action.payload;
      },
      fetchFailure:(state)=>{
        state.loading=false;
        state.error=true
      }
     
    },
  })


export const {fetchStart,fetchSuccess,fetchFailure}=socialmediaSlice.actions

export default socialmediaSlice.reducer;
