import { Outlet } from "react-router-dom";
import ProviderNav from "../Components/Navs/ProviderNav";
import AdminNav from "../Components/Navs/AdminNav";
import { getUserData } from "../services/authService";

const ProviderLayout = () => {
  const user = getUserData();

  return (
    <div className="min-h-screen bg-background-light dark:bg-background-dark overflow-x-hidden ">
      {user && (
        <>
          <ProviderNav user={user} />
          {user.role == "admin" || (user.role == "super_admin" && <AdminNav />)}
        </>
      )}
      <div className="md:pt-40 pb-24 md:pb-34 pt-30 w-full p-4 md:p-8">
        <Outlet />
      </div>
    </div>
  );
};

export default ProviderLayout;
