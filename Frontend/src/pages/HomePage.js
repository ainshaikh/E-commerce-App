import React from "react";
import Layout from "../components/Layout/Layout";
import { useAuth } from "../context/Auth";

const HomePage = () => {
  const [auth, setAuth] = useAuth();
  return (
    <Layout title={"Shop-Latest clothes"}>
      <pre>{JSON.stringify(auth, null, 4)}</pre>
      HomePage
    </Layout>
  );
};

export default HomePage;
