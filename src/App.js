import React from 'react'
import { createBrowserRouter } from 'react-router-dom'
import { ErrorPage } from './components'
import Layout from './layout/Layout'
import { Home } from './pages'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
    ],
  },
])

export default router
