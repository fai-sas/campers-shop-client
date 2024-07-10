import { useGetAllProductsQuery } from '../redux/features/product/productApi'
import React from 'react'
import {
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from '@ant-design/icons'
import { Layout, Menu, theme } from 'antd'
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

  let content = null

  if (isLoading) {
    content = <h1 className='text-6xl font-bold text-green-800 '>Loading...</h1>
  }

  if (!isLoading && isError) {
    content = <h1 className='text-6xl font-bold text-red-800 '>Error...</h1>
  }

  if (!isLoading && !isError && products?.length === 0) {
    content = (
      <h1 className='text-6xl font-bold text-red-800 '>No Data Found...</h1>
    )
  }

  // if (!isLoading && !isError && products?.length > 0) {
  //   content = (
  //     <div>
  //       <h1 className='text-2xl font-bold text-red-800 '>
  //         {data?.data?.map((item) => {
  //           return <li>{item?.name}</li>
  //         })}
  //       </h1>
  //     </div>
  //   )
  // }

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
        <Header style={{ padding: 0 }} />
        <Content style={{ margin: '24px 16px 0' }}>
          <div
            style={{
              padding: 24,
              minHeight: 360,
            }}
          >
            <div>
              <h1 className='text-2xl font-bold text-red-800 '>
                {data?.data?.map((item) => {
                  return <li>{item?.name}</li>
                })}
              </h1>
            </div>
          </div>
        </Content>
      </Layout>
    </Layout>
  )
}

export default TestProductPage
