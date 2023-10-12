// store.ts
import { configureStore } from "@reduxjs/toolkit";
import RoleReducer from "@/features/role/roleSlice";
const store = configureStore({
  reducer: {
    role: RoleReducer,
  },
});

export { store };

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
