import * as React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
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
import OrderDetails from "./pages/OrderDetails";
import App from "./App";

const Main = () => {
  return (
    <React.StrictMode>
      <BrowserRouter>
        <Routes>
          <Route path="*" element={<App />}>
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="branches" element={<Branches />} />
            <Route path="category" element={<Category />} />
            <Route path="discount" element={<Discount />} />
            <Route path="employes" element={<Employes />} />
            <Route path="messages" element={<Messages />} />
            <Route path="orders" element={<Orders />}>
              <Route path="order/:id" element={<OrderDetails />} />
            </Route>
            <Route path="products" element={<Products />} />
            <Route path="reports" element={<Reports />} />
            <Route path="settings" element={<Settings />} />
            <Route path="warehouse" element={<WareHouse />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </React.StrictMode>
  );
};

// Call createRoot() only once and render the Main component
const root = createRoot(document.getElementById("root"));
root.render(<Main />);

export default Main;
