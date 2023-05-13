import React from "react";
import Sidebar from "./Sidebar";
import { Link, NavLink, Outlet } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <h1 className="font-bold text-center">Admin Dashboard Panel</h1>
      <div className="grid grid-cols-8 gap-4">
        <div className="col-span-8 md:col-span-2 bg-gray-400 p-4">
          <NavLink
            to="/signal"
            className={({ isActive }) => (isActive ? "bg-gray-200" : undefined)}
          >
            <h2>Signal</h2>
          </NavLink>
          <br />

          <NavLink
            to="/notification"
            className={({ isActive }) =>
              isActive ? "text-redfont-bold" : undefined
            }
          >
            <h2>Notifications</h2>
          </NavLink>
        </div>

        <div className="col-span-8 md:col-span-6 bg-gray-200 p-4">
          {/* <div>here is main rendering component</div> */}
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Home;
