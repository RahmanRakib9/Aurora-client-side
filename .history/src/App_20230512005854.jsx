import { useState } from "react";
import "./App.css";
import { Link, RouterProvider, createBrowserRouter } from "react-router-dom";

function App() {
  const router = createBrowserRouter([
    { path: "/home", element: <p>Home</p> },
    { path: "/notification", element: <p>Notification</p> },
    { path: "/ana", element: <p>Notification</p> },
  ]);
  return (
    <div>
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
