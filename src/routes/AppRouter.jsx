import React, { Suspense } from 'react'
import { Route, Routes } from 'react-router-dom'
import usePreviousPath from '../hooks/usePreviousPath'

// lazily load every component used in routes
const AuthLayout = React.lazy(() => import('../layouts/AuthLayout'))
const UserLayout = React.lazy(() => import('../layouts/UserLayout'))
const AdminLayout = React.lazy(() => import('../layouts/AdminLayout'))
const Unauthorized = React.lazy(() => import('../pages/Unauthorized'))
const NotFound = React.lazy(() => import('../pages/NotFound'))
const Home = React.lazy(() => import('../pages/Home'))
const ProtectedRoute = React.lazy(() => import('./ProtectedRoute'))
const PublicRoute = React.lazy(() => import('./PublicRoute'))

import { adminRoutes, publicRoutes, userRoutes } from './routeConfig'

const AppRouter = () => {
  usePreviousPath();
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route path="/" element={<Home />} />

        <Route
          element={
            <PublicRoute>
              <AuthLayout />
            </PublicRoute>
          }
        >
          {publicRoutes.map(({ path, element }) => (
            <Route key={path} path={path} element={React.createElement(element)} />
          ))}
        </Route>

        <Route
          path="/user"
          element={
            <ProtectedRoute allowedRoles={["user"]}>
              <UserLayout />
            </ProtectedRoute>
          }
        >
          {userRoutes.map(({ path, element }) => (
            <Route key={path} path={path} element={React.createElement(element)} />
          ))}
        </Route>

        <Route
          path="/admin"
          element={
            <ProtectedRoute allowedRoles={["admin"]}>
              <AdminLayout />
            </ProtectedRoute>
          }
        >
          {adminRoutes.map(({ path, element }) => (
            <Route key={path} path={path} element={React.createElement(element)} />
          ))}
        </Route>

        <Route path="/unauthorized" element={<Unauthorized />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Suspense>
  )
}

export default AppRouter