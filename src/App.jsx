import { Outlet } from 'react-router-dom'
import './App.css'
import Navber from './layout/Navber'
import Footer from './layout/Footer'

function App() {

  return (
    <>
      <div className='mx-auto max-w-[1300px]'>
        <Navber></Navber>
        <Outlet></Outlet>
      </div>
      <Footer></Footer>
    </>
  )
}

export default App
