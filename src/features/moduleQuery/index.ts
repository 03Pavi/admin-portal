/* eslint-disable @typescript-eslint/no-redeclare */
/* eslint-disable react-hooks/rules-of-hooks */
import {
  createModuleAPI,
  deleteModuleAPI,
  getModuleAPI,
} from "@/services/module.services";

import { QueryClient, useMutation, useQuery } from "@tanstack/react-query";
const queryClient = new QueryClient();
//get module
export const {
  isLoading,
  isError,
  isSuccess,
  data: modules,
} = useQuery({
  queryKey: ["module"],
  queryFn: getModuleAPI,
});
//add module
export const { mutateAsync: creaModuleMutation } = useMutation({
  mutationFn: createModuleAPI,
  onSuccess: () => {
    queryClient.invalidateQueries({ queryKey: ["module"] });
  },
});

//update
// export const { mutateAsync: updateModuleMutation } = useMutation({
//   mutationFn: updateModuleAPI,
//   onSuccess: () => {
//     queryClient.invalidateQueries({ queryKey: ["module"] });
//   },
// });

//delete

export const deletemoduleMutation = useMutation({
  mutationFn: deleteModuleAPI,
  onSuccess: () => {
    queryClient.invalidateQueries({ queryKey: ["module"] });
  },
});
