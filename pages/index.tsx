import React from "react";
import type { NextPage } from "next";
import Layout from "@/components/site/Layout";

const Home: NextPage = () => {
  return (
    <Layout
      meta={{
        title: "Roomsfy App | Find homes or hotels in a few clicks",
        description:
          "Find vacation rentals, cabins, beach houses, unique homes and experiences around the world - all made possible by hosts on Roomsfy.",
      }}
    >
      <h1>Welcome</h1>
    </Layout>
  );
};

export default Home;
