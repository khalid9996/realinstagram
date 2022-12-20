import React from "react";
import Head from "./components/Head";
import Story from "./components/Story";
import Feed from "./components/Feed";
import Nav from "./components/Nav";

const Home = () => {
  return (
    <>
      {/* Head */}
      <Head />

      {/* Story */}
      <Story />

      {/* Feed */}
      <Feed />

      {/* Nav */}
      <Nav />
    </>
  );
};

export default Home;
