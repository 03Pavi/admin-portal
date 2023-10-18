import { axiosApi } from "@/config";

export interface roleInterface {
  name: string;
  icon: string;
  responsibity: string;
  status?: boolean;
}

// const ROLE_PATH = "/role";
const ROLE_PATH = "https://dummyjson.com/posts";

export const createRoleAPI = async (payload: roleInterface) =>
  axiosApi.post(ROLE_PATH, payload);

export const getRoleAPI = async () => axiosApi.get(ROLE_PATH);

// export const getRoleById = (id: string) => axiosApi.get(`${ROLE_PATH}/${id}`);

export const deleteRoleAPI = async (id: string) =>
  axiosApi.delete(`${ROLE_PATH}/${id}`);

export const updateRoleAPI = async (payload: roleInterface, id: string) =>
  axiosApi.put(`${ROLE_PATH}/${id}`, payload);
