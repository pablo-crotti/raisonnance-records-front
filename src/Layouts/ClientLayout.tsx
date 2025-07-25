import { Outlet } from "react-router-dom";

const ClientLayout = () => {
  return (
    <div className="min-h-screen bg-background-light dark:bg-background-dark overflow-x-hidden">
      <Outlet />
    </div>
  );
};

export default ClientLayout;
