import { createSlice, createAsyncThunk, createSelector } from '@reduxjs/toolkit'
import { RootState } from '../../app/store';
// import { IUserDetails, IGithubUsers } from '../../utils/types'
import axios from 'axios'

// declare type
// type userState = IGithubUsers

// Define a thunk that disaptches those action creators
export const fetchUsers = createAsyncThunk("users/usersListLoading", async (query: string) => {
    const response = await axios.get(`https://api.github.com/users/${query}`)
    return response.data;
  }
);

// initial State
const initialState = {
    data: [],
    status: 'idle',
    error: {}
}

// Create Slice that handle actions in your reducers
export const githubUserSlice = createSlice({
  // A name, used in action types:
  name: 'users',
  initialState,
   // An object of "case reducers". 
  // Key names will be used to generate actions:
  reducers: {},
  extraReducers: {
    [fetchUsers.pending.type]: (state, action) => {
      state = {
        status: "loading",
        data: [],
        error: {}
      }
    },
    [fetchUsers.fulfilled.type]: (state, action) => {
      state = {
        status: "loaded",
        data: state.data = action.payload,
        error: {}
      }
    },
    [fetchUsers.rejected.type]: (state, action) => {
      state = {
        status: "error",
        data: [],
        error: action.payload
      }
    }
  }
});


// export const selectAllUsers = state => state.user
// Selector

export default githubUserSlice.reducer