import Test from '../components/Test'
import { useGetAllProductsQuery } from '../redux/features/product/productApi'

const ProductsPage = () => {
  const { data, isLoading, isError } = useGetAllProductsQuery(undefined)
  const products = data?.data

  let content = null

  if (isLoading) {
    content = <h1 className='text-6xl font-bold text-green-800 '>Loading...</h1>
  }

  if (!isLoading && isError) {
    content = <h1 className='text-6xl font-bold text-red-800 '>Error...</h1>
  }

  if (!isLoading && !isError && products?.length === 0) {
    content = (
      <h1 className='text-6xl font-bold text-red-800 '>No Data Found...</h1>
    )
  }

  if (!isLoading && !isError && products?.length > 0) {
    return (content = (
      <div>
        <Test />
        <h1 className='text-2xl font-bold text-red-800 '>
          {data?.data?.map((item) => {
            return <li>{item?.name}</li>
          })}
        </h1>
      </div>
    ))
  }

  return content
}

export default ProductsPage
