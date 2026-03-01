import React from 'react'
import { Route, Routes } from 'react-router-dom'
import AuthLayout from '../layouts/AuthLayout'
import { adminRoutes, publicRoutes, userRoutes } from './routeConfig'
import Unauthorized from '../pages/Unauthorized'
import NotFound from '../pages/NotFound'
import ProtectedRoute from './ProtectedRoute'
import UserLayout from '../layouts/UserLayout'
import AdminLayout from '../layouts/AdminLayout'
import PublicRoute from './PublicRoute'
import usePreviousPath from '../hooks/usePreviousPath'
import Home from '../pages/Home'

const AppRouter = () => {
  usePreviousPath();
  return (
    <Routes>
      {/* Define your routes here */}

      <Route path="/" element={<Home />} />

      <Route element={
        <PublicRoute>
          <AuthLayout />
        </PublicRoute>
      }>
        {publicRoutes.map(({ path, element }) => (
          <Route key={path} path={path} element={React.createElement(element)} />
        ))}
      </Route>

      {/* public routes */}
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

      {/* admin routes */}
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
  )
}

export default AppRouter