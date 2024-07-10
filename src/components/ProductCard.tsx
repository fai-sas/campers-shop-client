import { Link } from 'react-router-dom'

const ProductCard = ({ product }) => {
  const { _id, name, image, description, price } = product

  return (
    <div className='relative my-8 text-gray-700 bg-white shadow-md rounded-xl bg-clip-border'>
      <div className='relative mx-4 -mt-6 overflow-hidden text-white shadow-lg h-80 rounded-xl bg-blue-gray-500 bg-clip-border shadow-blue-gray-500/40 bg-gradient-to-r from-blue-500 to-blue-600'>
        <img
          src={
            image ||
            'https://i5.walmartimages.com/seo/Better-Homes-Gardens-Mira-Swivel-Chair-Cream_51bf8cde-3692-4821-a735-be282022e068.309726e63c3a4f3ab95fc795e9270f64.jpeg'
          }
          alt={name}
        />
      </div>
      <div className='p-6'>
        <h5 className='block mb-2 font-sans text-xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900'>
          {name}
        </h5>
        <article className='flex justify-between '>
          <p className='block font-sans text-base antialiased font-light leading-relaxed text-inherit'>
            {description}
          </p>
          <p>${price}</p>
        </article>
      </div>
      <div className='p-6 pt-0'>
        <Link to={`/products/${_id}`}>
          <button
            data-ripple-light='true'
            type='button'
            className='select-none rounded-lg bg-blue-500 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-blue-500/20 transition-all hover:shadow-lg hover:shadow-blue-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none'
          >
            View More
          </button>
        </Link>
      </div>
    </div>
  )
}

export default ProductCard
