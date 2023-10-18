import { axiosApi } from "@/config";

export interface routerInterface {
  module_id: string;
  router_name: string;
  status?: boolean;
}

// const ROUTER_PATH = "/router";
const ROUTER_PATH = "https://dummyjson.com/users";

export const createRouterAPI = async (payload: routerInterface) =>
  axiosApi.post(ROUTER_PATH, payload);

export const getRouterAPI = async () => axiosApi.get(ROUTER_PATH);

// export const getRouterById = (id: string) => axiosApi.get(`${ROUTER_PATH}/${id}`);

export const deleteRouterAPI = async (id: string) =>
  axiosApi.delete(`${ROUTER_PATH}/${id}`);

export const updateRouterAPI = async (payload: routerInterface, id: string) =>
  axiosApi.put(`${ROUTER_PATH}/${id}`, payload);
