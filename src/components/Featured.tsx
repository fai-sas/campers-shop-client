import { useGetAllProductsQuery } from '../redux/features/product/productApi'
import Loader from './Loader'
import ProductCard from './ProductCard'
import { useEffect, useState } from 'react'

// Function to shuffle array without mutating the original array
function shuffleArray(array) {
  const newArray = [...array] // Create a new array to avoid mutating the original
  let currentIndex = newArray.length,
    temporaryValue,
    randomIndex

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {
    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex)
    currentIndex -= 1

    // And swap it with the current element.
    temporaryValue = newArray[currentIndex]
    newArray[currentIndex] = newArray[randomIndex]
    newArray[randomIndex] = temporaryValue
  }

  return newArray
}

const Featured = () => {
  const { data, isLoading, isError } = useGetAllProductsQuery(undefined)
  const [randomProducts, setRandomProducts] = useState([])

  useEffect(() => {
    if (!isLoading && !isError && data?.data?.length > 0) {
      // Shuffle the array to get random products
      const shuffledProducts = shuffleArray(data.data)
      // Select a subset of random products (e.g., first 3)
      const selectedProducts = shuffledProducts.slice(0, 3)
      setRandomProducts(selectedProducts)
    }
  }, [data, isLoading, isError])

  if (isLoading) {
    return <Loader />
  }

  if (isError || !randomProducts?.length) {
    return (
      <h1 className='text-6xl font-bold text-red-800 '>No Data Found...</h1>
    )
  }

  return (
    <section
      data-aos='fade-up'
      data-aos-duration='2000'
      className='container p-8 mx-auto mt-12'
    >
      <div className='flex flex-col items-start w-full max-w-xl px-4 mx-auto lg:px-8 lg:max-w-screen-xl'>
        <h1 className='text-2xl font-bold '>Featured Products</h1>
        <div className='grid grid-cols-1 gap-4 my-8 md:grid-cols-3'>
          {randomProducts.map((product) => (
            <ProductCard key={product?._id} product={product} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Featured
