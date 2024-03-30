import './App.css'
import Home from './components/Home'
import Navbar from './components/Navbar'
import SideBar from './components/SideBar'

function App() {

  return (
    <>
      <header>
        <Navbar />
      </header>

      <main className='flex '>
        <SideBar />
        <Home />
      </main>
    </>
  )
}

export default App
