/* eslint-disable @typescript-eslint/no-redeclare */
/* eslint-disable react-hooks/rules-of-hooks */
import {
  createRoleAPI,
  deleteRoleAPI,
  getRoleAPI,
  // updateRoleAPI,
} from "@/services/role.services";
import { QueryClient, useMutation, useQuery } from "@tanstack/react-query";
const queryClient = new QueryClient();
//get role
export const {
  isLoading,
  isError,
  isSuccess,
  data: roles,
} = useQuery({
  queryKey: ["role"],
  queryFn: getRoleAPI,
});
//add role
export const { mutateAsync: createRoleMutation } = useMutation({
  mutationFn: createRoleAPI,
  onSuccess: () => {
    queryClient.invalidateQueries({ queryKey: ["role"] });
  },
});

//update
// export const { mutateAsync: updateRoleMutation } = useMutation({
//   mutationFn: updateRoleAPI,
//   onSuccess: () => {
//     queryClient.invalidateQueries({ queryKey: ["role"] });
//   },
// });

//delete

export const deleteRoleMutation = useMutation({
  mutationFn: deleteRoleAPI,
  onSuccess: () => {
    queryClient.invalidateQueries({ queryKey: ["role"] });
  },
});
