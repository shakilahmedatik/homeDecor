import { createBrowserRouter } from 'react-router'
import Products from '../Pages/Products'
import Home from '../Pages/Home'
import MainLayout from '../Layouts/MainLayout'
import ErrorPage from '../Pages/ErrorPage'
import Wishlist from '../Pages/Wishlist'

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
        loader: () => fetch('./furnitureData.json'),
      },
      {
        path: '/products',
        element: <Products />,
        loader: () => fetch('./furnitureData.json'),
      },
      {
        path: '/wishlist',
        element: <Wishlist />,
      },
    ],
  },
  //   {
  //     path: '*',
  //     element: <ErrorPage />,
  //   },
])

export default router
