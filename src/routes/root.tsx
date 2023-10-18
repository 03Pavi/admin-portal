import { Route, Routes } from "react-router-dom";

import Main from "@/pages";
const Root = () => {
  return (
    <Routes>
      <Route path="/" element={<Main route="/" />} />
      <Route path="/role" element={<Main route="/role" />} />
      <Route path="/router" element={<Main route="/router" />} />
      <Route path="/permission" element={<Main route="/permission" />} />
    </Routes>
  );
};

export default Root;
