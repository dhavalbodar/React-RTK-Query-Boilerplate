import { Outlet } from "react-router-dom";
import Loading from "../components/ui/Loading";
import { Suspense } from "react";

const AuthLayout = () => {
  return (
    <div>
      <h2>Auth Layout</h2>
      <Suspense fallback={<Loading />}>
        <Outlet />
      </Suspense>
    </div>
  );
};

export default AuthLayout;