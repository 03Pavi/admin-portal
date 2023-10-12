// store.ts
import { configureStore } from '@reduxjs/toolkit';
import counterReducer, { CounterState } from '../features/counter/counter';

const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
});

export { store };

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
