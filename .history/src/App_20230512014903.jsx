import { useState } from "react";
import "./App.css";
import { Link, RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./components/home/Home";
import Signal from "./components/home/Signal";

function App() {
  const router = createBrowserRouter([
    { path: "/", element: <Home /> },
    { path: "/signal", element: <Signal /> },
    { path: "/notification", element: <Notifi },
  ]);
  return (
    <div>
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
