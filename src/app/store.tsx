// store.ts
import { configureStore } from "@reduxjs/toolkit";
import counterSlice from '@/features/couter';
const store = configureStore({
  reducer: {
    role: counterSlice,
  },
});

export { store };

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
