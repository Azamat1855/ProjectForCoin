import "./App.css";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import SideBar from "./components/SideBar";
import Branches from "./pages/Branches";
import { Route, Routes } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import WareHouse from "./pages/WareHouse";
import OrderDetails from "./pages/OrderDetails";
import Orders from "./pages/Orders";
import Category from "./pages/Category";
import { useContext } from "react";
import NumberContext from "./context/ViewDetailsContext";

function App() {
  const { number, setNumber } = useContext(NumberContext);

  console.log(number);
  return (
    <>
      <header>
        <Navbar />
      </header>

      <main className="flex w-full">
        <SideBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/branches" element={<Branches />} />
          <Route path="/warehouse" element={<WareHouse />} />
          <Route path="/orders" element={<Orders />}></Route>
          <Route path="/orders/:id" element={<OrderDetails />} />
          <Route path="*" element={<div>NONE</div>} />
          <Route path="/category" element={<Category />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </main>
    </>
  );
}

export default App;
