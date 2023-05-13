import React, { useEffect, useState } from "react";

const Notification = () => {
  const [data, setData] = useState("");

  useEffect(() => {
    fetch("http://localhost:5000/data")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      })
      .then((data) => setData(data));
  }, []);

  return <div>
    
    </div>;
};

export default Notification;
