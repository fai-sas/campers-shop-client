import { FieldValues, SubmitHandler } from 'react-hook-form'
import FormController from '../components/FormController'
import Loader from '../components/Loader'
import { useGetAllCartsQuery } from '../redux/features/cart/cartApi'
import { useNavigate } from 'react-router-dom'
import toast from 'react-hot-toast'
import FormInput from '../components/FormInput'
import { Button } from 'antd'

const CheckOut = () => {
  const navigate = useNavigate()
  const { isLoading } = useGetAllCartsQuery(undefined)

  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    console.log(data)

    if (!data.name && !data.email && !data.phone && !data.address) {
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
    <section className='container p-8 mx-auto '>
      <h1 className='py-4 text-2xl font-bold'>Welcome to Checkout</h1>
      <h1 className='pb-3 text-3xl font-bold'>
        Please Provide Information Below
      </h1>
      <article className=''>
        <FormController onSubmit={onSubmit}>
          <FormInput type='text' name='name' label='Name' />
          <FormInput type='email' name='email' label='email' />
          <FormInput type='text' name='phone' label='Phone Number' />
          <FormInput type='textArea' name='address' label='Delivery Address' />
          <Button htmlType='submit' disabled={isLoading}>
            CheckOut
          </Button>
        </FormController>
      </article>
    </section>
  )
}

export default CheckOut
