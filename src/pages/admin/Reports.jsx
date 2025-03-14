import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BarChart, LineChart, PieChart, ResponsiveContainer, Bar, Line, Pie, XAxis, YAxis, Tooltip, CartesianGrid, Legend } from "recharts";

const workoutData = [
  { name: "Mon", workouts: 5 },
  { name: "Tue", workouts: 7 },
  { name: "Wed", workouts: 6 },
  { name: "Thu", workouts: 8 },
  { name: "Fri", workouts: 4 },
  { name: "Sat", workouts: 10 },
  { name: "Sun", workouts: 9 },
];

const userGrowthData = [
  { month: "Jan", users: 200 },
  { month: "Feb", users: 350 },
  { month: "Mar", users: 500 },
  { month: "Apr", users: 650 },
  { month: "May", users: 800 },
  { month: "Jun", users: 950 },
];

const exercisePopularityData = [
  { name: "Push-ups", value: 40 },
  { name: "Squats", value: 35 },
  { name: "Deadlifts", value: 25 },
];

const Reports = () => {
  return (
    <div className="p-6 grid gap-6 md:grid-cols-2">
      {/* Workout Activity Chart */}
      <Card>
        <CardHeader>
          <CardTitle>Weekly Workout Activity</CardTitle>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={workoutData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="workouts" fill="#4F46E5" />
            </BarChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>

      {/* User Growth Chart */}
      <Card>
        <CardHeader>
          <CardTitle>User Growth Over Time</CardTitle>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={userGrowthData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line type="monotone" dataKey="users" stroke="#4F46E5" />
            </LineChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>

      {/* Exercise Popularity Chart */}
      <Card className="md:col-span-2">
        <CardHeader>
          <CardTitle>Exercise Popularity</CardTitle>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie dataKey="value" data={exercisePopularityData} fill="#4F46E5" label />
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>
    </div>
  );
};

export default Reports;
