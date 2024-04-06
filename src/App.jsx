import './App.css'
import Home from './pages/Home'
import Navbar from './components/Navbar'
import SideBar from './components/SideBar'
import Branches from './pages/Branches'
import { Route, Routes } from 'react-router-dom'
import Dashboard from './pages/Dashboard'
import Employes from './pages/Employes'


function App() {

  return (
    <>
      <header>
        <Navbar />
      </header>

      <main className='flex w-full'>
        <SideBar/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/branches" element={<Branches />} />
          <Route path="/employes" element={<Employes />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/dashboard" element={<Dashboard />} />
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
