import { Outlet } from "react-router-dom";
import Loading from "../components/ui/Loading";
import { Suspense } from "react";
import ErrorBoundary from "../components/common/ErrorBoundary";

const AuthLayout = () => {
  return (
    <div>
      <h2>Auth Layout</h2>
      <ErrorBoundary>
        <Suspense fallback={<Loading />}>
          <Outlet />
        </Suspense>
      </ErrorBoundary>
    </div>
  );
};

export default AuthLayout;