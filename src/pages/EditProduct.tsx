/* eslint-disable @typescript-eslint/no-unused-vars */
import { Button, Col, Pagination, Row } from 'antd'
import FormController from '../components/FormController'
import FormInput from '../components/FormInput'
import {
  useGetSingleProductQuery,
  useUpdateProductMutation,
} from '../redux/features/product/productApi'
import { FieldValues, SubmitHandler } from 'react-hook-form'
import { useNavigate, useParams } from 'react-router-dom'
import toast from 'react-hot-toast'

const EditProduct = () => {
  const navigate = useNavigate()
  const { productId } = useParams<{ productId: string }>()

  if (!productId) {
    return <div>No product ID found</div>
  }

  const {
    data: singleProduct,
    isLoading,
    isError,
  } = useGetSingleProductQuery(productId)
  const [updateProduct] = useUpdateProductMutation()

  const defaultValues = {
    name: singleProduct?.data?.name || '',
    price: singleProduct?.data?.price || 0,
    image: singleProduct?.data?.image || '',
    quantity: singleProduct?.data?.quantity || 0,
    description: singleProduct?.data?.description || '',
    stock: singleProduct?.data?.stock || 0,
    ratings: singleProduct?.data?.ratings || 0,
    category: singleProduct?.data?.category || '',
  }

  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    await updateProduct({ id: productId, data })
    toast.success('Product Edited Successfully!')
    navigate(`/manage-products`)
  }

  if (isLoading) {
    return <div>Loading...</div>
  }

  if (isError) {
    return <div>Error loading product</div>
  }

  return (
    <section className='container p-8 mx-auto '>
      <div className='w-full max-w-xl px-4 py-8 mx-auto lg:px-8 lg:max-w-screen-xl'>
        <FormController onSubmit={onSubmit} defaultValues={defaultValues}>
          <Row
            justify='center'
            gutter={16}
            align='middle'
            style={{ height: '50vh' }}
          >
            <Col span={12}>
              <FormInput type='text' name='name' label='Name' />
              <FormInput type='text' name='category' label='Category' />
              <FormInput type='text' name='description' label='Description' />
              <FormInput type='text' name='image' label='Image' />
            </Col>
            <Col span={12}>
              <FormInput type='number' name='price' label='Price' />
              <FormInput type='number' name='stock' label='Stock' />
              <FormInput type='number' name='ratings' label='Rating' />
            </Col>
            <Button
              className='text-lg font-bold '
              type='primary'
              htmlType='submit'
              disabled={isLoading}
            >
              Edit Product
            </Button>
          </Row>
        </FormController>
      </div>
    </section>
  )
}

export default EditProduct
