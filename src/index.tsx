import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "@/routes";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 10000, //default infinity,
      //window refocused
      // refetchOnWindowFocus: false,
    },
  },
});
root.render(
  <QueryClientProvider client={queryClient}>
    {/* react QUery  */}
    <App />
    <ReactQueryDevtools initialIsOpen={false} />
  </QueryClientProvider>
);
