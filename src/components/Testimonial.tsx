import React from 'react'

const Testimonial = () => {
  return (
    <div
      data-aos='fade-up'
      data-aos-duration='2000'
      className='mt-12 text-gray-600 dark:text-gray-300'
      id='reviews'
    >
      <div className='px-6 mx-auto max-w-7xl md:px-12 xl:px-6'>
        <div className='px-6 mb-10 space-y-4 md:px-0'>
          <h2 className='text-2xl font-bold text-center text-gray-800 dark:text-white md:text-4xl'>
            Here's what our campers say
          </h2>
        </div>

        <div className='gap-8 space-y-8 md:grid md:grid-cols-2 lg:grid-cols-3'>
          <div className='p-8 bg-white border border-gray-100 shadow-2xl aspect-auto rounded-3xl dark:bg-gray-800 dark:border-gray-700 shadow-gray-600/10 dark:shadow-none'>
            <div className='flex gap-4'>
              <img
                className='w-12 h-12 rounded-full'
                src='https://randomuser.me/api/portraits/men/32.jpg'
                alt='user avatar'
                width='200'
                height='200'
                loading='lazy'
              />
              <div>
                <h6 className='text-lg font-bold text-gray-700 dark:text-white'>
                  Jack
                </h6>
              </div>
            </div>
            <p className='mt-8'>
              I absolutely love the camping gear I purchased here! The quality
              is top-notch, and it made my outdoor adventures even more
              enjoyable. Highly recommend!
            </p>
          </div>

          <div className='p-8 bg-white border border-gray-100 shadow-2xl aspect-auto rounded-3xl dark:bg-gray-800 dark:border-gray-700 shadow-gray-600/10 dark:shadow-none'>
            <div className='flex gap-4'>
              <img
                className='w-12 h-12 rounded-full'
                src='https://randomuser.me/api/portraits/women/24.jpg'
                alt='user avatar'
                width='200'
                height='200'
                loading='lazy'
              />
              <div>
                <h6 className='text-lg font-bold text-gray-700 dark:text-white'>
                  Emma
                </h6>
              </div>
            </div>
            <p className='mt-8'>
              The camping equipment I bought exceeded my expectations! It's
              durable, practical, and exactly what I needed for my outdoor
              expeditions. Thank you for great products!
            </p>
          </div>

          <div className='p-8 bg-white border border-gray-100 shadow-2xl aspect-auto rounded-3xl dark:bg-gray-800 dark:border-gray-700 shadow-gray-600/10 dark:shadow-none'>
            <div className='flex gap-4'>
              <img
                className='w-12 h-12 rounded-full'
                src='https://randomuser.me/api/portraits/men/12.jpg'
                alt='user avatar'
                width='200'
                height='200'
                loading='lazy'
              />
              <div>
                <h6 className='text-lg font-bold text-gray-700 dark:text-white'>
                  Liam
                </h6>
              </div>
            </div>
            <p className='mt-8'>
              This store has everything a camper needs! I'm impressed by the
              range of products and the helpfulness of the staff. Definitely my
              go-to place for outdoor gear.
            </p>
          </div>

          <div className='p-8 bg-white border border-gray-100 shadow-2xl aspect-auto rounded-3xl dark:bg-gray-800 dark:border-gray-700 shadow-gray-600/10 dark:shadow-none'>
            <div className='flex gap-4'>
              <img
                className='w-12 h-12 rounded-full'
                src='https://randomuser.me/api/portraits/women/42.jpg'
                alt='user avatar'
                width='200'
                height='200'
                loading='lazy'
              />
              <div>
                <h6 className='text-lg font-bold text-gray-700 dark:text-white'>
                  Sophia
                </h6>
              </div>
            </div>
            <p className='mt-8'>
              As an avid hiker, I rely on durable gear. The products I bought
              from this store have held up exceptionally well on rugged trails.
              I'm very satisfied with my purchase!
            </p>
          </div>

          <div className='p-8 bg-white border border-gray-100 shadow-2xl aspect-auto rounded-3xl dark:bg-gray-800 dark:border-gray-700 shadow-gray-600/10 dark:shadow-none'>
            <div className='flex gap-4'>
              <img
                className='w-12 h-12 rounded-full'
                src='https://randomuser.me/api/portraits/men/52.jpg'
                alt='user avatar'
                width='200'
                height='200'
                loading='lazy'
              />
              <div>
                <h6 className='text-lg font-bold text-gray-700 dark:text-white'>
                  Noah
                </h6>
              </div>
            </div>
            <p className='mt-8'>
              Great experience shopping here! The staff was knowledgeable and
              helped me find exactly what I needed for my camping trip. Will
              definitely shop here again!
            </p>
          </div>

          <div className='p-8 bg-white border border-gray-100 shadow-2xl aspect-auto rounded-3xl dark:bg-gray-800 dark:border-gray-700 shadow-gray-600/10 dark:shadow-none'>
            <div className='flex gap-4'>
              <img
                className='w-12 h-12 rounded-full'
                src='https://randomuser.me/api/portraits/women/34.jpg'
                alt='user avatar'
                width='200'
                height='200'
                loading='lazy'
              />
              <div>
                <h6 className='text-lg font-bold text-gray-700 dark:text-white'>
                  Lily
                </h6>
              </div>
            </div>
            <p className='mt-8'>
              My camping experience was enhanced by the high-quality gear I got
              from this store. The products are durable and practical, perfect
              for outdoor enthusiasts like me!
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Testimonial
