import { createBrowserRouter } from 'react-router-dom'
import MainLayout from '../layout/MainLayout'
import HomePage from '../pages/HomePage'
import ProductsPage from '../pages/ProductsPage'
import ProductDetails from '../pages/ProductDetails'
import ProductManagement from '../pages/ProductManagement'
import EditProduct from '../pages/EditProduct'
import CartPage from '../pages/CartPage'
import AboutPage from '../pages/AboutPage'
import ProductsByCategory from '../components/ProductsByCategory'
import CheckOut from '../pages/CheckOut'
import Success from '../pages/Success'
import ErrorPage from '../pages/ErrorPage'

const Route = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    errorElement: <ErrorPage />,
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
      {
        path: '/cart',
        element: <CartPage />,
      },
      {
        path: '/about',
        element: <AboutPage />,
      },
      {
        path: '/category/:category',
        element: <ProductsByCategory />,
      },
      {
        path: '/checkout',
        element: <CheckOut />,
      },
      {
        path: '/success',
        element: <Success />,
      },
    ],
  },
])

export default Route
