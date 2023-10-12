import { type roleInterface } from "@/features/role/roleSlice";

import { axiosApi } from "@/config";

const ROLE_PATH = "/role";

export const createRoleAPI = (payload: roleInterface) =>
  axiosApi.post(ROLE_PATH, payload);

export const getRoleAPI = () => axiosApi.get(ROLE_PATH);

// export const getRoleById = (id: string) => axiosApi.get(`${ROLE_PATH}/${id}`);

export const deleteRoleAPI = (id: string) =>
  axiosApi.delete(`${ROLE_PATH}/${id}`);

export const updateRoleAPI = (payload: roleInterface, id: string) =>
  axiosApi.put(`${ROLE_PATH}/${id}`, payload);
