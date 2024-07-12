import { FieldValues, SubmitHandler } from 'react-hook-form'
import FormController from '../components/FormController'
import Loader from '../components/Loader'
import { useGetAllCartsQuery } from '../redux/features/cart/cartApi'
import { useNavigate } from 'react-router-dom'
import toast from 'react-hot-toast'
import FormInput from '../components/FormInput'
import { Button } from 'antd'
import { useState } from 'react'

const CheckOut = () => {
  const [paymentMethod, setPaymentMethod] = useState('cash')
  const navigate = useNavigate()
  const { isLoading } = useGetAllCartsQuery(undefined)

  const handlePaymentChange = (event) => {
    setPaymentMethod(event.target.value)
  }

  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    if (
      !data.name &&
      !data.email &&
      !data.phone &&
      !data.address &&
      !data.payment
    ) {
      toast.error('Please fill up information')
    } else {
      toast.success('Order Placed Successfully!')
      navigate(`/success`)
    }
  }

  if (isLoading) {
    return <Loader />
  }

  return (
    <section
      data-aos='fade-up'
      data-aos-duration='1000'
      className='container p-8 mx-auto '
    >
      <h1 className='py-4 text-2xl font-bold'>Welcome to Checkout</h1>
      <h1 className='pb-3 text-3xl font-bold'>
        Please Provide Information Below
      </h1>
      <article className=''>
        <FormController onSubmit={onSubmit}>
          <FormInput type='text' name='name' label='Name' />
          <FormInput type='email' name='email' label='Email' />
          <FormInput type='text' name='phone' label='Phone Number' />
          <FormInput type='textArea' name='address' label='Delivery Address' />

          <div className='my-4'>
            <p className='mb-2 font-medium'>Select Payment Method:</p>
            <div>
              <label
                htmlFor='cashOnDelivery'
                className='flex items-center cursor-pointer'
              >
                <input
                  type='radio'
                  id='cashOnDelivery'
                  name='paymentMethod'
                  value='cash'
                  onChange={handlePaymentChange}
                  checked={paymentMethod === 'cash'}
                  className='mr-2 cursor-pointer'
                />
                Cash on Delivery
              </label>
            </div>
            <div>
              <label
                htmlFor='stripe'
                className='flex items-center cursor-pointer'
              >
                <input
                  type='radio'
                  id='stripe'
                  name='paymentMethod'
                  value='stripe'
                  checked={paymentMethod === 'stripe'}
                  onChange={handlePaymentChange}
                  className='mr-2 cursor-pointer'
                />
                Stripe
              </label>
            </div>
          </div>

          <Button type='primary' htmlType='submit' disabled={isLoading}>
            CheckOut
          </Button>
        </FormController>
      </article>
    </section>
  )
}

export default CheckOut
