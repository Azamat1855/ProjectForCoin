import React from 'react'

import Dashboard from "./Dashboard";
import Category from "./Category";
import Orders from "./Orders";
import Discount from "./Discount";
import Employes from "./Employes";
import Messages from "./Messages";
import Reports from "./Reports";
import Settings from "./Settings";
import WareHouse from "./WareHouse";
import Products from "./Products";
export const index = () => {  
  return (
   <>
      <Home/>
      <Dashboard/>
      <Category/>
      <Orders/>
      <Discount/>
      <Employes/>
      <Messages/>
      <Reports/>
      <Settings/>
      <WareHouse/>
      <Products/>

   </>
  )
}
