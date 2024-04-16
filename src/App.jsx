// src/App.js
import React from 'react';
import Navbar from './components/Navbar';
import SideBar from './components/SideBar';
import { Route, Routes } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import Branches from './pages/Branches';
import Employes from './pages/Employes';
import WareHouse from './pages/WareHouse';
import Settings from './pages/Settings';
import Messages from './pages/Messages';
import Reports from './pages/Reports';
import Vacancy from './pages/Vacancy';
import Orders from './pages/Orders';
import Category from './pages/Category';
import Products from './pages/Products';
import Discount from './pages/Discount';
import './App.css';
import ExampleComponent from './components/ExampleComponent/ExampleComponent';

const App = () => {
  return (
    <>
      <header>
        <Navbar />
        <ExampleComponent />
      </header>
      <main className='flex w-full'>
        <SideBar/>
        <Routes>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/branches" element={<Branches />} />
          <Route path="/employes" element={<Employes />} />
          <Route path="/warehouse" element={<WareHouse />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/messages" element={<Messages />} />
          <Route path="/reports" element={<Reports />} />
          <Route path="/vacancy" element={<Vacancy />} />
          <Route path="/orders" element={<Orders />} />
          <Route path="/category" element={<Category />} />
          <Route path="/products" element={<Products />} />
          <Route path="/discount" element={<Discount />} />
        </Routes>
      </main>
    </>
  );
};

export default App;
