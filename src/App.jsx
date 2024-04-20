// src/App.js
import React, { useContext } from 'react';
import Navbar from './components/Navbar';
import SideBar from './components/SideBar';
import { Route, Routes } from 'react-router-dom';
import Settings from './pages/Settings';
import Messages from './pages/Messages';
import Reports from './pages/Reports';
import Orders from './pages/Orders';
import Category from './pages/Category';
import Products from './pages/Products';
import Discount from './pages/Discount';
import './App.css';
import ExampleComponent from './components/ExampleComponent/ExampleComponent';
import Ingrediyent from './pages/Ingrediyent';
import NumberContext from './context/ViewDetailsContext';
import OrderDetails from './pages/OrderDetails';
import './App.css'
import Home from './pages/Home'
import Branches from './pages/Branches'
import Dashboard from './pages/Dashboard'
import Employes from './pages/Employes'
import WareHouse from './pages/WareHouse'
import Vacancy from './pages/Vacancy'


function App() {
  const { number, setNumber } = useContext(NumberContext);

  console.log(number);
  return (
    <>
      <header>
        <Navbar />
        <ExampleComponent />
      </header>

      <main className="flex w-full">
        <SideBar />
        <Routes>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/branches" element={<Branches />} />
          <Route path="/employes" element={<Employes />} />
          <Route path="/warehouse" element={<WareHouse />} />
          <Route path="/orders" element={<Orders />}></Route>
          <Route path="/orders/:id" element={<OrderDetails />} />
          <Route path="*" element={<div>NONE</div>} />
          <Route path="/category" element={<Category />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/products" element={<Products />} />
          <Route path="/discount" element={<Discount />} />
          <Route path="/dd/:id" element={<Ingrediyent />} />
          <Route path="/vacancy" element={<Vacancy />} />
        </Routes>
      </main>
    </>
  );
}

export default App;
