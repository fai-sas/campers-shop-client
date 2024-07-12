import { Link } from 'react-router-dom'

const Hero = () => {
  return (
    <section className='container py-8 mx-auto '>
      <div className='relative flex flex-col py-16 lg:pt-0 lg:flex-col lg:pb-0'>
        <div className='flex flex-col items-start w-full max-w-xl px-4 mx-auto lg:px-8 lg:max-w-screen-xl'>
          <div className='mb-16 lg:my-40 lg:max-w-lg lg:pr-5'>
            <div className='max-w-xl mb-6'>
              <div>
                <p className='inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider text-teal-900 uppercase rounded-full bg-teal-accent-400'>
                  Adventure Awaits
                </p>
              </div>
              <h2 className='max-w-lg mb-6 font-sans text-3xl font-bold leading-7 tracking-tight text-gray-900 sm:text-4xl md:text-5xl '>
                Explore the Great Outdoors
                <br className='hidden md:block' />
                with
                <span className='inline-block text-deep-purple-accent-400'>
                  Our Premium Gear
                </span>
              </h2>

              <p className='text-base text-gray-700 md:text-lg'>
                Discover top-quality camping equipment and outdoor essentials to
                make your adventures unforgettable. From tents to backpacks, we
                have everything you need.
              </p>
            </div>
            <div className='flex flex-col items-center md:flex-row'>
              <Link to='/products'>
                <button className='btn'>Shop now</button>
              </Link>
            </div>
          </div>
        </div>
        <div className='inset-y-0 right-0 w-full max-w-xl px-4 mx-auto lg:pl-8 lg:pr-0 lg:mb-0 lg:mx-0 lg:w-1/2 lg:max-w-full lg:absolute xl:px-0'>
          <img
            className='object-cover w-full h-56 rounded-lg shadow-lg sm:h-96 lg:h-full'
            src='https://images.unsplash.com/photo-1515444744559-7be63e1600de?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D0'
            alt='Camping gear'
          />
        </div>
      </div>
    </section>
  )
}

export default Hero
