import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const RegisterPage = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState({ name: "", email: "", password: "", password2: "" });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleRegister = (e) => {
    e.preventDefault();
    // Simulating registration and redirect
    localStorage.setItem("user", JSON.stringify(form));
    navigate("/dashboard");
  };

  return (
    <div className="flex items-center justify-center h-screen">
      <Card className="w-[30vw] h-[80vh] flex flex-col justify-center p-6 shadow-lg">
        <CardHeader className="text-center">
          <CardTitle className="text-3xl font-semibold">Register</CardTitle>
        </CardHeader>
        <CardContent className="flex flex-col gap-5">
          <form onSubmit={handleRegister} className="space-y-5">
            <Input
              name="name"
              value={form.name}
              onChange={handleChange}
              required
              placeholder="Full Name"
              className="h-12 px-4 text-lg border rounded-md focus:ring-2 focus:ring-green-500"
            />
            <Input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              required
              placeholder="Email Address"
              className="h-12 px-4 text-lg border rounded-md focus:ring-2 focus:ring-green-500"
            />
            <Input
              type="password"
              name="password"
              value={form.password}
              onChange={handleChange}
              required
              placeholder="Password"
              className="h-12 px-4 text-lg border rounded-md focus:ring-2 focus:ring-green-500"
            />
            <Input
              type="password"
              name="password2"
              value={form.password2}
              onChange={handleChange}
              required
              placeholder="Confirm Password"
              className="h-12 px-4 text-lg border rounded-md focus:ring-2 focus:ring-green-500"
            />
            <Button type="submit" className="w-full h-12 text-lg bg-black hover:bg-blend-darken rounded-md shadow-md cursor-pointer transition">
              Register
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default RegisterPage;
