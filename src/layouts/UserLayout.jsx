import React, { Suspense } from 'react'
import { Outlet } from 'react-router-dom'
import Loading from '../components/ui/Loading'

const UserLayout = () => {
  return (
    <div className="user-layout">
      <div>UserLayout</div>
      <Suspense fallback={<Loading />}>
        <Outlet />
      </Suspense>
    </div>
  )
}

export default UserLayout