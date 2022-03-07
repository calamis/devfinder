import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { UsersState, ValidationErrors } from '../../utils/types';
import axios from 'axios';
import { AxiosError } from 'axios';

// Define a thunk that disaptches those action creators
export const fetchUserProfile = createAsyncThunk(
  'fetch/userProfile',
  async (query: string | undefined, { rejectWithValue }) => {
    try {
      const { data } = await axios.get(`https://api.github.com/users/${query}`);
      return data;
    } catch (err) {
      let error: AxiosError<ValidationErrors> = err; // cast the error for access
      if (!error?.response) {
        throw err;
      }
      return rejectWithValue(error?.response?.data);
    }
  },
);

export const fetchUsers = createAsyncThunk(
  'fetch/userProfile',
  async (query: string | undefined, { rejectWithValue }) => {
    try {
      const { data } = await axios.get(
        `https://api.github.com/search/users?q=${query}&page=1&per_page=9`,
      );
      return data;
    } catch (err) {
      let error: AxiosError<ValidationErrors> = err; // cast the error for access
      if (!error?.response) {
        throw err;
      }
      return rejectWithValue(error?.response?.data);
    }
  },
);

export const fetchUserRepos = createAsyncThunk(
  'fetch/userRepos',
  async (query: string | undefined, { rejectWithValue }) => {
    try {
      const { data } = await axios.get(
        `https://api.github.com/users/${query}/repos?per_page=10&sort=asc`,
      );
      return data;
    } catch (err) {
      let error: AxiosError<ValidationErrors> = err; // cast the error for access
      if (!error?.response) {
        throw err;
      }
      return rejectWithValue(error.response.data);
    }
  },
);

// initial State
const initialState = {
  error: null,
  loading: false,
} as unknown as UsersState;

// Create Slice that handle actions in your reducers
export const githubUserSlice = createSlice({
  // A name, used in action types:
  name: 'users',
  initialState,
  reducers: {},
  extraReducers: {
    // user Profile
    [fetchUsers.pending.type]: (state) => {
      state.loading = true;
    },
    [fetchUsers.fulfilled.type]: (state, action) => {
      state.loading = false;
      state.entities = action?.payload;
      state.error = undefined;
    },
    [fetchUsers.rejected.type]: (state, action) => {
      state.loading = false;
      state.entities = undefined;
      state.error = action?.payload;
    },
    // User Repo
    [fetchUserRepos.pending.type]: (state) => {
      state.loading = true;
    },
    [fetchUserRepos.fulfilled.type]: (state, action) => {
      state.loading = false;
      state.repos = action?.payload;
      state.error = undefined;
    },
    [fetchUserRepos.rejected.type]: (state, action) => {
      state.loading = false;
      state.repos = null;
      state.error = action?.payload;
    },
  },
});

export default githubUserSlice.reducer;
