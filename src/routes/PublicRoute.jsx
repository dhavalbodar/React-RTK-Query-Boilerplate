// src/routes/PublicRoute.jsx

// import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

const PublicRoute = ({ children }) => {
//   const { token } = useSelector((state) => state.auth);
    const mockAuthState = {
        token: "jwt_token",
        user: {
            id: 1,
            role: "admin" // or "user"
        }
    }
    localStorage.setItem('auth', JSON.stringify(mockAuthState));
    // const { token } = localStorage.getItem('auth') ? JSON.parse(localStorage.getItem('auth')) : { token: null, user: null };
    
    if (mockAuthState.token) {
    // If user was redirected earlier, go back
    const redirectTo = sessionStorage.getItem("lastPath") || "/";

    return <Navigate to={redirectTo} replace />;
  }

  return children;
};

export default PublicRoute;