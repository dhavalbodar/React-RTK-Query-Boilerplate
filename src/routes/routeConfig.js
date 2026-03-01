import AdminDashboard from "../features/admin/pages/AdminDashboard";

import UserDashboard from "../features/user/pages/UserDashboard";
import UserProfile from "../features/user/pages/UserProfile";
import Home from "../pages/Home";
import Login from "../features/auth/pages/Login";
import SignUp from "../features/auth/pages/SignUp";
import AdminUsers from "../features/admin/pages/AdminUsers ";

export const publicRoutes = [
    { path: "/login", element: Login },
    { path: "/signup", element: SignUp },

];
export const adminRoutes = [
    { path: "dashboard", element: AdminDashboard },
    { path: "users", element:AdminUsers },
];

export const userRoutes = [
  { path: "dashboard", element: UserDashboard },
  { path: "profile", element: UserProfile },
];