import { Routes, Route } from "react-router-dom";
import HomePage from "@/pages/Home/Home";
import LoginPage from "@/pages/auth/LoginPage";
import RegisterPage from "@/pages/auth/RegisterPage";
import Dashboard from "@/pages/Dashboard/Dashboad";
import ProtectedRoute from "./ProtectedRoute";
import AdminProtectedRoute from "./AdminProtectedRoute";
import Workouts from "@/pages/workout/workout";
import Favorites from "@/pages/workout/Favourites";
import AdminRoutes from "./AdminRoutes";


const AppRoutes = () => {
  return (
    <Routes>
    
      <Route path="/" element={<HomePage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />

      
      <Route
        path="/dashboard"
        element={
          <ProtectedRoute>
            <Dashboard />
          </ProtectedRoute>
        }
      />
      <Route
        path="/workouts"
        element={
          <ProtectedRoute>
            <Workouts />
          </ProtectedRoute>
        }
      />
      <Route
        path="/fav"
        element={
          <ProtectedRoute>
            <Favorites />
          </ProtectedRoute>
        }
      />

      <Route
        path="/admin/*"
        element={
        //   <AdminProtectedRoute>
            <AdminRoutes />
        //   </AdminProtectedRoute>
        }
      />

      {/* Fallback Route */}
      <Route path="*" element={<LoginPage />} />
    </Routes>
  );
};

export default AppRoutes;
