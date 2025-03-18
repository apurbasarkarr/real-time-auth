import React, { useState } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

export default function UserLogin() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [userData, setUserData] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email.includes("@")) {
      setUserData({
        email: email,
        password: password,
      });
    } else {
      setUserData({
        username: email,
        password: password,
      });
    }
    setEmail("");
    setPassword("");
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-green-500 to-blue-600 flex items-center justify-center">
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        className="bg-white shadow-2xl rounded-3xl p-8 max-w-md w-full"
      >
        <motion.h1
          className="text-3xl font-bold text-center text-gray-800 mb-6"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.5 }}
        >
          Welcome Back!
        </motion.h1>
        <motion.form
          onSubmit={(e) => {
            handleSubmit(e);
          }}
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.5, duration: 0.5 }}
        >
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-gray-700 font-medium mb-2"
            >
              Email or Username
            </label>
            <input
              type="text"
              id="email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              className="w-full p-3 border border-gray-300 rounded-xl focus:outline-none focus:ring focus:ring-blue-400"
              placeholder="Enter your email or username"
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="password"
              className="block text-gray-700 font-medium mb-2"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
              className="w-full p-3 border border-gray-300 rounded-xl focus:outline-none focus:ring focus:ring-blue-400"
              placeholder="Enter your password"
            />
          </div>
          <motion.div
            className="flex justify-between items-center mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.5 }}
          >
            <button
              type="submit"
              className="bg-blue-500 text-white py-3 px-6 rounded-xl font-medium shadow-lg hover:bg-blue-600 transition-transform transform hover:scale-105"
            >
              Login
            </button>
            <Link to="/signup">
              <button
                type="button"
                className="text-blue-500 hover:text-blue-600 font-medium"
                // onClick={() => navigate("/signup")}
              >
                Sign Up
              </button>
            </Link>
          </motion.div>
        </motion.form>
      </motion.div>
    </div>
  );
}
