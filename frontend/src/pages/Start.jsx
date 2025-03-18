import React from "react";
import { motion } from "framer-motion";
import bgImg from "../images/auth-image-placeholder.jpg";
import { Link } from "react-router-dom";

export default function Start() {
  return (
    <div
      className="min-h-screen bg-cover bg-center flex items-center justify-center"
      style={{ backgroundImage: `url(${bgImg})` }}
    >
      <div className="bg-gradient-to-r from-black/70 to-black/30 min-h-screen w-full flex items-center justify-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="bg-white shadow-2xl rounded-3xl p-8 max-w-lg mx-auto"
        >
          <motion.h1
            className="text-4xl font-bold text-center text-gray-800 mb-4"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5, duration: 0.5 }}
          >
            Welcome to Secure Auth
          </motion.h1>
          <motion.p
            className="text-gray-600 text-center mb-6"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.7, duration: 0.5 }}
          >
            Simplify authentication and secure your accounts effortlessly.
          </motion.p>

          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5, duration: 0.7 }}
          >
            <motion.div
              className="bg-blue-100 p-4 rounded-xl shadow-lg"
              initial={{ x: -50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 1.6, duration: 0.6 }}
            >
              <h3 className="font-semibold text-blue-700">Secure Encryption</h3>
              <p className="text-gray-600 text-sm">
                Experience state-of-the-art encryption for safeguarding your
                data.
              </p>
            </motion.div>
            <motion.div
              className="bg-blue-100 p-4 rounded-xl shadow-lg"
              initial={{ x: 50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 1.7, duration: 0.6 }}
            >
              <h3 className="font-semibold text-blue-700">User Friendly</h3>
              <p className="text-gray-600 text-sm">
                Navigate our intuitive interface with ease and confidence.
              </p>
            </motion.div>
          </motion.div>

          <motion.div
            className="text-center mt-8"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1.8, duration: 0.5 }}
          >
            <Link to="/login">
              <button className="bg-blue-500 text-white font-medium py-3 px-6 rounded-xl shadow-lg hover:bg-blue-600 transition-transform transform hover:scale-105 duration-300">
                Continue
              </button>
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
