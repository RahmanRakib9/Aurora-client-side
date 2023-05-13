import React, { useState } from "react";

const Notification = () => {
  const [data, setData] = useState("");

  fetch('http://localhost:5000/data')
  .then(res=>res.json());
  .

  return <div>here is your notification</div>;
};

export default Notification;
