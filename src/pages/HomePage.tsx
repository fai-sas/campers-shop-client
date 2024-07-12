import Categories from '../components/Categories'
import Cta from '../components/Cta'
import Faq from '../components/Faq'
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
      <Cta />
      <Testimonial />
      <Faq />
      <Teams />
      <Map />
    </>
  )
}

export default HomePage
