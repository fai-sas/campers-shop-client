import { useParams } from 'react-router-dom'
import { useGetAllProductsQuery } from '../redux/features/product/productApi'
import ProductCard from './ProductCard'
import Loader from './Loader'

const ProductsByCategory = () => {
  const { category } = useParams()
  const { data, isLoading, isError } = useGetAllProductsQuery(undefined)

  const filteredProducts = data?.data?.filter(
    (product) => product.category === category
  )

  if (isLoading) {
    return <Loader />
  }

  return (
    <div className='container p-4 mx-auto'>
      <h1 className='mb-4 text-2xl font-bold'>
        Products by Category: {category}
      </h1>
      {isLoading ? (
        <Loader />
      ) : isError ? (
        <div>Error loading products</div>
      ) : filteredProducts.length === 0 ? (
        <div>No products found for this category</div>
      ) : (
        <div
          data-aos='fade-up'
          data-aos-duration='1000'
          className='grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4'
        >
          {filteredProducts.map((product) => (
            <ProductCard product={product} />
          ))}
        </div>
      )}
    </div>
  )
}

export default ProductsByCategory
