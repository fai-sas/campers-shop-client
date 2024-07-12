import { useParams } from 'react-router-dom'
import { useGetSingleProductQuery } from '../redux/features/product/productApi'
import { Button } from 'antd'
import Loader from '../components/Loader'
import { useAddCartMutation } from '../redux/features/cart/cartApi'
import { FieldValues, SubmitHandler } from 'react-hook-form'
import FormController from '../components/FormController'
import FormInput from '../components/FormInput'
import toast from 'react-hot-toast'

const ProductDetails = () => {
  const { productId } = useParams()
  console.log(productId)

  const { data, isLoading } = useGetSingleProductQuery(productId)
  const [addCart] = useAddCartMutation()

  const product = data?.data

  const handleAddToCart = async () => {
    try {
      await addCart({ cartProduct: productId }).unwrap()
      toast.success('Product added to cart successfully!')
    } catch (error) {
      toast.error('Failed to add product to cart')
    }
  }

  if (isLoading) {
    return <Loader />
  }

  return (
    <section className='overflow-hidden text-gray-700 bg-white body-font'>
      <div className='container px-5 py-24 mx-auto'>
        <div className='flex flex-wrap mx-auto lg:w-4/5'>
          <img
            alt={product?.name}
            className='object-cover object-center w-full border border-gray-200 rounded-lg shadow-md lg:w-1/2'
            src={product?.image}
          />
          <div className='w-full mt-6 lg:w-1/2 lg:pl-10 lg:py-6 lg:mt-0'>
            <h2 className='text-sm tracking-widest text-gray-500 title-font'>
              {product?.category}
            </h2>
            <h1 className='mb-1 text-3xl font-medium text-gray-900 title-font'>
              {product?.name}
            </h1>
            <div className='flex mb-4'>
              <span className='flex items-center'>
                {[...Array(Math.floor(product?.ratings || 0))].map((_, i) => (
                  <svg
                    key={i}
                    fill='currentColor'
                    stroke='currentColor'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth='2'
                    className='w-4 h-4 text-red-500'
                    viewBox='0 0 24 24'
                  >
                    <path d='M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z'></path>
                  </svg>
                ))}
                {[...Array(5 - Math.floor(product?.ratings || 0))].map(
                  (_, i) => (
                    <svg
                      key={i}
                      fill='none'
                      stroke='currentColor'
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth='2'
                      className='w-4 h-4 text-red-500'
                      viewBox='0 0 24 24'
                    >
                      <path d='M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z'></path>
                    </svg>
                  )
                )}
                <span className='ml-3 text-gray-600'>
                  {Math.floor(product?.ratings) || 0} Ratings
                </span>
              </span>
              <span className='flex py-2 pl-3 ml-3 border-l-2 border-gray-200'>
                <a className='text-gray-500' href='#'>
                  <svg
                    fill='currentColor'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth='2'
                    className='w-5 h-5'
                    viewBox='0 0 24 24'
                  >
                    <path d='M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z'></path>
                  </svg>
                </a>
                <a className='ml-2 text-gray-500' href='#'>
                  <svg
                    fill='currentColor'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth='2'
                    className='w-5 h-5'
                    viewBox='0 0 24 24'
                  >
                    <path d='M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z'></path>
                  </svg>
                </a>
                <a className='ml-2 text-gray-500' href='#'>
                  <svg
                    fill='currentColor'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth='2'
                    className='w-5 h-5'
                    viewBox='0 0 24 24'
                  >
                    <path d='M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z'></path>
                  </svg>
                </a>
              </span>
            </div>
            <h3 className='pb-6 italic font-semibold leading-relaxed '>
              {product?.stock} stocks remaining
            </h3>
            <p className='leading-relaxed'>{product?.description}</p>

            <div className='flex py-8'>
              <span className='text-2xl font-medium text-gray-900 title-font'>
                ${product?.price}
              </span>
              <Button type='primary' className='ml-4' onClick={handleAddToCart}>
                Add to Cart
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ProductDetails
