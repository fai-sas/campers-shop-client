import { useEffect, useState } from 'react'
import Loader from '../components/Loader'
import {
  useDeleteCartMutation,
  useGetAllCartsQuery,
  useUpdateCartMutation,
} from '../redux/features/cart/cartApi'
import { Button } from 'antd'
import toast from 'react-hot-toast'
import { useNavigate } from 'react-router-dom'

const CartPage = () => {
  const navigate = useNavigate()
  const { data, isLoading } = useGetAllCartsQuery(undefined)
  const [updateCart] = useUpdateCartMutation()
  const [deleteCart] = useDeleteCartMutation()
  const [totalPrice, setTotalPrice] = useState(0)

  const handleUpdateQuantity = async (itemId: string, quantity: number) => {
    try {
      await updateCart({
        id: itemId,
        data: { quantity: Number(quantity) },
      }).unwrap()
      toast.success('Quantity updated successfully!')
    } catch (error) {
      toast.error(error?.data?.message || 'Failed to update quantity')
    }
  }

  const handleRemoveFromCart = async (id: string) => {
    try {
      await deleteCart(id).unwrap()
      toast.success('Product removed from cart successfully!')
    } catch (error) {
      toast.error(error?.data?.message || 'Failed to remove product from cart')
    }
  }

  const calculateTotalPrice = () => {
    if (data?.data) {
      return data.data.reduce((total, item) => {
        return total + item.quantity * item.cartProduct.price
      }, 0)
    }
    return 0
  }

  useEffect(() => {
    setTotalPrice(calculateTotalPrice())
  }, [data])

  if (isLoading) {
    return <Loader />
  }

  return (
    <section className='py-12 bg-white'>
      <div className='container max-w-2xl mx-auto'>
        <h1 className='mb-8 text-3xl font-semibold'>Shopping Cart</h1>
        {data?.data?.length === 0 ? (
          <p className='text-lg'>Your cart is empty.</p>
        ) : (
          <div>
            {data?.data.map((item) => (
              <div
                key={item._id}
                className='flex items-center justify-between py-4 border-b border-gray-300'
              >
                <div className='flex items-center'>
                  {item.cartProduct && item.cartProduct.image && (
                    <>
                      <img
                        src={item.cartProduct.image}
                        alt={item.cartProduct.name}
                        className='object-cover w-24 h-24 mr-4 rounded'
                      />
                      <div>
                        <h2 className='text-xl font-semibold'>
                          {item.cartProduct.name}
                        </h2>
                        <p className='text-gray-500'>
                          ${item.cartProduct.price}
                        </p>
                      </div>
                    </>
                  )}
                </div>
                <div className='flex items-center'>
                  <button
                    onClick={() =>
                      handleUpdateQuantity(item._id, item.quantity - 1)
                    }
                    disabled={item.quantity <= 1 || !item.cartProduct}
                    className='px-2 py-1 mr-2 text-white bg-gray-500 rounded disabled:opacity-50'
                  >
                    -
                  </button>
                  <input
                    type='number'
                    min='1'
                    max={item.cartProduct?.stock}
                    value={item.quantity}
                    onChange={(e) =>
                      handleUpdateQuantity(item._id, Number(e.target.value))
                    }
                    className='w-16 p-1 mr-2 text-center border border-gray-300 rounded'
                  />
                  <button
                    onClick={() =>
                      handleUpdateQuantity(item._id, item.quantity + 1)
                    }
                    disabled={
                      !item.cartProduct ||
                      item.quantity >= item.cartProduct.stock
                    }
                    className='px-2 py-1 mr-4 text-white bg-gray-500 rounded disabled:opacity-50'
                  >
                    +
                  </button>
                  <button
                    onClick={() => handleRemoveFromCart(item._id)}
                    className='font-bold text-red-500'
                  >
                    Remove
                  </button>
                </div>
              </div>
            ))}

            <div className='mt-8'>
              <h2 className='text-xl font-semibold'>Pricing Details</h2>
              <p className='text-lg'>Total: ${totalPrice.toFixed(2)}</p>
            </div>
            <div className='mt-8'>
              <Button
                onClick={() => navigate(`/checkout`)}
                className='py-6 text-lg font-bold'
                type='primary'
              >
                Place Order
              </Button>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}

export default CartPage
