import './App.css'
import Home from './components/Home'
import Navbar from './components/Navbar'
import SideBar from './components/SideBar'
import Branches from './pages/Branches'

function App() {

  return (
    <>
      <header>
        <Navbar />
      </header>

      <main className='flex '>
        <SideBar />
        <Branches />
      </main>
    </>
  )
}

export default App
