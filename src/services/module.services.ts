import { axiosApi } from "@/config";

export interface moduleInterface {
  name: string;
  logo: string;
  description: string;
  status?: boolean;
}

// const MODULE_PATH = "/module";
const MODULE_PATH = "https://dummyjson.com/users";

export const createModuleAPI = async (payload: moduleInterface) =>
  axiosApi.post(MODULE_PATH, payload);

export const getModuleAPI = async () => axiosApi.get(MODULE_PATH);

// export const getModuleById = (id: string) => axiosApi.get(`${MODULE_PATH}/${id}`);

export const deleteModuleAPI = async (id: string) =>
  axiosApi.delete(`${MODULE_PATH}/${id}`);

export const updateModuleAPI = async (payload: moduleInterface, id: string) =>
  axiosApi.put(`${MODULE_PATH}/${id}`, payload);
