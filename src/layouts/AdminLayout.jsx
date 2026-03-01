import { Outlet } from "react-router-dom";
import Loading from "../components/ui/Loading";
import { Suspense } from "react";

const AdminLayout = () => {
  return (
    <div>
      <h2>Admin Panel</h2>
      <Suspense fallback={<Loading />}>
        <Outlet />
      </Suspense>
    </div>
  );
};

export default AdminLayout;