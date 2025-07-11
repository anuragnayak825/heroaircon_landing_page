import React from "react";
import { motion } from "framer-motion";
import { LuPhoneCall } from "react-icons/lu";
import { FaTools, FaFan } from "react-icons/fa";

export default function ScheduleSection() {
  return (
    <motion.section
      className="w-full px-6 md:px-20 py-6 bg-[#f7f7f7] flex flex-col lg:flex-row items-center justify-center gap-10 overflow-hidden"
    >
      {/* 🧾 Left Cards */}
      <motion.div
        initial={{ x: -100, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
        viewport={{ once: true }}
        className="w-full max-w-xl space-y-8"
      >
        {/* 📦 Card 1: Wall Mounted */}
        <div className="bg-white rounded-xl shadow-lg p-8 border-l-8 border-[#149ca1] transition-all transform icon-spin">
          <div className="flex items-center gap-4 mb-4">
            <div className="text-4xl text-[#0d6b73] bg-white rounded-full p-3 shadow-inner icon-spin-hover">
              <FaTools />
            </div>
            <h3 className="text-lg lg:text-2xl font-bold text-[#0d6b73]">
              Basic Service – Wall Mounted
            </h3>
          </div>
          <ul className="text-[#1b2a41] text-lg pl-6 list-disc space-y-1">
            <li>1 Unit – <strong>RM 80</strong></li>
            <li>2 Units – <strong>RM 70</strong> each</li>
            <li>3 Units & above – <strong>RM 60</strong> each</li>
          </ul>
        </div>

        {/* 📦 Card 2: Ceiling Cassette */}
        <div className="bg-white rounded-2xl shadow-lg p-8 border-l-8 border-[#7e57c2] transition-all transform border-e border-t border-b border-t-gray-300 border-b-gray-300 border-e-gray-300 icon-spin">
          <div className="flex items-center gap-4 mb-4">
            <div className="text-4xl text-[#4e2a84] bg-white rounded-full p-3 shadow-inner icon-spin-hover">
              <FaFan />
            </div>
            <h3 className="text-sm lg:text-2xl font-bold text-[#4e2a84]">
              Basic Cleaning – Ceiling Cassette
            </h3>
          </div>
          <ul className="text-[#1b2a41] text-lg pl-6 list-disc space-y-1">
            <li>1 Unit – <strong>RM 160</strong></li>
            <li>2 Units – <strong>RM 140</strong> each</li>
          </ul>
        </div>
      </motion.div>

      {/* 📞 Right Content */}
      <motion.div
        initial={{ x: 100, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
        viewport={{ once: true }}
        className="bg-[#149ca1] text-white p-8 md:p-10 space-y-4 rounded-2xl w-full max-w-xl shadow-xl"
      >
        <span className="inline-block bg-[#107a7e] text-white px-5 py-2 rounded-full text-sm font-semibold mb-2">
          24 Hours & Emergencies
        </span>

        <h2 className="text-3xl md:text-4xl font-bold leading-tight">
          Ready for a Cooler Space? Schedule Your Aircon Service Now!
        </h2>

        <p className="flex items-center text-xl font-semibold">
          <LuPhoneCall className="mr-3 text-2xl" /> +60 187-8196 15
        </p>

        <p className="text-base md:text-lg leading-relaxed">
         Quickly filling up! Book your service through WhatsApp before it’s too late.
        </p>

        <a
          href="https://wa.me/60187819615"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block mt-4 bg-white text-[#149ca1] hover:bg-gray-100 font-semibold px-6 py-3 rounded-full transition-all"
        >
          Book Now
        </a>
      </motion.div>
    </motion.section>
  );
}
