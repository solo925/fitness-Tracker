import { Menu, User, Settings, LogOut } from "lucide-react";
import { Button } from "@/components/ui/button";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";

const AdminHeader = ({ toggleSidebar }) => {
  return (
    <header className="flex items-center justify-between p-4 bg-white shadow-md">
      {/* Sidebar Toggle Button */}
      <Button variant="ghost" className="lg:hidden" onClick={toggleSidebar}>
        <Menu className="w-6 h-6" />
      </Button>
      
      {/* Admin Title */}
      <h1 className="text-xl font-bold">Admin Dashboard</h1>

      {/* Profile Dropdown */}
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="ghost" className="flex items-center gap-2">
            <User className="w-5 h-5" />
            <span>Admin</span>
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end">
          <DropdownMenuItem>
            <Settings className="w-4 h-4 mr-2" /> Settings
          </DropdownMenuItem>
          <DropdownMenuItem className="text-red-500">
            <LogOut className="w-4 h-4 mr-2" /> Logout
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </header>
  );
};

export default AdminHeader;
