import { Outlet } from "react-router-dom";
import UserNav from "../Components/Navs/UserNav";
import ScrollProgress from "../Components/ScrollProgress";

const ClientLayout = () => {
  return (
    <div className="min-h-screen bg-background-light dark:bg-background-dark overflow-x-hidden">
      <ScrollProgress />
      <UserNav />
      <Outlet />
    </div>
  );
};

export default ClientLayout;
