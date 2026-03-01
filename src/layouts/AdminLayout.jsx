import { Outlet } from "react-router-dom";
import Loading from "../components/ui/Loading";
import { Suspense } from "react";
import ErrorBoundary from "../components/common/ErrorBoundary";

const AdminLayout = () => {
  return (
    <div>
      <h2>Admin Panel</h2>
      <ErrorBoundary>
        <Suspense fallback={<Loading />}>
          <Outlet />
        </Suspense>
      </ErrorBoundary>
    </div>
  );
};

export default AdminLayout;