/* eslint-disable @typescript-eslint/no-unused-vars */
import { useGetAllProductsQuery } from '../redux/features/product/productApi'
import React from 'react'
import {
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from '@ant-design/icons'
import { Layout, Menu, theme } from 'antd'
import ProductCard from '../components/ProductCard'
import Loader from '../components/Loader'
const { Header, Content, Sider } = Layout

const items = [
  UserOutlined,
  VideoCameraOutlined,
  UploadOutlined,
  UserOutlined,
].map((icon, index) => ({
  key: String(index + 1),
  icon: React.createElement(icon),
  label: `nav ${index + 1}`,
}))

const TestProductPage = () => {
  const { data, isLoading, isError } = useGetAllProductsQuery(undefined)
  const products = data?.data

  if (isLoading) {
    return <Loader />
  }

  if (!isLoading && isError) {
    return <h1 className='text-6xl font-bold text-red-800 '>Error...</h1>
  }

  if (!isLoading && !isError && products?.length === 0) {
    return (
      <h1 className='text-6xl font-bold text-red-800 '>No Data Found...</h1>
    )
  }

  return (
    <Layout>
      <Sider
        breakpoint='lg'
        collapsedWidth='0'
        onBreakpoint={(broken) => {}}
        onCollapse={(collapsed, type) => {
          console.log(collapsed, type)
        }}
      >
        <div className='demo-logo-vertical' />
        <Menu
          theme='dark'
          mode='inline'
          defaultSelectedKeys={['4']}
          items={items}
        />
      </Sider>
      <Layout>
        {/* <Header style={{ padding: 0 }} /> */}

        <Content>
          <div className='grid grid-cols-1 gap-4 p-8 my-8 md:grid-cols-3'>
            {data?.data?.map((product) => {
              return <ProductCard key={product._id} product={product} />
            })}
          </div>
        </Content>
      </Layout>
    </Layout>
  )
}

export default TestProductPage
