import React, { Suspense } from 'react'
import { Outlet } from 'react-router-dom'
import Loading from '../components/ui/Loading'
import ErrorBoundary from '../components/common/ErrorBoundary'

const UserLayout = () => {
  return (
    <div className="user-layout">
      <div>UserLayout</div>
      <ErrorBoundary>
        <Suspense fallback={<Loading />}>
          <Outlet />
        </Suspense>
      </ErrorBoundary>
    </div>
  )
}

export default UserLayout