import React, { useEffect, useState } from "react";

const Notification = () => {
  const [data, setData] = useState("");

  useEffect(()=>{
    fetch('http://localhost:5000/data')
    .then(res=>res.json())
    .then(data=>)
  },[])

  return <div>here is your notification </div>;
};

export default Notification;
