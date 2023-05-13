import { useState } from "react";
import "./App.css";
import { Link } from "react-router-dom";

function App() {
  return (
    <div>
      <div className="grid grid-cols-8 gap-4">
        <div className="col-span-8 md:col-span-2 bg-gray-400 p-4">
          <Link to="/home">Go to Home</Link>
          <Link to="/">Go to Root</Link>
          <Link to="/settings">Go to Settings</Link>
        </div>

        <div className="col-span-8 md:col-span-6 bg-gray-200 p-4"></div>
      </div>
    </div>
  );
}

export default App;
