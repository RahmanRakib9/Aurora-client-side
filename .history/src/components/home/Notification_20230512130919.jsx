import React, { useState } from "react";

const Notification = () => {
  const [data, setData] = useState("");

  fetch("http://localhost:5000/data")
    .then((res) => res.json())
    .then(data=>)
    .then((data) => setData(data));

  return <div>here is your notification {data.danger}</div>;
};

export default Notification;
