import { createBrowserRouter } from 'react-router'
import Products from '../Pages/Products'
import Home from '../Pages/Home'
import MainLayout from '../Layouts/MainLayout'
import ErrorPage from '../Pages/ErrorPage'
import Wishlist from '../Pages/Wishlist'
import ProductDetails from '../Pages/ProductDetails'

// named export
const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    errorElement: <ErrorPage />,
    hydrateFallbackElement: <p>Loading...</p>,
    children: [
      {
        index: true,
        Component: Home,
      },
      {
        path: '/products',
        element: <Products />,
      },
      {
        path: '/wishlist',
        element: <Wishlist />,
      },
      {
        path: '/product/:id',
        element: <ProductDetails />,
      },
    ],
  },
  //   {
  //     path: '*',
  //     element: <ErrorPage />,
  //   },
])

export default router
