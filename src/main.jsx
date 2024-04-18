import * as React from "react";
import * as ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import Dashboard from "./pages/Dashboard";
import Category from "./pages/Category";
import Orders from "./pages/Orders";
import Branches from "./pages/Branches";
import Discount from "./pages/Discount";
import Messages from "./pages/Messages";
import Reports from "./pages/Reports";
import Settings from "./pages/Settings";
import WareHouse from "./pages/WareHouse";
import Products from "./pages/Products";
import App from "./App";
  import OrderDetails from "./pages/OrderDetails";
import ViewDetailsContext, {
  NumberProvider,
} from "./context/ViewDetailsContext";
import Employes from "./pages/Employes";
import Vacancy from "./pages/Vacancy";


const router = createBrowserRouter([
  {
    path: '/',
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
        children: [{ path: ":id", element: <OrderDetails /> }],
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
      {
        path: "/vacancy",
        element: <Vacancy />,
      }
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <NumberProvider>
      <RouterProvider router={router} />
    </NumberProvider>
  </React.StrictMode>
);
