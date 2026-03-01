import React from 'react'
import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({children, allowedRoles }) => {
    console.log('allowUser roles', allowedRoles);

    // const { token, user } = useSelector((state) => state.auth);
    const { token, user } = {
        token: "jwt_token",
        user: {
            id: 1,
            role: "admin" // or "user"
        }
    }
    // localStorage.setItem('auth', JSON.stringify({ token, user }));
    // const { token, user } = localStorage.getItem('auth') ? JSON.parse(localStorage.getItem('auth')) : { token: null, user: null };
  
  if (!token) return <Navigate to="/login" replace />;

  if (allowedRoles && !allowedRoles.includes(user?.role)) {
    return <Navigate to="/unauthorized" replace />;
  }

  return children;
}

export default ProtectedRoute