/* eslint-disable @typescript-eslint/no-unused-vars */
import { Button, Col, Row } from 'antd'
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

  console.log(productId)

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
    <FormController onSubmit={onSubmit} defaultValues={defaultValues}>
      <Row
        justify='center'
        gutter={16}
        align='middle'
        style={{ height: '50vh' }}
      >
        <Col span={8}>
          <FormInput type='text' name='name' label='Name' />
          <FormInput type='text' name='category' label='Category' />
          <FormInput type='text' name='description' label='Description' />
        </Col>
        <Col span={8}>
          <FormInput type='text' name='image' label='Image' />
          <FormInput type='number' name='price' label='Price' />
          <FormInput type='number' name='stock' label='Stock' />
        </Col>
        <Col span={8}>
          <FormInput type='number' name='quantity' label='Quantity' />
          <FormInput type='number' name='ratings' label='Rating' />
        </Col>
      </Row>
      <Button htmlType='submit' disabled={isLoading}>
        Edit Product
      </Button>
    </FormController>
  )
}

export default EditProduct
