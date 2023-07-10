import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  greetings: [],
  isLoading: true,
  error: null
}

const url = "api/messages"

export const getGreetingsAsync = createAsyncThunk(
  'greetings/Async',
  async() => {
    try{
      const res = await fetch(res)
      const data = await res.json()
      return data
    }catch(e){
      return e.message
    }
  }
)

const greetingSlice = createSlice({
  name: 'greetings',
  initialState,
  extraReducers(builder){
    builder.addCase(getGreetingsAsync.pending, (state)=> ({
      ...state,
      isLoading: true
    })).addCase(getGreetingsAsync.fulfilled, (state, action)=> {
      const greetingList = action.payload.map((greeting)=> ({
        id: greeting.id,
        text: greeting.text
      }))
      return {
        ...state,
        greetings: greetingList,
        isLoading: false
      }
    }).addCase(getGreetingsAsync.rejected, (state, action)=> ({
      ...state,
      isLoading: false,
      error: action.error.message
    }))
  }
})

export default greetingSlice.reducer