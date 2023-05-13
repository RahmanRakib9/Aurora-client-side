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
      {
      <h2>here is your notification:</h2>
data.danger===false? 
      }
    </div>
  );
};

export default Notification;
