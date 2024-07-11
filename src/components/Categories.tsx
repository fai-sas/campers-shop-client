import { useGetAllProductsQuery } from '../redux/features/product/productApi'
import CategoryCard from './CategoryCard'

const Categories = () => {
  const { data, isLoading, isError } = useGetAllProductsQuery(undefined)

  const uniqueCategories = [
    ...new Set(data?.data?.map((item) => item.category)),
  ]

  console.log({ uniqueCategories })

  return (
    <>
      <div className='container p-4 mx-auto'>
        <h1 className='mb-4 text-2xl font-bold'>Categories</h1>
        <div className='grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4'>
          {uniqueCategories.map((category, index) => (
            <CategoryCard key={index} category={category} />
          ))}
        </div>
      </div>
    </>
  )
}

export default Categories
