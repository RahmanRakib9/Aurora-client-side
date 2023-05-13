import React, { useEffect, useState } from "react";

const Notification = () => {
  const [data, setData] = useState("");

  useEffect(() => {
    fetch("http://localhost:5000/data")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setData(data);
      });
    // .then((data) => setData(data));
  }, []);

  return <div>here is your notification {data.danger}</div>;
};

export default Notification;
