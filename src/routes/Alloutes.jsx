import { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import ProtectedRoute from './ProtectedRoute';
import AdminProtectedRoute from './AdminProtectedRoute';
import Loader from '@/layout/Loader';

const HomePage = lazy(() => import(/* webpackChunkName: "home" */ '@/pages/Home/Home'));
const LoginPage = lazy(() => import(/* webpackChunkName: "auth" */ '@/pages/auth/LoginPage'));
const RegisterPage = lazy(() => import(/* webpackChunkName: "auth" */ '@/pages/auth/RegisterPage'));
const Dashboard = lazy(() => import(/* webpackChunkName: "dashboard" */ '@/pages/Dashboard/Dashboad'));
const Workouts = lazy(() => import(/* webpackPrefetch: true */ '@/pages/workout/workout'));
const Favorites = lazy(() => import(/* webpackChunkName: "favorites" */ '@/pages/workout/Favourites'));
const AdminRoutes = lazy(() => import(/* webpackChunkName: "admin" */ './AdminRoutes'));

const AppRoutes = () => {
  return (
    <Suspense fallback={<Loader/>}>
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
            <AdminProtectedRoute>
              <AdminRoutes />
            </AdminProtectedRoute>
          }
        />

        {/* Fallback Route */}
        <Route path="*" element={<LoginPage />} />
      </Routes>
    </Suspense>
  );
};

export default AppRoutes;
