/* eslint-disable @typescript-eslint/no-unused-vars */
import { createAsyncThunk } from "@reduxjs/toolkit";

import {
  createRoleAPI,
  deleteRoleAPI,
  getRoleAPI,
  updateRoleAPI,
} from "@/services/role.services";

import { ACTION_TYPE } from "./actionTypes";
import { type roleInterface } from "./roleSlice";
export interface errorResponse {
  statusCode?: number;
  message?: any;
}

let error: errorResponse = {
  statusCode: 404,
  message: "Network error, Please try again",
};

// create institution
export const createRole = createAsyncThunk(
  ACTION_TYPE.CREATE_ROLE,
  async (roleData: roleInterface, thunkApi) => {
    try {
      const response = await createRoleAPI(roleData);
      if (response.status === 201) {
        return response.data.roleData;
      }
    } catch (err: any) {
      if (err.response) {
        error = err.response.data;
      }
      return thunkApi.rejectWithValue({
        statusCode: error.statusCode,
        message: error.message,
      });
    }
  }
);

// get all institutions

export const getRole = createAsyncThunk(
  ACTION_TYPE.GET_ROLE,
  async (_, thunkApi) => {
    try {
      const response = await getRoleAPI();
      if (response.status === 201 || response.status === 200) {
        return response.data.institutionTypesData;
      }
    } catch (err: any) {
      if (err.response) {
        error = err.response.data;
      }
      return thunkApi.rejectWithValue({
        statusCode: error.statusCode,
        message: error.message,
      });
    }
  }
);

// delete institution

export const deleteRole = createAsyncThunk(
  ACTION_TYPE.DELETE_ROLE,
  async (id: string, thunkApi) => {
    try {
      const response = await deleteRoleAPI(id);
      if (response.status === 201 || response.status === 200) {
        return id;
      }
    } catch (err: any) {
      if (err.response) {
        error = err.response.data;
      }
      return thunkApi.rejectWithValue({
        statusCode: error.statusCode,
        message: error.message,
      });
    }
  }
);

// update institution

export const updateRole = createAsyncThunk(
  ACTION_TYPE.UPDATE_ROLE,
  async (roleData: roleInterface, thunkApi) => {
    try {
      const { _id, ...other } = roleData;
      if (_id !== undefined) {
        const response = await updateRoleAPI(other, _id);
        if (response.status === 201 || response.status === 200) {
          return response.data.roleData;
        }
      }
    } catch (err: any) {
      if (err.response) {
        error = err.response.data;
      }
      return thunkApi.rejectWithValue({
        statusCode: error.statusCode,
        message: error.message,
      });
    }
  }
);
