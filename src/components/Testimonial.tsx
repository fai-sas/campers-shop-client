const Testimonial = () => {
  return (
    <div
      data-aos='flip-left'
      data-aos-easing='ease-out-cubic'
      data-aos-duration='2000'
      className='mt-12 text-gray-600 dark:text-gray-300'
      id='reviews'
    >
      <div className='px-6 mx-auto max-w-7xl md:px-12 xl:px-6'>
        <div className='px-6 mb-10 space-y-4 md:px-0'>
          <h2 className='text-2xl font-bold text-center text-gray-800 dark:text-white md:text-4xl'>
            Here is what our customers said
          </h2>
        </div>

        <div className='gap-8 space-y-8 md:columns-2 lg:columns-3'>
          <div className='p-8 bg-white border border-gray-100 shadow-2xl aspect-auto rounded-3xl dark:bg-gray-800 dark:border-gray-700 shadow-gray-600/10 dark:shadow-none'>
            <div className='flex gap-4'>
              <img
                className='w-12 h-12 rounded-full'
                src='https://randomuser.me/api/portraits/women/12.jpg'
                alt='user avatar'
                width='400'
                height='400'
                loading='lazy'
              />
              <div>
                <h6 className='text-lg font-bold text-gray-700 dark:text-white'>
                  Sarah
                </h6>
              </div>
            </div>
            <p className='mt-8'>
              My stay at this hotel was simply amazing! The room was spacious
              and beautifully designed, and the staff went above and beyond to
              make my experience unforgettable. I can not wait to return!
            </p>
          </div>

          <div className='p-8 bg-white border border-gray-100 shadow-2xl aspect-auto rounded-3xl dark:bg-gray-800 dark:border-gray-700 shadow-gray-600/10 dark:shadow-none'>
            <div className='flex gap-4'>
              <img
                className='w-12 h-12 rounded-full'
                src='https://randomuser.me/api/portraits/women/14.jpg'
                alt='user avatar'
                width='200'
                height='200'
                loading='lazy'
              />
              <div>
                <h6 className='text-lg font-bold text-gray-700 dark:text-white'>
                  Cinthia
                </h6>
              </div>
            </div>
            <p className='mt-8'>
              I was blown away by the exceptional service and attention to
              detail at this hotel. From the moment I arrived, I felt like a
              valued guest. The staffs professionalism and warmth truly set this
              place apart.
            </p>
          </div>

          <div className='p-8 bg-white border border-gray-100 shadow-2xl aspect-auto rounded-3xl dark:bg-gray-800 dark:border-gray-700 shadow-gray-600/10 dark:shadow-none'>
            <div className='flex gap-4'>
              <img
                className='w-12 h-12 rounded-full'
                src='https://randomuser.me/api/portraits/women/18.jpg'
                alt='user avatar'
                width='200'
                height='200'
                loading='lazy'
              />
              <div>
                <h6 className='text-lg font-bold text-gray-700 dark:text-white'>
                  Emily
                </h6>
              </div>
            </div>
            <p className='mt-8'>
              What a fantastic find! The location was perfect, the rooms were
              pristine, and the amenities exceeded my expectations. I can not
              recommend this hotel enough
            </p>
          </div>

          <div className='p-8 bg-white border border-gray-100 shadow-2xl aspect-auto rounded-3xl dark:bg-gray-800 dark:border-gray-700 shadow-gray-600/10 dark:shadow-none'>
            <div className='flex gap-4'>
              <img
                className='w-12 h-12 rounded-full'
                src='https://randomuser.me/api/portraits/women/2.jpg'
                alt='user avatar'
                width='200'
                height='200'
                loading='lazy'
              />
              <div>
                <h6 className='text-lg font-bold text-gray-700 dark:text-white'>
                  Lisa
                </h6>
              </div>
            </div>
            <p className='mt-8'>
              A big thank you to the entire team for making our honeymoon
              special. The romantic setup in our room and the personalized
              service made our stay truly magical. We shall cherish these
              memories forever!
            </p>
          </div>

          <div className='p-8 bg-white border border-gray-100 shadow-2xl aspect-auto rounded-3xl dark:bg-gray-800 dark:border-gray-700 shadow-gray-600/10 dark:shadow-none'>
            <div className='flex gap-4'>
              <img
                className='w-12 h-12 rounded-full'
                src='https://randomuser.me/api/portraits/women/62.jpg'
                alt='user avatar'
                width='200'
                height='200'
                loading='lazy'
              />
              <div>
                <h6 className='text-lg font-bold text-gray-700 dark:text-white'>
                  Mona
                </h6>
              </div>
            </div>
            <p className='mt-8'>
              I had the pleasure of attending a conference at this hotel, and I
              could not have been more impressed. The state-of-the-art
              facilities, excellent catering, and courteous staff made it a
              seamless and productive experience
            </p>
          </div>

          <div className='p-8 bg-white border border-gray-100 shadow-2xl aspect-auto rounded-3xl dark:bg-gray-800 dark:border-gray-700 shadow-gray-600/10 dark:shadow-none'>
            <div className='flex gap-4'>
              <img
                className='w-12 h-12 rounded-full'
                src='https://randomuser.me/api/portraits/women/19.jpg'
                alt='user avatar'
                width='400'
                height='400'
                loading='lazy'
              />
              <div>
                <h6 className='text-lg font-bold text-gray-700 dark:text-white'>
                  Olivia
                </h6>
              </div>
            </div>
            <p className='mt-8'>
              From the delicious breakfast spread to the spa treatments,
              everything about this hotel was exceptional. I left feeling
              rejuvenated, and I am already looking forward to my next stay.
              Thank you for the perfect getaway!
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Testimonial
