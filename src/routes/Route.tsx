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
    ],
  },
])

export default Route
