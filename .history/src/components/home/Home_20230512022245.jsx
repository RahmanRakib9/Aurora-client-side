import React from "react";
import Sidebar from "./Sidebar";
import { Link, NavLink } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <div className="grid grid-cols-8 gap-4">
        <div className="col-span-8 md:col-span-2 bg-gray-400 p-4">
          <NavLink to="/signal" className="text blue mt-5">
            Signal
          </NavLink>
          
          <NavLink
            to="/notification"
            className="text-blue mt-4"
            activeClassName="active"
          >
            Notifications
          </NavLink>
        </div>

        <div className="col-span-8 md:col-span-6 bg-gray-200 p-4"></div>
      </div>
    </div>
  );
};

export default Home;
