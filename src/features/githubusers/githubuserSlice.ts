import { createSlice, PayloadAction,  createAsyncThunk, createSelector } from '@reduxjs/toolkit'
import { RootState } from '../../app/store';
import { IUserDetails, UsersState, ValidationErrors, fetchUserResponse } from '../../utils/types'
import axios from 'axios'
import { AxiosError } from 'axios'

// declare type
// type userState = IGithubUsers

// Define a thunk that disaptches those action creators
export const fetchUserProfile = createAsyncThunk(
  "fetch/userProfile", 
  async (query: string | undefined, { rejectWithValue }) => {
    try {
      const { data } = await axios.get(`https://api.github.com/users/${query}`)
      // const {data} = await axios.get(`https://api.github.com/users/${query}&client_id=${process.env.CLIENT_ID}&client_secret=${process.env.CLIENT_SECRET}`) 
      return data;
    } catch (err) {
      let error: AxiosError<ValidationErrors> = err // cast the error for access
      if (!error?.response) {
        throw err
      }
      return rejectWithValue(error?.response?.data)
    }
  }
);

// export const fetchUserRepos = createAsyncThunk(
//   "fetch/userRepos", 
//   async (query: string, {rejectWithValue}) => {
//     try {
//       const { data } = await axios.get(`https://api.github.com/users/${query}/repos?per_page=10&sort=asc`)
//       return data;
//     } catch (err) {
//       let error: AxiosError<ValidationErrors> = err // cast the error for access
//       if (!error?.response) {
//         throw err
//       }
//       return rejectWithValue(error.response.data)
//     }
//   }
// );

// initial State
const initialState = {
  error: null,
  loading: false
} as unknown as UsersState

// Create Slice that handle actions in your reducers
export const githubUserSlice = createSlice({
  // A name, used in action types:
  name: 'users',
  initialState,
   // An object of "case reducers". 
  // Key names will be used to generate actions:
  reducers: {},
  extraReducers: {
    // user Profile
    [fetchUserProfile.pending.type]: (state) => {
      state.loading = true
    },
    [fetchUserProfile.fulfilled.type]: (state, action) => {
      state.loading = false
      state.entities = action?.payload
      state.error = undefined
    },
    [fetchUserProfile.rejected.type]: (state, action) => {
      state.loading = false
      state.entities = undefined
      state.error = action?.payload
    }
    // User Repo
    // [fetchUserRepos.pending.type]: (state) => {
    //   state.loading = true
    // },
    // [fetchUserRepos.fulfilled.type]: (state, action) => {
    //   state.loading = false
    //   state.entities = action?.payload
    //   state.error = undefined
    // },
    // [fetchUserRepos.rejected.type]: (state, action) => {
    //   state.loading = false
    //   state.entities = undefined
    //   state.error = action?.payload
    // }
  }
});

export default githubUserSlice.reducer