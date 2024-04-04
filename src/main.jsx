import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import Category from "./pages/Category";
import Orders from "./pages/Orders";
import Branches from "./pages/Branches";
import Discount from "./pages/Discount";
import Employes from "./pages/Employes";
import Messages from "./pages/Messages";
import Reports from "./pages/Reports";
import Settings from "./pages/Settings";
import WareHouse from "./pages/WareHouse";
import Products from "./pages/Products";
import App from "./App";



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
      },
    ],
  },

]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);