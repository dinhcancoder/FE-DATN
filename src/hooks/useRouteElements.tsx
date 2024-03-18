import { useRoutes } from 'react-router-dom'
import MainLayout from '~/layouts/MainLayout'
import Home from '~/pages/Home'
import Login from '~/pages/Login'
import Register from '~/pages/Register'
import Video from '~/pages/Video'
import Video_Watch from '~/pages/Video_Watch'

function useRouteElements() {
  const routeElements = useRoutes([
    {
      path: '/',
      index: true,
      element: (
        <MainLayout>
          <Home />
        </MainLayout>
      )
    },
    {
      path: '/login',
      index: true,
      element: <Login />
    },
    {
      path: '/register',
      index: true,
      element: <Register />
    },
    {
      path: '/video',
      index: true,
      element: (
        <MainLayout>
          <Video />
        </MainLayout>
      )
    },
    {
      path: '/video-watch',
      index: true,
      element: (
        <MainLayout>
          <Video_Watch />
        </MainLayout>
      )
    }
  ])

  return routeElements
}

export default useRouteElements
