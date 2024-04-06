import React, { useState, useEffect } from "react";
import Table from "./Table/Table";

const Home = () => {

  const [tableitems, settableitems] = useState([
    {name: "Employees Name"},
    {name: "Address"},
    {name: "Age"},
    {name: "Gender"},
    {name: "Email Address"},
    {name: "Number"},
    {name: "Action"},
    
  ])
  return (
    <Table columnsTable={tableitems}/>
  )
};

export default Home;
