import { axiosApi } from "@/config";

export interface permissionInterface {
  module_ID: string;
  role_ID: string;
  router_ID: string;
  status?: boolean;
  create: boolean;
  read: boolean;
  update: boolean;
  delete: boolean;
}

// const PERMISSION_PATH = "/permission";
const PERMISSION_PATH = "https://dummyjson.com/users";

export const createPermissionAPI = async (payload: permissionInterface) =>
  axiosApi.post(PERMISSION_PATH, payload);

export const getPermissionAPI = async () => axiosApi.get(PERMISSION_PATH);

// export const getModuleById = (id: string) => axiosApi.get(`${PERMISSION_PATH}/${id}`);

export const deletePermissionAPI = async (id: string) =>
  axiosApi.delete(`${PERMISSION_PATH}/${id}`);

export const updatePermissionAPI = async (
  payload: permissionInterface,
  id: string
) => axiosApi.put(`${PERMISSION_PATH}/${id}`, payload);
