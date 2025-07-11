import React from "react";
import { BsWhatsapp } from "react-icons/bs";
import CountUp from "react-countup";
import { motion } from "framer-motion";

export default function AchievementsSection() {
  return (
    <section className="bg-[#f7f7f7] py-6 px-6 md:px-20 relative overflow-hidden">
      {/* Top Heading Card */}
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="bg-white border-l-[5px] border-[#2895C2] block rounded-xl p-6 shadow-md max-w-3xl mx-auto mb-12 text-center"
      >
        <h2 className="text-3xl md:text-4xl font-bold text-[#1e2a38] mb-2">
         Highlights of Our Professional <span className="text-[#2895C2]">Achievements</span>
        </h2>
        <p className="text-gray-600 text-base md:text-lg">
          We’ve built a legacy of excellence through our commitment, precision, and continuous improvement in the air conditioning industry.
        </p>
      </motion.div>

      {/* Cards Section */}
      <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {stats.map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: i * 0.1 }}
            viewport={{ once: true }}
            className="bg-white border border-gray-100 rounded-xl p-6 shadow-md hover:shadow-xl transition-all duration-300 text-center flex flex-col items-center"
          >
            <div className="w-14 h-14 mb-4 bg-[#e0f4fb] flex items-center justify-center rounded-full shadow-sm">
              <img src={item.icon} alt={item.label} className="w-6 h-6" />
            </div>
            <h3 className="text-2xl font-bold text-gray-800">
              <CountUp end={parseCount(item.value)} duration={2} />{" "}
              {getSuffix(item.value)}
            </h3>
            <p className="text-sm text-gray-600 mt-2">{item.label}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

// Utility functions
const parseCount = (value) => {
  const match = value.match(/[\d,.]+/);
  return match ? parseFloat(match[0].replace(/,/g, "")) : 0;
};

const getSuffix = (value) => {
  const match = value.match(/[^\d.,]+/);
  return match ? match[0] : "";
};

// Stats Data
const stats = [
  {
    icon: "https://cdn-icons-png.flaticon.com/512/1053/1053244.png",
    value: "20+",
    label: "Years Experience",
  },
  {
    icon: "https://cdn-icons-png.flaticon.com/512/1828/1828884.png",
    value: "24",
    label: "Hours Service",
  },
  {
    icon: "https://cdn-icons-png.flaticon.com/512/3595/3595455.png",
    value: "27895",
    label: "Total Services",
  },
  {
    icon: "https://cdn-icons-png.flaticon.com/512/3595/3595454.png",
    value: "3000+",
    label: "Installations",
  },
  {
    icon: "https://cdn-icons-png.flaticon.com/512/4267/4267470.png",
    value: "99",
    label: "Percent Happy Clients",
  },
  {
    icon: "https://cdn-icons-png.flaticon.com/512/2698/2698213.png",
    value: "45",
    label: "Days Warranty",
  },
];
