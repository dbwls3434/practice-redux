import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import userService from './userService'

const initialState = {
  user: null,
  users: [],
  isLoading: false,
  isError: false,
  isSuccess: false,
}

export const createUser = createAsyncThunk(
  'users/create',
  async (user, thunkAPI) => {
    try {
      return await userService.createUser(user)
    } catch (error) {
      return thunkAPI.rejectWithValue(error)
    }
  }
)

export const getUserList = createAsyncThunk(
  'users/getList',
  async (_, thunkAPI) => {
    try {
      return await userService.getUserList()
    } catch (error) {
      return thunkAPI.rejectWithValue(error)
    }
  }
)

export const updateUser = createAsyncThunk(
  'posts/update',
  async (user, thunkAPI) => {
    try {
      return await userService.updateUser(user)
    } catch (error) {
      return thunkAPI.rejectWithValue(error)
    }
  }
)

export const deleteUser = createAsyncThunk(
  'posts/delete',
  async (id, thunkAPI) => {
    try {
      return await userService.deleteUser(id)
    } catch (error) {
      return thunkAPI.rejectWithValue(error)
    }
  }
)

const userSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    reset: (state) => initialState,
    setUser: (state, action) => {
      state.user = action.payload
    },
  },
  extraReducers(builder) {
    builder
      .addCase(createUser.pending, (state) => {
        state.isLoading = true
        state.isSuccess = false
      })
      .addCase(createUser.fulfilled, (state, action) => {
        state.isLoading = false
        state.isSuccess = true
        state.users = [action.payload, ...state.users]
      })
      .addCase(createUser.rejected, (state) => {
        state.isLoading = false
        state.isSuccess = false
        state.isError = true
      })
      .addCase(getUserList.pending, (state) => {
        state.isLoading = true
        state.isSuccess = false
      })
      .addCase(getUserList.fulfilled, (state, action) => {
        state.isLoading = false
        state.isSuccess = false
        state.users = [...action.payload].sort((a, b) => b.id - a.id)
      })
      .addCase(getUserList.rejected, (state) => {
        state.isLoading = false
        state.isSuccess = false
        state.isError = true
      })
      .addCase(updateUser.pending, (state) => {
        state.isLoading = true
        state.isSuccess = false
      })
      .addCase(updateUser.fulfilled, (state, action) => {
        state.isLoading = false
        state.isSuccess = true
        state.users = state.users.map((user) =>
          user.id === action.payload.id ? action.payload : user
        )
        state.user = null
      })
      .addCase(updateUser.rejected, (state) => {
        state.isLoading = false
        state.isSuccess = false
        state.isError = true
      })
      .addCase(deleteUser.pending, (state) => {
        state.isLoading = true
        state.isSuccess = false
      })
      .addCase(deleteUser.fulfilled, (state, action) => {
        state.isLoading = false
        state.isSuccess = true
        state.users = state.users.filter((user) => user.id !== action.payload)
      })
      .addCase(deleteUser.rejected, (state) => {
        state.isLoading = false
        state.isSuccess = false
        state.isError = true
      })
  },
})

export const { reset, setUser } = userSlice.actions

export default userSlice.reducer
