import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState({ email: "", password: "" });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleLogin = (e) => {
    e.preventDefault();
    const user = JSON.parse(localStorage.getItem("user"));
    if (user?.email === form.email && user?.password === form.password) {
      navigate("/dashboard");
    } else {
      alert("Invalid credentials");
    }
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <Card className="w-[30vw] h-[70vh] flex flex-col justify-center p-6 shadow-xl rounded-xl bg-white">
        <CardHeader className="text-center">
          <CardTitle className="text-3xl font-semibold text-gray-800">Login</CardTitle>
        </CardHeader>
        <CardContent className="flex flex-col gap-6">
          <form onSubmit={handleLogin} className="space-y-5">
            <div className="relative">
              <Input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                required
                placeholder="Email Address"
                className="h-12 w-full px-4 text-lg border-2 border-gray-300 rounded-md transition-all focus:border-green-500 focus:ring-2 focus:ring-green-300 focus:outline-none"
              />
            </div>
            <div className="relative">
              <Input
                type="password"
                name="password"
                value={form.password}
                onChange={handleChange}
                required
                placeholder="Password"
                className="h-12 w-full px-4 text-lg border-2 border-gray-300 rounded-md transition-all focus:border-green-500 focus:ring-2 focus:ring-green-300 focus:outline-none"
              />
            </div>
            <Button type="submit" className="w-full h-12 text-lg bg-black hover:bg-blend-darken transition-all rounded-md shadow-md cursor-pointer">
              Login
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default LoginPage;
