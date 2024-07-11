import Categories from '../components/Categories'
import Featured from '../components/Featured'
import Hero from '../components/Hero'
import Map from '../components/Maps'
import Teams from '../components/Teams'
import Testimonial from '../components/Testimonial'

const HomePage = () => {
  return (
    <>
      <Hero />
      <Featured />
      <Categories />
      <Testimonial />
      <Teams />
      <Map />
    </>
  )
}

export default HomePage
