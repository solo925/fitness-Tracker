import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import features from "@/constants/features";
import Footer from "@/components/foote";



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
      <Footer/>
    </div>
  );
};

  

export default HomePage;
