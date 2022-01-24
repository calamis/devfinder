import { configureStore } from '@reduxjs/toolkit';

// import slice here
import githubUserSlice from '../features/githubusers/githubuserSlice';

export const store = configureStore({
  reducer: {
    users: githubUserSlice,
    // Define a top-level state field handle by reducer/slice
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
