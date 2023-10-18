/* eslint-disable @typescript-eslint/no-redeclare */
/* eslint-disable react-hooks/rules-of-hooks */
import {
  createPermissionAPI,
  deletePermissionAPI,
  getPermissionAPI,
  // updatePermissionAPI,
} from "@/services/permission.services";
import { QueryClient, useMutation, useQuery } from "@tanstack/react-query";
const queryClient = new QueryClient();
//get permission
export const {
  isLoading,
  isError,
  isSuccess,
  data: permissions,
} = useQuery({
  queryKey: ["permission"],
  queryFn: getPermissionAPI,
});
//add permission
export const { mutateAsync: createPermission } = useMutation({
  mutationFn: createPermissionAPI,
  onSuccess: () => {
    queryClient.invalidateQueries({ queryKey: ["permission"] });
  },
});

//update
// export const { mutateAsync: updatePermission } = useMutation({
//   mutationFn: updatePermissionAPI,
//   onSuccess: () => {
//     queryClient.invalidateQueries({ queryKey: ["permission"] });
//   },
// });

//delete

export const deletePermission = useMutation({
  mutationFn: deletePermissionAPI,
  onSuccess: () => {
    queryClient.invalidateQueries({ queryKey: ["permission"] });
  },
});
