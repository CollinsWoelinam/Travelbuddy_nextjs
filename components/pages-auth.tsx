"use client"

import { useState } from "react";
import { FaFacebook, FaGoogle, FaTwitter } from "react-icons/fa";
import { MdTravelExplore } from "react-icons/md";

export function Auth() {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <div className="min-h-screen bg-[#0d3b66] flex items-center justify-center p-4">
      <div className="bg-[#edf6f9] rounded-lg shadow-xl p-8 w-full max-w-md">
        <div className="flex justify-center mb-8">
          <MdTravelExplore className="text-[#006d77] text-6xl" />
        </div>
        <h1 className="text-3xl font-bold text-center  text-[#0d3b66] mb-8">
          {isLogin ? "Welcome Back!" : "Join Travel Buddy"}
        </h1>
        <div className="flex justify-center mb-8">
          <button
            className={`px-4 py-2 ${
              isLogin ? "bg-[#0d3b66] text-[#edf6f9]" : "bg-[#edf6f9] text-[#0d3b66]"
            } rounded-l-lg transition-colors duration-300`}
            onClick={() => setIsLogin(true)}
          >
            Login
          </button>
          <button
            className={`px-4 py-2 ${
              !isLogin ? "bg-[#0d3b66] text-[#edf6f9]" : "bg-[#edf6f9] text-[#0d3b66]"
            } rounded-r-lg transition-colors duration-300`}
            onClick={() => setIsLogin(false)}
          >
            Sign Up
          </button>
        </div>
        <form className="space-y-6">
          {!isLogin && (
            <input
              type="text"
              placeholder="Full Name"
              className="w-full px-4 py-2 rounded-lg border border-[#0d3b66] focus:outline-none focus:ring-2 focus:ring-[#83c5be] dark:border-slate-800"
            />
          )}
          <input
            type="email"
            placeholder="Email"
            className="w-full px-4 py-2 rounded-lg border border-[#0d3b66] focus:outline-none focus:ring-2 focus:ring-[#83c5be] dark:border-slate-800"
          />
          <input
            type="password"
            placeholder="Password"
            className="w-full px-4 py-2 rounded-lg border border-[#0d3b66] focus:outline-none focus:ring-2 focus:ring-[#83c5be] dark:border-slate-800"
          />
          <button
            type="submit"
            className="w-full bg-[#0d3b66] text-[#edf6f9] py-2 rounded-lg hover:bg-opacity-90 transition-colors duration-300"
          >
            {isLogin ? "Login" : "Sign Up"}
          </button>
        </form>
        <div className="mt-8">
          <p className="text-center text-[#0d3b66] mb-4">Or continue with</p>
          <div className="flex justify-center space-x-4">
            <button className="bg-[#83c5be] text-white p-2 rounded-full hover:bg-opacity-90 transition-colors duration-300">
              <FaFacebook className="text-xl" />
            </button>
            <button className="bg-[#83c5be] text-white p-2 rounded-full hover:bg-opacity-90 transition-colors duration-300">
              <FaGoogle className="text-xl" />
            </button>
            <button className="bg-[#83c5be] text-white p-2 rounded-full hover:bg-opacity-90 transition-colors duration-300">
              <FaTwitter className="text-xl" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}