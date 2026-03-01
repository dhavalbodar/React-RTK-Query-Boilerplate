import React from "react";

// lazy load all of the route components; the layouts/parent routers
// already render a <Suspense> boundary so the fallback will show
export const AdminDashboard = React.lazy(() =>
  import("../features/admin/pages/AdminDashboard")
);

export const AdminUsers = React.lazy(() =>
  import("../features/admin/pages/AdminUsers ")
);

export const UserDashboard = React.lazy(() =>
  import("../features/user/pages/UserDashboard")
);
export const UserProfile = React.lazy(() =>
  import("../features/user/pages/UserProfile")
);

export const Home = React.lazy(() => import("../pages/Home"));
export const Login = React.lazy(() =>
  import("../features/auth/pages/Login")
);
export const SignUp = React.lazy(() =>
  import("../features/auth/pages/SignUp")
);

export const publicRoutes = [
  { path: "/login", element: Login },
  { path: "/signup", element: SignUp },
];

export const adminRoutes = [
  { path: "dashboard", element: AdminDashboard },
  { path: "users", element: AdminUsers },
];

export const userRoutes = [
  { path: "dashboard", element: UserDashboard },
  { path: "profile", element: UserProfile },
];