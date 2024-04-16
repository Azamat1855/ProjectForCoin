import './App.css'
import Home from './pages/Home'
import Navbar from './components/Navbar'
import SideBar from './components/SideBar'
import Branches from './pages/Branches'
import { Route, Routes } from 'react-router-dom'
import Dashboard from './pages/Dashboard'
import Employes from './pages/Employes'
import WareHouse from './pages/WareHouse'
import Reports from './pages/Reports'


function App() {

  return (
    <>
      <header>
        <Navbar />
      </header>

      <main className='flex w-full'>
        <SideBar/>
        <Routes>
          <Route path="*" element={<Home />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/branches" element={<Branches />} />
          <Route path="/employes" element={<Employes />} />
          <Route path="/warehouse" element={<WareHouse />} />
          <Route path="/reports" element={<Reports />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </main>
    </>
  )
}

export default App
