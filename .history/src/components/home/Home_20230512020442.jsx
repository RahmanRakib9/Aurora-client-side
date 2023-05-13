import React from "react";
import Sidebar from "./Sidebar";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <Link to="/signal">Signal</Link>
      <Link to="/signal">Notification</Link>
    </div>
  );
};

export default Home;
