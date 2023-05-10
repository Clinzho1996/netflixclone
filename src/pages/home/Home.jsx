import React from "react";
import "./home.scss";
import Navbar from "../../components/navbar/Navbar";
import Featured from "../../components/navbar/featured/Featured";
import List from "../../components/list/List";
import UpcomingMovies from "../../components/list/UpcomingMovies";
import TrendingList from "../../components/list/TrendingList";
import NowList from "../../components/list/NowList";

const Home = () => {
  return (
    <div className="home">
      <Navbar />
      <Featured />
      <NowList />
      <List />
      <UpcomingMovies />
      <TrendingList />
    </div>
  );
};

export default Home;
