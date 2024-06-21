import { Suspense } from 'react'
import {  Route } from 'react-router-dom'
import routeConfigs from './RouteConfig'

const createElement = (route: IRouteType.IRouter): React.ReactNode => {
  if (!route.element) {
    return null
  }
  return (
    <Suspense fallback={<div>loading...</div>}>
      <route.element></route.element>
    </Suspense>
  )
}

const routeItem = (route: IRouteType.IRouter) => {
  return (
    <Route key={route.path} element={createElement(route)} path={route.path}>
      {RouteList(route.children ?? [])}
    </Route>
  )
}

const RouteList = (list: IRouteType.IRouter[]) => {
  return list.map(item => routeItem(item))
}



export default RouteList(routeConfigs)