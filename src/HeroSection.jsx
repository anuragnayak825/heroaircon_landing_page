import React from "react";
import { LuPhoneCall } from "react-icons/lu";
import { FaWhatsapp, FaStar } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import QueryForm from "./QueryForm"; // Ensure this component is imported correctly
import Hero_Section_img from "../assets/your-image.jpg"; // Update your actual image path

export default function HeroSection() {
  return (
    <div
      className="w-full min-h-[75vh] bg-cover bg-center bg-no-repeat flex flex-col md:flex-row items-center justify-between px-6 md:px-20 py-10 md:py-20 gap-10"
      style={{
        backgroundImage: `linear-gradient(rgba(40, 50, 102, 0.85), rgba(40,50,102,0.85)), url(${Hero_Section_img})`,
      }}
    >
      {/* 📄 Left Content */}
      <div className="text-white max-w-xl w-full">
        <h2 className="text-lg font-medium text-gray-300">
          Your Best Local Roofing Service
        </h2>

        <h1 className="text-4xl md:text-5xl font-bold leading-tight mt-3">
          Reliable Cooling Solutions for Your Comfort
        </h1>

        <p className="mt-5 text-base md:text-lg leading-relaxed text-gray-200">
          Fill in our form to receive a no obligation FREE quote today plus a
          20% discount on a chemical clean.
        </p>

        {/* 🎯 Buttons */}
        <div className="mt-8 flex flex-wrap gap-4">
          <button className="bg-transparent border-2 border-white hover:bg-white hover:text-[#1b2a41] text-white px-6 py-2 rounded font-semibold flex items-center transition-all">
            <LuPhoneCall className="mr-2" />
            Call us Now!
          </button>

          <button className="bg-white text-green-600 hover:bg-green-700 hover:text-white px-6 py-3 rounded font-semibold flex items-center transition-all">
            <FaWhatsapp className="mr-2" />
            Whatsapp Now!
          </button>
        </div>

        {/* ⭐ Google Rating */}
        <div className="mt-8 bg-white p-2 rounded-xl w-fit flex items-center shadow-md">
          <FcGoogle className="text-2xl mr-2.5" />
          <span className="text-black font-semibold mr-2">4.5</span>
          {[...Array(5)].map((_, i) => (
            <FaStar key={i} className="text-yellow-400 text-sm" />
          ))}
        </div>
      </div>

      {/* 📩 Contact Form */}
      <div className="w-full md:w-[500px]">
        <QueryForm />
      </div>

      {/* 💬 WhatsApp Floating Button */}
      <a
        href="https://wa.me/60102497474"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-green-600 z-50"
      >
        <FaWhatsapp className="text-2xl" />
      </a>
    </div>
  );
}
