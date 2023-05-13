import { useState } from "react";
import "./App.css";
import Home from "./components/home/Home";

function App() {
  return (
    <div>
      <div className="grid grid-cols-8 gap-4">
        <div className="col-span-8 md:col-span-2 bg-gray-400 p-4"></div>

        <div className="col-span-8 md:col-span-6 bg-gray-200 p-4"></div>
        {/* <div className="col-span-8 md:col-span-4 bg-gray-600 p-4"></div> */}
      </div>
    </div>
  );
}

export default App;
