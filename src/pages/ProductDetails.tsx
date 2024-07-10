import { useParams } from 'react-router-dom'
import { useGetSingleProductQuery } from '../redux/features/product/productApi'

const ProductDetails = () => {
  const { productId } = useParams()
  const { data, isLoading, isError } = useGetSingleProductQuery(productId)
  const product = data?.data

  return <div className='p-12 text-4xl font-bold'>{product?._id}</div>
}

export default ProductDetails
