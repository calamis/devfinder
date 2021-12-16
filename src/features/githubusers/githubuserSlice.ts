import { createSlice, createAsyncThunk, createSelector } from '@reduxjs/toolkit'
import { RootState } from '../../app/store';
import { IUserDetails, UsersState, ValidationErrors, fetchUserResponse } from '../../utils/types'
import axios from 'axios'
import { AxiosError } from 'axios'

// declare type
// type userState = IGithubUsers

// Define a thunk that disaptches those action creators
export const fetchUsers = createAsyncThunk<IUserDetails, (query: string) => Partial<IUserDetails>, 
  {
    rejectValue: ValidationErrors
  }>(
  "users/usersListLoading", async (query, { rejectWithValue }) => {
    try {
      const response = await axios.get(`https://api.github.com/users/${query}`)
      return response.data;
    } catch (err) {
      let error: AxiosError<ValidationErrors> = err // cast the error for access
      if (!error.response) {
        throw err
      }
      return rejectWithValue(error.response.data)
    }
  }
);

// initial State
const initialState = {
  data: {},
  error: null,
  loading: 'idle'
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
    [fetchUsers.pending.type]: (state, action) => {
      if(state.loading === 'idle') {
        state.loading = 'pending'
        state.entities = action.payload
      }
    },
    [fetchUsers.fulfilled.type]: (state, action) => {
      state.entities = action.payload
    },

    [fetchUsers.rejected.type]: (state, action) => {
      if (action.payload) {
        state.error = action.payload.errorMessage
      } else {
        state.error = action.error.message
      }
    }
  }
});


// export const selectAllUsers = state => state.user
// Selector

export default githubUserSlice.reducer