import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AdminHeader from "@/components/admin/AdminHeader";
import AdminSidebar from "@/components/admin/AdminSidebar";
import Dashboard from "@/pages/admin/Dashboard";
import Users from "@/pages/admin/Users";
import Exercises from "@/pages/admin/Exercises";
import Reports from "@/pages/admin/Reports";


const AdminRoutes = () => {
  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <AdminSidebar />

      <div className="flex-1 flex flex-col">
        {/* Header */}
        <AdminHeader />

        {/* Admin Pages */}
        <div className="p-4 overflow-auto flex-1">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/users" element={<Users />} />
            <Route path="/exercises" element={<Exercises />} />
            <Route path="/reports" element={<Reports />} />
          </Routes>
        </div>
      </div>
    </div>
  );
};

export default AdminRoutes;
