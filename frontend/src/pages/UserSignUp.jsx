// const UserSignUp = () => {
//   return <div>UserSignUp</div>;
// };

// export default UserSignUp;

import React, { useState } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

export default function UserSignUp() {
  const navigate = useNavigate();

  const [fullname, setFullName] = useState("");
  const [username, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [userData, setUserData] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    setUserData({
      fullname: fullname,
      username: username,
      email: email,
      password: password,
    });

    setFullName("");
    setUserName("");
    setEmail("");
    setPassword("");
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-purple-500 to-indigo-600 flex items-center justify-center">
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
          Create Your Account
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
              htmlFor="fullname"
              className="block text-gray-700 font-medium mb-2"
            >
              Full Name
            </label>
            <input
              type="text"
              id="fullname"
              value={fullname}
              onChange={(e) => {
                setFullName(e.target.value);
              }}
              className="w-full p-3 border border-gray-300 rounded-xl focus:outline-none focus:ring focus:ring-purple-400"
              placeholder="Enter your full name"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="username"
              className="block text-gray-700 font-medium mb-2"
            >
              Username
            </label>
            <input
              type="text"
              id="username"
              value={username}
              onChange={(e) => {
                setUserName(e.target.value);
              }}
              className="w-full p-3 border border-gray-300 rounded-xl focus:outline-none focus:ring focus:ring-purple-400"
              placeholder="Choose a username"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-gray-700 font-medium mb-2"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              className="w-full p-3 border border-gray-300 rounded-xl focus:outline-none focus:ring focus:ring-purple-400"
              placeholder="Enter your email"
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
              className="w-full p-3 border border-gray-300 rounded-xl focus:outline-none focus:ring focus:ring-purple-400"
              placeholder="Create a password"
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
              className="bg-purple-500 text-white py-3 px-6 rounded-xl font-medium shadow-lg hover:bg-purple-600 transition-transform transform hover:scale-105"
            >
              Sign Up
            </button>
            <Link to="/login">
              <button
                type="button"
                className="text-purple-500 hover:text-purple-600 font-medium"
                // onClick={() => navigate("/login")}
              >
                Back to Login
              </button>
            </Link>
          </motion.div>
        </motion.form>
      </motion.div>
    </div>
  );
}
