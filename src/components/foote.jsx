import React from "react";

const Footer = () => {
  return (
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
  );
};

export default Footer;
