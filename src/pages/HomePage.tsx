/* eslint-disable @typescript-eslint/no-redeclare */
import { getModuleAPI } from "@/services/module.services";
import { createRoleAPI, getRoleAPI } from "@/services/role.services";
import { QueryClient, useMutation, useQuery } from "@tanstack/react-query";
import { Link } from "react-router-dom";

const HomePage = () => {
  const {
    isLoading,
    isError,
    isSuccess,
    data: roles,
  } = useQuery({
    queryKey: ["role"],
    queryFn: getRoleAPI,
  });
  const queryClient = new QueryClient();

  const { mutateAsync: creatRoleMutation } = useMutation({
    //   queryKey: ["role"],
    mutationFn: createRoleAPI,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["role"] });
    },
  });

  const { data: modules } = useQuery({
    queryKey: ["module"],
    queryFn: getModuleAPI,
  });
  return (
    <div>
      {isLoading
        ? "Loading..."
        : isError
        ? "error"
        : isSuccess
        ? roles?.data.posts.map((role: any, key: number) => {
            return (
              <div>
                <Link key={key} to={"/hello"}>
                  {role.title}
                </Link>
                <button
                  onClick={async () => {
                    await creatRoleMutation(role);
                  }}
                >
                  add products
                </button>
              </div>
            );
          })
        : null}
    </div>
  );
};

export default HomePage;
