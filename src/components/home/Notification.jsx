import React, { useEffect, useState } from "react";

const Notification = () => {
  const [data, setData] = useState("");

  useEffect(() => {
    fetch("http://localhost:5000/data")
      .then((res) => res.json())
      .then((data) => {
        console.log(data.danger);
        setData(data);
      });
    // .then((data) => setData(data));
  }, []);

  return (
    <div>
      {data.danger === true ? (
        <h2 className="text-red-500">Danger Detected Please take an action </h2>
      ) : (
        ""
      )}
    </div>
  );
};

export default Notification;