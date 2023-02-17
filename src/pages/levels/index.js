import React from "react";
import Layout from "./layout";

const index = () => {
  return <div>index</div>;
};

export default index;

index.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};
