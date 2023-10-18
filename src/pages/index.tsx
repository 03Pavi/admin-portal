import Layout from "@/components/layout";
import Module from "@/pages/module";
import React from "react";
import Role from "./role";
import Router from "./router";
import Permission from "./permission";

type propsType = {
  route: string;
};
const Main = ({ route }: propsType) => {
  return (
    <Layout>
      {route === "/" && <Module />}
      {route === "/role" && <Role />}
      {route === "/router" && <Router />}
      {route === "/permission" && <Permission />}
    </Layout>
  );
};

export default Main;
