import { useParams } from 'react-router-dom'
import { useGetAllProductsQuery } from '../redux/features/product/productApi'
import ProductCard from './ProductCard'

const ProductsByCategory = () => {
  const { category } = useParams()
  const { data, isLoading, isError } = useGetAllProductsQuery(undefined)

  const filteredProducts = data?.data?.filter(
    (product) => product.category === category
  )

  return (
    <div className='container p-4 mx-auto'>
      <h1 className='mb-4 text-2xl font-bold'>
        Products by Category: {category}
      </h1>
      {isLoading ? (
        <div>Loading...</div>
      ) : isError ? (
        <div>Error loading products</div>
      ) : filteredProducts.length === 0 ? (
        <div>No products found for this category</div>
      ) : (
        <div className='grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4'>
          {filteredProducts.map((product) => (
            <ProductCard product={product} />
            // <div
            //   key={product._id}
            //   className='overflow-hidden bg-white rounded-lg shadow-lg'
            // >
            //   <img
            //     className='object-cover w-full h-48'
            //     src={product.images}
            //     alt={product.name}
            //   />
            //   <div className='p-4'>
            //     <p className='text-xl font-bold'>{product.name}</p>
            //     <p className='text-gray-600'>${product.price}</p>
            //   </div>
            // </div>
          ))}
        </div>
      )}
    </div>
  )
}

export default ProductsByCategory
