import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import postService from './postService'

const initialState = {
  posts: [],
  isLoading: false,
  isError: false,
  isSuccess: false,
}

export const createPost = createAsyncThunk(
  'posts/create',
  async (post, thunkAPI) => {
    try {
      return await postService.createPost(post)
    } catch (error) {
      return thunkAPI.rejectWithValue(error)
    }
  }
)

export const getPostList = createAsyncThunk(
  'posts/getList',
  async (_, thunkAPI) => {
    try {
      return await postService.getPostList()
    } catch (error) {
      return thunkAPI.rejectWithValue(error)
    }
  }
)

export const updatePost = createAsyncThunk(
  'posts/update',
  async (post, thunkAPI) => {
    try {
      return await postService.updatePost(post)
    } catch (error) {
      return thunkAPI.rejectWithValue(error)
    }
  }
)

export const deletePost = createAsyncThunk(
  'posts/delete',
  async (id, thunkAPI) => {
    try {
      return await postService.deletePost(id)
    } catch (error) {
      return thunkAPI.rejectWithValue(error)
    }
  }
)

const postSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {
    reset: (state) => initialState,
  },
  extraReducers(builder) {
    builder
      .addCase(createPost.pending, (state) => {
        state.isLoading = true
        state.isSuccess = false
      })
      .addCase(createPost.fulfilled, (state, action) => {
        state.isLoading = false
        state.isSuccess = true
        state.posts = [action.payload, ...state.posts]
      })
      .addCase(createPost.rejected, (state) => {
        state.isLoading = false
        state.isSuccess = false
        state.isError = true
      })
      .addCase(getPostList.pending, (state) => {
        state.isLoading = true
        state.isSuccess = false
      })
      .addCase(getPostList.fulfilled, (state, action) => {
        state.isLoading = false
        state.isSuccess = false
        state.posts = [...action.payload].sort((a, b) => b.id - a.id)
      })
      .addCase(getPostList.rejected, (state) => {
        state.isLoading = false
        state.isSuccess = false
        state.isError = true
      })
      .addCase(updatePost.pending, (state) => {
        state.isLoading = true
        state.isSuccess = false
      })
      .addCase(updatePost.fulfilled, (state, action) => {
        state.isLoading = false
        state.isSuccess = true
        state.posts = state.posts.map((post) =>
          post.id === action.payload.id ? action.payload : post
        )
      })
      .addCase(updatePost.rejected, (state) => {
        state.isLoading = false
        state.isSuccess = false
        state.isError = true
      })
      .addCase(deletePost.pending, (state) => {
        state.isLoading = true
        state.isSuccess = false
      })
      .addCase(deletePost.fulfilled, (state, action) => {
        state.isLoading = false
        state.isSuccess = true
        state.posts = state.posts.filter((post) => post.id !== action.payload)
      })
      .addCase(deletePost.rejected, (state) => {
        state.isLoading = false
        state.isSuccess = false
        state.isError = true
      })
  },
})

export const { reset } = postSlice.actions

export default postSlice.reducer

export const getPostById = (state, id) =>
  state.post.posts.find((post) => post.id === id)
