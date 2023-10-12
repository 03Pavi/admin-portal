import { createSlice } from "@reduxjs/toolkit";

import { type RootState } from "../../app/store";
import {
  createRole,
  deleteRole,
  type errorResponse,
  getRole,
  updateRole,
} from "./actionCreators";

export interface roleInterface {
  _id?: string;
  name: string;
  logo: string;
  description: string;
  status?: boolean;
}

export interface initialStateData {
  roles: roleInterface[];
  loading: boolean;
  error: errorResponse | null;
}

const initialState: initialStateData = {
  roles: [],
  loading: false,
  error: {},
};

export const roleSlice = createSlice({
  name: "role",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      // createInstitution type
      .addCase(createRole.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(createRole.fulfilled, (state, { payload }) => {
        const data = payload;
        if (data !== undefined) {
          state.roles.push(data);
        }
        state.loading = false;
        state.error = null;
      })
      .addCase(createRole.rejected, (state, { payload }: any) => {
        if (payload !== undefined) {
          state.error = payload;
        }
        state.loading = false;
      })

      // get institutions type
      .addCase(getRole.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getRole.fulfilled, (state, { payload }) => {
        const data = payload;
        if (data !== undefined) {
          state.roles = payload;
        }
        state.loading = false;
      })
      .addCase(getRole.rejected, (state, { payload }) => {
        if (payload !== undefined) {
          state.error = payload;
        }
        state.loading = false;
      })

      // delete institution type
      .addCase(deleteRole.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(deleteRole.fulfilled, (state, { payload }) => {
        state.roles = state.roles.filter((role) => role._id !== payload);
        state.loading = false;
      })
      .addCase(deleteRole.rejected, (state, { payload }) => {
        if (payload !== undefined) {
          state.error = payload;
        }
        state.loading = false;
      })

      // update institution
      .addCase(updateRole.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(updateRole.fulfilled, (state, { payload }) => {
        if (payload !== undefined) {
          state.roles = state.roles.map((role) => {
            if (role._id === payload._id) {
              return payload;
            } else {
              return role;
            }
          });
        }
        state.loading = false;
      })
      .addCase(updateRole.rejected, (state, { payload }) => {
        if (payload !== undefined) {
          state.error = payload;
        }
        state.loading = false;
      });
  },
});

// // eslint-disable-next-line no-empty-pattern
// export const { } = institutionsSlice.actions
export const roleSelector = (state: RootState) => state.role.roles;

export const TypeLoader = (state: RootState) => state.role.loading;
export const TypeError = (state: RootState) => state.role.error;

export default roleSlice.reducer;
