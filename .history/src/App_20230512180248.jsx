import { useState } from "react";
import "./App.css";
import { Link, RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./components/home/Home";
import Signal from "./components/home/Signal";
import Notification from "./components/home/Notification";

function App() {
  const router = createBrowserRouter([
    { path: "/", element: <Home /> },
    { path: "/signal", element: <Signal /> },
    { path: "/notification", element: <Notification /> },
  ]);
  return (
    <div>
      <RouterProvider router={router}>
        {/* <Home /> */}
      </RouterProvider>
    </div>
  );
}

export default App;
