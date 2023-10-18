/* eslint-disable @typescript-eslint/no-redeclare */
/* eslint-disable react-hooks/rules-of-hooks */
import {
  createRouterAPI,
  deleteRouterAPI,
  getRouterAPI,
  // updateRouterAPI,
} from "@/services/router.services";
import { QueryClient, useMutation, useQuery } from "@tanstack/react-query";
const queryClient = new QueryClient();
//get router
export const {
  isLoading,
  isError,
  isSuccess,
  data: routers,
} = useQuery({
  queryKey: ["router"],
  queryFn: getRouterAPI,
});
//add router
export const { mutateAsync: createRouterMutation } = useMutation({
  mutationFn: createRouterAPI,
  onSuccess: () => {
    queryClient.invalidateQueries({ queryKey: ["router"] });
  },
});

//update
// export const { mutateAsync: updateRouterMutation } = useMutation({
//   mutationFn: updateRouterAPI,
//   onSuccess: () => {
//     queryClient.invalidateQueries({ queryKey: ["router"] });
//   },
// });

//delete

export const deleteRouterMutation = useMutation({
  mutationFn: deleteRouterAPI,
  onSuccess: () => {
    queryClient.invalidateQueries({ queryKey: ["router"] });
  },
});
