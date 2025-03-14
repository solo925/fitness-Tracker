import { useEffect, useState } from "react";
import Tilt from "react-parallax-tilt";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import Loader from "@/layout/Loader";

const Dashboard = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);

  useEffect(() => {
    fetch("https://dummyjson.com/users/1")
      .then((res) => res.json())
      .then((data) => setUser(data))
      .catch((err) => console.error("Error fetching user data:", err));
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("user");
    navigate("/login");
  };

  if (!user) {
    return (
      <div className="flex items-center justify-center h-screen bg-white">
        <p className="text-gray-600 text-lg font-medium"><Loader/></p>
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-white">
      <Tilt
        tiltMaxAngleX={10}
        tiltMaxAngleY={10}
        glareEnable={true}
        glareMaxOpacity={0.2}
        transitionSpeed={800}
        scale={1.05}
      >
        <Card className="w-[400px] p-6 shadow-2xl rounded-2xl bg-white">
          <CardHeader className="text-center flex flex-col items-center">
            <img
              src={user?.image}
              alt="Profile"
              className="w-24 h-24 rounded-full border-4 border-green-500 shadow-md"
            />
            <CardTitle className="text-2xl font-bold text-gray-800 mt-3">
              {user?.firstName} {user?.lastName}
            </CardTitle>
            <p className="text-sm text-gray-500">@{user?.username}</p>
          </CardHeader>
          <CardContent className="mt-4 flex flex-col gap-4">
            <div className="p-4 bg-gray-100 rounded-lg shadow-sm text-center">
              <p className="text-gray-600">
                📧 <span className="font-semibold">{user?.email}</span>
              </p>
              <p className="text-gray-600 mt-1">
                📞 <span className="font-semibold">{user?.phone}</span>
              </p>
            </div>
            <Button
              onClick={handleLogout}
              className="w-full bg-red-500 hover:bg-red-600 text-lg font-semibold py-3 rounded-xl transition-all shadow-lg"
            >
              Logout
            </Button>
          </CardContent>
        </Card>
      </Tilt>
    </div>
  );
};

export default Dashboard;
