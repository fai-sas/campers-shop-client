const Map = () => {
  return (
    <section
      data-aos='fade-up'
      data-aos-easing='ease-out-cubic'
      data-aos-anchor-placement='center-bottom'
      data-aos-duration='2000'
      className='bg-gray-100'
    >
      <div className='px-4 py-16 mx-auto max-w-7xl sm:px-6 lg:py-20 lg:px-8'>
        <div className='max-w-2xl mx-auto text-center lg:max-w-4xl'>
          <h2 className='text-3xl font-extrabold text-gray-900'>
            Visit Our Location
          </h2>
        </div>
        <div className='mt-16 lg:mt-20'>
          <div className='grid grid-cols-1 gap-8 md:grid-cols-2'>
            <div className='overflow-hidden rounded-lg'>
              <iframe
                src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d11672.945750644447!2d-122.42107853750231!3d37.7730507907087!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80858070cc2fbd55%3A0xa71491d736f62d5c!2sGolden%20Gate%20Bridge!5e0!3m2!1sen!2sus!4v1619524992238!5m2!1sen!2sus'
                width='100%'
                height='480'
                allowfullscreen=''
                loading='lazy'
              ></iframe>
            </div>
            <div>
              <div className='max-w-full mx-auto overflow-hidden rounded-lg'>
                <div className='px-6 py-4'>
                  <h3 className='text-lg font-medium text-gray-900'>
                    Our Address
                  </h3>
                  <p className='mt-1 text-gray-600'>
                    123 Main St, San Francisco, CA 94105
                  </p>
                </div>
                <div className='px-6 py-4 border-t border-gray-200'>
                  <h3 className='text-lg font-medium text-gray-900'>Hours</h3>
                  <p className='mt-1 text-gray-600'>
                    Monday - Friday: 9am - 5pm
                  </p>
                  <p className='mt-1 text-gray-600'>Saturday: 10am - 4pm</p>
                  <p className='mt-1 text-gray-600'>Sunday: 10am to 10pm</p>
                </div>
                <div className='px-6 py-4 border-t border-gray-200'>
                  <h3 className='text-lg font-medium text-gray-900'>Contact</h3>
                  <p className='mt-1 text-gray-600'>
                    Email: info@campers-shop.com
                  </p>
                  <p className='mt-1 text-gray-600'>Phone: +1 23494 34993</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
export default Map
