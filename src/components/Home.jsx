import React, { useState, useEffect } from "react";
import Table from "./Table/Table";

const Home = () => {

  const [tableitems, settableitems] = useState([
    {name: "Bekzod krasavchik"},
    {name: "Bekzod krasavchik"},
    {name: "Bekzod krasavchik"},
    {name: "Bekzod krasavchik"},
    {name: "Bekzod krasavchik"},
    {name: "Bekzod krasavchik"},
    {name: "Bekzod krasavchik"},
    {name: "Bekzod krasavchik"},
    {name: "Bekzod krasavchik"},
    {name: "Bekzod krasavchik"},
    {name: "Bekzod krasavchik"},
    {name: "Bekzod krasavchik"},
    {name: "Bekzod krasavchik"},
    {name: "Bekzod krasavchik"},
    {name: "Bekzod krasavchik"},
    {name: "Bekzod krasavchik"},
    {name: "Bekzod krasavchik"},
    {name: "Bekzod krasavchik"},
    {name: "Bekzod krasavchik"},
  ])
  return (
    <Table columnsTable={tableitems}/>
  )
};

export default Home;
