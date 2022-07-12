import React from "react";
import type { NextPage } from "next";
import Head from "next/head";
import styles from "styles/pages/Home/Home.module.css";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome
        </h1>
      </main>
    </div>
  );
};

export default Home;
