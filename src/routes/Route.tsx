import { createBrowserRouter } from 'react-router-dom'
import MainLayout from '../layout/MainLayout'
import HomePage from '../pages/HomePage'
import ProductsPage from '../pages/ProductsPage'
import ProductDetails from '../pages/ProductDetails'
import TestProductPage from '../pages/TestProductPage'
import ProductManagement from '../pages/ProductManagement'
import EditProduct from '../pages/EditProduct'

const Route = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    // errorElement: <ErrorPage />,
    children: [
      {
        path: '/',
        element: <HomePage />,
      },
      {
        path: '/products',
        element: <ProductsPage />,
      },
      {
        path: '/test-products',
        element: <TestProductPage />,
      },
      {
        path: '/products/:productId',
        element: <ProductDetails />,
      },
      {
        path: '/manage-products',
        element: <ProductManagement />,
      },
      {
        path: '/editProduct/:productId',
        element: <EditProduct />,
      },
    ],
  },
])

export default Route
