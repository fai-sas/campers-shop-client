import { Outlet } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const MainLayout = () => {
  return (
    <div className='overflow-hidden bg-gray-100'>
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  )
}

export default MainLayout
