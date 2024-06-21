import { lazy } from 'react'

const routeConfigs: IRouteType.IRouter[] = [
  {
    path: '/',
    element: lazy(() => import('@/views/home')),
    meta: { pageTitle: 'home' },
  },
  {
    path: '/raids',
    element: lazy(() => import('@/views/raids')),
    meta: { pageTitle: 'raids' },
  },
  {
    path: '/explorer',
    element: lazy(() => import('@/views/explorer')),
    meta: { pageTitle: 'explorer' },
  },
]

export default routeConfigs
