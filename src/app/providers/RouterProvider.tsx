// import { createElement, lazy } from 'react'
import {
  createBrowserRouter,
  redirect,
  useRouteError,
} from 'react-router-dom'
import PageNotFound from '~/pages/error/page-404'
import Home from '~/pages/home'
import MainLayout from '~/pages/layouts/MainLayout'
import PopupLayout from '~/pages/layouts/PopupLayout'
import User from '~/pages/user'
import PubIndex from '~/publish'
import { pathKeys } from '~/shared/router'

const isDevelopment = process.env.NODE_ENV === 'development';

export const router = createBrowserRouter([
  {
    errorElement: <BubbleError/>,
    children: [
      {
        element: <MainLayout/>,
        children: [
            {path: pathKeys.home(), element: <Home/>},
            {path: pathKeys.user(), element: <User/>},
            {path: pathKeys.page404(), element: <PageNotFound/>}
        ],
      },
      {
        element: <PopupLayout/>,
        children: [
            {path: pathKeys.popupMenu1(), element: <User/>}
        ],
      },
      ...(isDevelopment
        ? [
            {
              path: pathKeys.publish(),
              element: <PubIndex />,
            },
          ]
        : []),
      {
        loader: async () => redirect(pathKeys.page404()),
        path: '*',
      },
    ],
  }
])

// https://github.com/remix-run/react-router/discussions/10166
function BubbleError() {
  const error = useRouteError()

  if (error) throw error
  return null
}