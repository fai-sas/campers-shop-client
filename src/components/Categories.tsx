import { useGetAllProductsQuery } from '../redux/features/product/productApi'
import CategoryCard from './CategoryCard'
import Loader from './Loader'

const Categories = () => {
  const { data, isLoading, isError } = useGetAllProductsQuery(undefined)

  const uniqueCategories = [
    ...new Set(data?.data?.map((item) => item.category)),
  ]

  if (isLoading) {
    return <Loader />
  }

  return (
    <>
      <div className='container p-4 mx-auto'>
        <div className='flex flex-col items-start w-full max-w-xl px-4 mx-auto lg:px-8 lg:max-w-screen-xl'>
          <h1 className='py-8 mb-4 text-2xl font-bold'>Categories</h1>
          <div className='grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 '>
            {uniqueCategories.map((category, index) => (
              <CategoryCard key={index} category={category} />
            ))}
          </div>
        </div>
      </div>
    </>
  )
}

export default Categories
