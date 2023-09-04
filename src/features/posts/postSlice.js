import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

const initialState = {
  posts: [],
  isLoading: false,
  isSuccess: false,
  error: '',
}

const postSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {
    //
  },
  extraReducers(builder) {
    //
  },
})

export default postSlice.reducer
