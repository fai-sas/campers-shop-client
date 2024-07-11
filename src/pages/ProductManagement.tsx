/* eslint-disable @typescript-eslint/no-unused-vars */
import { Button, Col, Row, Modal } from 'antd'
import FormController from '../components/FormController'
import FormInput from '../components/FormInput'
import { FieldValues, SubmitHandler } from 'react-hook-form'
import {
  useAddProductMutation,
  useDeleteProductMutation,
  useGetAllProductsQuery,
} from '../redux/features/product/productApi'
import { useState } from 'react'
import toast from 'react-hot-toast'
import { Link } from 'react-router-dom'
import Loader from '../components/Loader'

const ProductManagement = () => {
  const { data, isLoading, isError } = useGetAllProductsQuery(undefined)
  const [addProduct] = useAddProductMutation()
  const [deleteProduct, { isSuccess }] = useDeleteProductMutation()
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [confirmDelete, setConfirmDelete] = useState<string | null>(null)

  const showModal = () => {
    setIsModalOpen(true)
  }

  const handleOk = () => {
    document.getElementById('form-submit-button')?.click()
    toast.success('Product Added!')
  }

  const handleCancel = () => {
    setIsModalOpen(false)
  }

  if (isLoading) {
    return <Loader />
  }

  if (isError) {
    return <div>Error loading products</div>
  }

  const productData =
    data?.data?.map((item) => ({
      key: item?._id,
      name: item?.name,
      price: item?.price,
      category: item?.category,
      image: item?.image,
    })) || []

  const handleDelete = (productId: string) => {
    console.log(`Deleting product with id: ${productId}`)
    if (productId) {
      deleteProduct(productId)
    }
    setConfirmDelete(null)
    toast.error('Product Deleted!')
  }

  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    console.log(data)
    await addProduct(data)
    setIsModalOpen(false)
  }

  return (
    <>
      <div className='container p-4 mx-auto'>
        <div className='flex items-center justify-between mb-4'>
          <h1 className='text-2xl font-bold'>Manage Product</h1>
          <button
            onClick={showModal}
            className='px-4 py-2 text-white bg-blue-500 rounded'
          >
            Create New Product
          </button>
        </div>
        <div className='overflow-x-auto'>
          <table className='min-w-full bg-white'>
            <thead>
              <tr>
                <th className='px-4 py-2 text-sm font-medium leading-4 text-left text-gray-600 border-b border-gray-200 bg-gray-50'>
                  Image
                </th>
                <th className='px-4 py-2 text-sm font-medium leading-4 text-left text-gray-600 border-b border-gray-200 bg-gray-50'>
                  Name
                </th>
                <th className='px-4 py-2 text-sm font-medium leading-4 text-left text-gray-600 border-b border-gray-200 bg-gray-50'>
                  Price
                </th>
                <th className='px-4 py-2 text-sm font-medium leading-4 text-left text-gray-600 border-b border-gray-200 bg-gray-50'>
                  Category
                </th>
                <th className='px-4 py-2 text-sm font-medium leading-4 text-left text-gray-600 border-b border-gray-200 bg-gray-50'>
                  Actions
                </th>
              </tr>
            </thead>
            <tbody>
              {productData.map((product) => (
                <tr key={product.key}>
                  <td className='px-4 py-2 border-b border-gray-200'>
                    <img
                      src={product?.image}
                      alt='product'
                      className='object-cover w-16 h-16'
                    />
                  </td>
                  <td className='px-4 py-2 border-b border-gray-200'>
                    {product.name}
                  </td>
                  <td className='px-4 py-2 border-b border-gray-200'>
                    ${product.price}
                  </td>
                  <td className='px-4 py-2 border-b border-gray-200'>
                    {product.category}
                  </td>
                  <td className='px-4 py-2 border-b border-gray-200'>
                    <Link to={`/editProduct/${product.key}`}>
                      <button className='px-2 py-1 mr-2 text-white bg-yellow-500 rounded'>
                        Edit
                      </button>
                    </Link>
                    <button
                      className='px-2 py-1 text-white bg-red-500 rounded'
                      onClick={() => setConfirmDelete(product.key)}
                    >
                      Delete
                    </button>

                    {confirmDelete === product.key && (
                      <div className='absolute p-4 bg-white rounded shadow-lg'>
                        <p>Are you sure you want to delete this product?</p>
                        <button
                          className='px-2 py-1 mr-2 text-white bg-green-500 rounded'
                          onClick={() => handleDelete(product.key)}
                        >
                          Yes
                        </button>
                        <button
                          className='px-2 py-1 text-white bg-gray-500 rounded'
                          onClick={() => setConfirmDelete(null)}
                        >
                          No
                        </button>
                      </div>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* create new product */}
      <Modal
        title='Create New Product'
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        okText='Add Product'
      >
        <FormController onSubmit={onSubmit}>
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
            {/* <Col span={8}>
              <FormInput type='number' name='quantity' label='Quantity' />
            </Col>  */}
          </Row>
          <Button
            id='form-submit-button'
            htmlType='submit'
            style={{ display: 'none' }}
          >
            Add Product
          </Button>
        </FormController>
      </Modal>
    </>
  )
}

export default ProductManagement
