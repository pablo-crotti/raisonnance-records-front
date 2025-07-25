import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
import PrivateRoute from "./Components/PrivateRoute";
import Login from "./Pages/Login";
import ClientLayout from "./Layouts/ClientLayout";
import AdminIndex from "./Pages/Provider/Index.tsx";

import "./i18n/config.ts";
import Index from "./Pages/Index.tsx";
import ProviderLayout from "./Layouts/ProviderLayout.tsx";
import { Test } from "./Pages/Provider/Test.tsx";
import { ToastContainer } from "react-toastify";
import NotFound from "./Pages/NotFound.tsx";
import AdminRoute from "./Components/AdminRoute.tsx";
import Dashboard from "./Pages/Admin/Dashboard.tsx";
import Content from "./Pages/Admin/Content/Index.tsx";

function App() {
  return (
    <BrowserRouter>
      <ToastContainer />
      <Routes>
        <Route path="/login" element={<Login />} />

        <Route path="/" element={<ClientLayout />}>
          <Route index element={<Index />} />
          <Route path="/*" element={<NotFound />} />
        </Route>

        <Route
          path="/admin"
          element={
            <PrivateRoute>
              <ProviderLayout />
            </PrivateRoute>
          }
        >
          <Route path="/admin/*" element={<NotFound />} />
          <Route index element={<AdminIndex />} />

          <Route
            path="/admin/sudo"
            element={
              <AdminRoute>
                <Outlet />
              </AdminRoute>
            }
          >
            <Route index element={<Dashboard />} />
            <Route path="/admin/sudo/content" element={<Content />} />
          </Route>

          <Route path="/admin/services" element={<Test />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
