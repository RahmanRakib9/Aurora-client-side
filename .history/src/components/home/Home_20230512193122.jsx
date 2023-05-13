import React from "react";
import Sidebar from "./Sidebar";
import { Link, NavLink } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <h1 className="font-bold text-center">Admin Dashboard Panel</h1>
      <div className="grid grid-cols-8 gap-4">
        <div className="col-span-8 md:col-span-2 bg-gray-400 p-4">
          <NavLink
            to="/signal"
            className="text-blue mt-4"
            activeClassName="active"
          >
            Signal
          </NavLink>
          <br />

          <NavLink
            to="/notification"
            className="text-blue mt-4 !important"
            activeClassName="active"
          >
            Notifications
          </NavLink>
        </div>

        <div className="col-span-8 md:col-span-6 bg-gray-200 p-4">
          <div>here is main rendering component</div>
        </div>
      </div>
    </div>
  
  );
};

export default Home;
