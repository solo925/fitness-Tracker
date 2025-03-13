import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";



const HomePage = () => {
  return (
    <div className="min-h-screen bg-white flex flex-col items-center justify-center px-6 py-12">
      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center max-w-3xl"
      >
        <h1 className="text-4xl font-bold text-gray-900">Your Ultimate Fitness Tracker</h1>
        <p className="text-gray-600 mt-4 text-lg">
          Track workouts, set goals, and monitor progress with ease.
        </p>
        <div className="mt-6 flex gap-4 justify-center">
          <Button asChild>
            <Link to="/register">Get Started</Link>
          </Button>
          <Button variant="outline" asChild>
            <Link to="/login">Login</Link>
          </Button>
        </div>
      </motion.div>

      {/* Features Section */}
      <div className="mt-16 grid md:grid-cols-3 gap-6">
        {features.map((feature, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
          >
            <Card className="shadow-lg hover:shadow-xl transition">
              <CardHeader>
                <CardTitle className="text-lg font-semibold">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent className="text-gray-600">{feature.description}</CardContent>
            </Card>
          </motion.div>
        ))}
      </div>

      {/* Footer */}
      <footer className="mt-16 w-full bg-gray-100 py-8 px-6 text-gray-700">
  <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-6 text-center md:text-left">
    {/* About Section */}
    <div>
      <h3 className="text-lg font-semibold text-gray-900">About Fitness Tracker</h3>
      <p className="mt-2 text-sm">
        Your all-in-one solution for tracking workouts, setting fitness goals, and monitoring progress with ease.
      </p>
    </div>

    {/* Quick Links */}
    <div>
      <h3 className="text-lg font-semibold text-gray-900">Quick Links</h3>
      <ul className="mt-2 space-y-2 text-sm">
        <li><a href="/" className="hover:text-blue-500 transition">Home</a></li>
        <li><a href="/dashboard" className="hover:text-blue-500 transition">Dashboard</a></li>
        <li><a href="/workouts" className="hover:text-blue-500 transition">Workouts</a></li>
        <li><a href="/contact" className="hover:text-blue-500 transition">Contact Us</a></li>
      </ul>
    </div>

    {/* Contact & Social Media */}
    <div>
      <h3 className="text-lg font-semibold text-gray-900">Stay Connected</h3>
      <p className="mt-2 text-sm">Follow us on social media for the latest updates.</p>
      <div className="mt-3 flex justify-center md:justify-start gap-4 text-gray-700">
        <a href="#" className="hover:text-blue-600 transition">
          <i className="fab fa-facebook text-xl"></i>
        </a>
        <a href="#" className="hover:text-blue-400 transition">
          <i className="fab fa-twitter text-xl"></i>
        </a>
        <a href="#" className="hover:text-pink-500 transition">
          <i className="fab fa-instagram text-xl"></i>
        </a>
        <a href="#" className="hover:text-gray-800 transition">
          <i className="fab fa-linkedin text-xl"></i>
        </a>
      </div>
    </div>
  </div>

  {/* Bottom Footer */}
  <div className="mt-8 border-t border-gray-300 pt-4 text-center text-sm">
    &copy; {new Date().getFullYear()} Fitness Tracker. All Rights Reserved.
  </div>
</footer>

    </div>
  );
};

const features = [
    { title: "Workout Logging", description: "Easily log your workouts and track progress." },
    { title: "Goal Setting", description: "Set fitness goals and stay on track." },
    { title: "Progress Tracking", description: "Monitor your progress with intuitive charts." },
    { title: "Exercise Library", description: "Access a vast collection of exercises with instructions." },
    { title: "Nutrition Tracking", description: "Keep track of your diet and calorie intake." },
    { title: "Community Support", description: "Connect with other fitness enthusiasts and stay motivated." },
    { title: "Custom Workout Plans", description: "Create and follow personalized workout routines." },
    { title: "Reminder Notifications", description: "Get reminders for workouts and hydration." },
    { title: "Integration with Wearables", description: "Sync with smartwatches and fitness bands." },
    { title: "Dark Mode", description: "Enjoy a sleek dark mode for a better user experience." },
  ];
  

export default HomePage;
