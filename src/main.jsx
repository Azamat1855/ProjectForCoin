import * as React from "react";
import * as ReactDOM from "react-dom/client";
import "./index.css";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import App from "./App";
// import {
//   Dashboard,
//   Branches,
//   Category,
//   Discount,
//   Employes,
//   Messages,
//   Orders,
//   Products,
//   Reports,
//   Settings,
//   WareHouse
// } from "../src/pages/index";

import Dashboard from "./pages/Dashboard";
import Category from "./pages/Category";
import Orders from "./pages/Orders";
import Discount from "./pages/Discount";
import Employes from "./pages/Employes";
import Messages from "./pages/Messages";
import Reports from "./pages/Reports";
import Settings from "./pages/Settings";
import WareHouse from "./pages/WareHouse";
// import Products from "./pages/Products";
import Products from "./pages/Products";
import Branches from "./pages/Branches";
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/dashboard",
        element: <Dashboard />,
      },
      {
        path: "/branches",
        element: <Branches />,
      },
      {
        path: "/category",
        element: <Category />,
      },
      {
        path: "/discount",
        element: <Discount />,
      },
      {
        path: "/employes",
        element: <Employes />,
      },
      {
        path: "/messages",
        element: <Messages />,
      },
      {
        path: "/orders",
        element: <Orders />,
      },
      {
        path: "/products",
        element: <Products />,
      },
      {
        path: "/reports",
        element: <Reports />,
      },
      {
        path: "/settings",
        element: <Settings />,
      },
      {
        path: "/warehouse",
        element: <WareHouse />,
      }
    ],
  },

]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);