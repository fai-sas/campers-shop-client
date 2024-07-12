import Loader from '../components/Loader'
import { useGetAllCartsQuery } from '../redux/features/cart/cartApi'

const CartPage = () => {
  const { data, isLoading } = useGetAllCartsQuery(undefined)
  const cartData = data?.data
  console.log(cartData)

  if (isLoading) {
    return <Loader />
  }

  return (
    <section className='container p-8 mx-auto '>
      <h1 className='text-2xl font-bold'>Welcome to your cart</h1>
    </section>
  )
}

export default CartPage
