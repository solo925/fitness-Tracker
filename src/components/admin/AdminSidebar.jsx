import { useState } from "react";
import { NavLink } from "react-router-dom";
import { Home, Users, Dumbbell, BarChart2, Menu } from "lucide-react";
import { cn } from "@/lib/utils";

const AdminSidebar = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);

  const menuItems = [
    { name: "Dashboard", icon: Home, path: "/" },
    { name: "Users", icon: Users, path: "/admin/users" },
    { name: "Exercises", icon: Dumbbell, path: "/admin/exercises" },
    { name: "Reports", icon: BarChart2, path: "/admin/reports" },
  ];

  return (
    <nav
      className={cn(
        "bg-gray-900 text-white fixed top-0 left-0 w-full transition-all duration-300 z-50",
        isCollapsed ? "h-12" : "h-16"
      )}
    >
      <div className="flex items-center justify-between px-4 py-3">
        {/* Toggle Button */}
        <button
          className="p-2 rounded-md text-white hover:bg-gray-700"
          onClick={() => setIsCollapsed(!isCollapsed)}
        >
          <Menu className="w-6 h-6" />
        </button>

        {/* Menu Items */}
        <div className="flex gap-6">
          {menuItems.map(({ name, icon: Icon, path }) => (
            <NavLink
              key={name}
              to={path}
              className={({ isActive }) =>
                cn(
                  "flex items-center gap-2 px-3 py-2 rounded-md transition-all",
                  isActive ? "bg-gray-700" : "hover:bg-gray-800"
                )
              }
            >
              <Icon className="w-5 h-5" />
              {!isCollapsed && <span>{name}</span>}
            </NavLink>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default AdminSidebar;
