/* eslint-disable @typescript-eslint/no-unused-vars */
import { Button, Col, Row } from 'antd'
import FormController from '../components/FormController'
import FormInput from '../components/FormInput'
import { FieldValues, SubmitHandler } from 'react-hook-form'
import { useAddProductMutation } from '../redux/features/product/productApi'

const ProductManagement = () => {
  const [addProduct, { isLoading, isSuccess, isError }] =
    useAddProductMutation()

  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    addProduct(data)
  }

  return (
    <FormController onSubmit={onSubmit}>
      <Row
        justify='center'
        gutter={16}
        align='middle'
        style={{ height: '50vh' }}
      >
        <Col span={3}>
          <FormInput type='text' name='name' label='Name' />
          <FormInput type='text' name='category' label='Category' />
          <FormInput type='text' name='description' label='Description' />
        </Col>
        <Col span={3}>
          <FormInput type='text' name='image' label='Image' />
          <FormInput type='number' name='price' label='Price' />
          <FormInput type='number' name='stock' label='Stock' />
        </Col>
        <Col span={2}>
          <FormInput type='number' name='quantity' label='Quantity' />
          <FormInput type='number' name='ratings' label='Rating' />
        </Col>
      </Row>
      <Button htmlType='submit' disabled={isLoading}>
        Add Product
      </Button>
    </FormController>
  )
}

export default ProductManagement
