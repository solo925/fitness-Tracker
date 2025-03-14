import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Users, Dumbbell, Activity } from "lucide-react";

const Dashboard = () => {
  const stats = [
    { title: "Total Users", count: 120, icon: <Users className="w-6 h-6 text-blue-500" /> },
    { title: "Total Exercises", count: 350, icon: <Dumbbell className="w-6 h-6 text-green-500" /> },
    { title: "Recent Activities", count: 45, icon: <Activity className="w-6 h-6 text-orange-500" /> },
  ];

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Admin Dashboard</h2>
      <div className="grid md:grid-cols-3 gap-6">
        {stats.map((stat, index) => (
          <Card key={index} className="shadow-md">
            <CardHeader className="flex flex-row items-center justify-between">
              <CardTitle>{stat.title}</CardTitle>
              {stat.icon}
            </CardHeader>
            <CardContent>
              <p className="text-3xl font-bold">{stat.count}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
