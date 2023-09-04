import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import adminService from './adminService'

const initialState = {
  admins: [],
  isLoading: false,
  isError: false,
  isSuccess: false,
}

export const createAdmin = createAsyncThunk(
  'admins/create',
  async (admin, thunkAPI) => {
    try {
      return await adminService.createAdmin(admin)
    } catch (error) {
      return thunkAPI.rejectWithValue(error)
    }
  }
)

export const getAdminList = createAsyncThunk(
  'admins/getList',
  async (_, thunkAPI) => {
    try {
      return await adminService.getAdminList()
    } catch (error) {
      return thunkAPI.rejectWithValue(error)
    }
  }
)

export const updateAdmin = createAsyncThunk(
  'admins/update',
  async (admin, thunkAPI) => {
    try {
      return await adminService.updateAdmin(admin)
    } catch (error) {
      return thunkAPI.rejectWithValue(error)
    }
  }
)

export const deleteAdmin = createAsyncThunk(
  'admins/delete',
  async (id, thunkAPI) => {
    try {
      return await adminService.deleteAdmin(id)
    } catch (error) {
      return thunkAPI.rejectWithValue(error)
    }
  }
)

const adminSlice = createSlice({
  name: 'admins',
  initialState,
  reducers: {
    reset: (state) => initialState,
  },
  extraReducers(builder) {
    builder
      .addCase(createAdmin.pending, (state) => {
        state.isLoading = true
        state.isSuccess = false
      })
      .addCase(createAdmin.fulfilled, (state, action) => {
        state.isLoading = false
        state.isSuccess = true
        state.admins = [action.payload, ...state.admins]
      })
      .addCase(createAdmin.rejected, (state) => {
        state.isLoading = false
        state.isSuccess = false
        state.isError = true
      })
      .addCase(getAdminList.pending, (state) => {
        state.isLoading = true
        state.isSuccess = false
      })
      .addCase(getAdminList.fulfilled, (state, action) => {
        state.isLoading = false
        state.isSuccess = false
        state.admins = [...action.payload].sort((a, b) => b.id - a.id)
      })
      .addCase(getAdminList.rejected, (state) => {
        state.isLoading = false
        state.isSuccess = false
        state.isError = true
      })
      .addCase(updateAdmin.pending, (state) => {
        state.isLoading = true
        state.isSuccess = false
      })
      .addCase(updateAdmin.fulfilled, (state, action) => {
        state.isLoading = false
        state.isSuccess = true
        state.admins = state.admins.map((admin) =>
          admin.id === action.payload.id ? action.payload : admin
        )
      })
      .addCase(updateAdmin.rejected, (state) => {
        state.isLoading = false
        state.isSuccess = false
        state.isError = true
      })
      .addCase(deleteAdmin.pending, (state) => {
        state.isLoading = true
        state.isSuccess = false
      })
      .addCase(deleteAdmin.fulfilled, (state, action) => {
        state.isLoading = false
        state.isSuccess = true
        state.admins = state.admins.filter(
          (admin) => admin.id !== action.payload
        )
      })
      .addCase(deleteAdmin.rejected, (state) => {
        state.isLoading = false
        state.isSuccess = false
        state.isError = true
      })
  },
})

export const { reset } = adminSlice.actions

export default adminSlice.reducer
