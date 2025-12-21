/* eslint-disable no-unused-vars */
import React from "react";
import { Link } from "react-router";
import { motion } from "framer-motion";
import { FaHome, FaArrowLeft, FaMapMarkedAlt } from "react-icons/fa";

const ErrorPage = () => {
  return (
    <section className="min-h-screen bg-white flex items-center justify-center px-6 py-24">
      <div className="max-w-3xl w-full text-center">
        {/* Animated Illustration Section */}
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="relative mb-8"
        >
          <h1 className="text-[12rem] md:text-[16rem] font-black text-gray-200 leading-none select-none">
            404
          </h1>
          <div className="absolute inset-0 flex items-center justify-center">
            <motion.div
              animate={{
                y: [0, -15, 0],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <FaMapMarkedAlt className="text-lime-500 text-8xl md:text-9xl drop-shadow-2xl" />
            </motion.div>
          </div>
        </motion.div>

        {/* Text Content */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="space-y-4"
        >
          <h2 className="text-3xl md:text-5xl font-black text-gray-800 uppercase tracking-tighter">
            Oops! You're <span className="text-lime-500">Lost</span>.
          </h2>
          <p className="text-gray-500 max-w-md mx-auto text-lg">
            The page you are looking for might have been removed, had its name
            changed, or is temporarily unavailable.
          </p>
        </motion.div>

        {/* Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.5 }}
          className="flex flex-col md:flex-row items-center justify-center gap-4 mt-12"
        >
          <button
            onClick={() => window.history.back()}
            className="flex items-center gap-2 px-8 py-3 border-2 border-gray-800 text-gray-800 font-bold rounded-2xl hover:bg-gray-800 hover:text-white transition-all active:scale-95"
          >
            <FaArrowLeft /> Go Back
          </button>

          <Link
            to="/"
            className="flex items-center gap-2 px-8 py-3 bg-lime-500 text-white font-bold rounded-2xl shadow-lg shadow-lime-200 hover:bg-lime-600 hover:shadow-lime-300 transition-all active:scale-95"
          >
            <FaHome /> Back to Home
          </Link>
        </motion.div>

        {/* Brand Footer */}
        <p className="mt-16 text-gray-400 font-medium tracking-widest uppercase text-xs">
          © 2025 <span className="text-lime-500">Jurnext</span> Transportation Ltd.
        </p>
      </div>
    </section>
  );
};

export default ErrorPage;
