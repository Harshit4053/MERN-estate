import { configureStore } from '@reduxjs/toolkit';
import userReducer from './userSlice';  // Import your user reducer

export const store = configureStore({
  reducer: {
    user: userReducer,  // Register the user reducer here
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,  // Disable serializable check if needed
    }),
});

// Optional TypeScript types (uncomment if you use TS)
// export type RootState = ReturnType<typeof store.getState>
// export type AppDispatch = typeof store.dispatch
