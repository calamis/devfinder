import { configureStore } from '@reduxjs/toolkit';

// slice here
import { githubUserSlice } from '../features/githubusers/githubuserSlice';

export const store = configureStore({
  reducer: {
    users: githubUserSlice.reducer
    // Define a top-level state field handle by reducer/slice
    // users: githubUsers //githubUserSlice.reducer,
  }
})

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState> 