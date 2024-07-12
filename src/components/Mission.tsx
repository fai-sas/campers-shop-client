const Mission = () => {
  return (
    <section className='py-12 bg-gray-200'>
      <div className='flex flex-col items-center px-5 py-8 mx-auto max-w-7xl'>
        <div className='flex flex-col w-full mb-8 prose text-left max-w-max lg:max-w-2xl'>
          <div className='w-full mx-auto'>
            <h1 className='mb-4 text-4xl font-extrabold text-center'>
              Our Mission
            </h1>
            <h2 className='mb-6 text-2xl font-semibold text-center'>
              Connecting campers with the best outdoor gear
            </h2>
            <p className='text-center text-gray-700'>
              At Campers Shop, our mission is to provide high-quality camping
              gear and accessories that enhance your outdoor adventures. We
              believe in the spirit of exploration and the joy of nature, and we
              are committed to supporting your journey with the best products
              available.
            </p>
          </div>
        </div>
      </div>
      <div className='items-center w-full px-5'>
        <div className='flex flex-wrap justify-center w-full mx-auto prose max-w-max lg:max-w-3xl'>
          <div className='relative justify-center lg:px-4'>
            <div className='gap-8 lg:grid lg:grid-cols-2'>
              <div className='p-8 bg-white rounded-lg shadow-lg'>
                <h1 className='mb-4 text-xl font-bold'>
                  Quality You Can Trust
                </h1>
                <p className='text-gray-700'>
                  Our products are sourced from top brands and tested for
                  durability and reliability. Whether you're a seasoned camper
                  or just starting out, you can trust our gear to keep you safe
                  and comfortable.
                </p>
              </div>
              <div className='p-8 bg-white rounded-lg shadow-lg'>
                <h1 className='mb-4 text-xl font-bold'>Adventure Awaits</h1>
                <p className='text-gray-700'>
                  We're passionate about the outdoors and want to inspire others
                  to explore. Our blog and resources section is packed with
                  tips, guides, and stories to help you plan your next
                  adventure.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Mission
