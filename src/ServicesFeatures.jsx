import React, { useEffect } from "react";
import { motion } from "framer-motion";
import {
  FaSnowflake,
  FaRegBuilding,
  FaCompressArrowsAlt,
  FaWind,
  FaTint,
  FaTools,
  FaTrash,
  FaWrench,
  FaPhoneAlt,
} from "react-icons/fa";
import img1 from "./assets/7484.jpg";
import img2 from "./assets/18359.jpg";
import img3 from "./assets/44922.jpg";
import "./App.css"; // 👈 import animation styles

const serviceData = [
  {
    icon: <FaSnowflake size={28} />,
    text: "Aircond Service & Cleaning",
    description: "Keep your air conditioners running smoothly with our cleaning and servicing packages.",
    image: img1,
  },
  {
    icon: <FaRegBuilding size={28} />,
    text: "Wall-Mounted Service",
    description: "Efficient cooling and maintenance for wall-mounted AC units.",
    image: "https://static.wixstatic.com/media/9e5167_56006a7d59504605b278b55ab6913719~mv2.png",
  },
  {
    icon: <FaCompressArrowsAlt size={28} />,
    text: "Cassette Service",
    description: "Cassette aircon services for top-notch performance.",
    image: "https://static.wixstatic.com/media/9e5167_c097cccea0f44bca939792641284c905~mv2.webp",
  },
  {
    icon: <FaWind size={28} />,
    text: "Duct Cleaning",
    description: "Deep duct cleaning to improve air quality.",
    image: "https://static.wixstatic.com/media/9e5167_b9c03341de214983a2024fbcab9cb59a~mv2.webp",
  },
  {
    icon: <FaTint size={28} />,
    text: "Water Leaking Service",
    description: "Fix AC water leakage issues quickly.",
    image: img2,
  },
  {
    icon: <FaTools size={28} />,
    text: "Aircon Installation",
    description: "Expert AC installation for homes and offices.",
    image: img3,
  },
  {
    icon: <FaTrash size={28} />,
    text: "Aircon Dismantle Service",
    description: "Safe and efficient AC dismantling service.",
    image: "https://img.freepik.com/free-photo/medium-shot-people-wearing-helmets_23-2149366666.jpg",
  },
  {
    icon: <FaWrench size={28} />,
    text: "Other Service",
    description: "Custom HVAC solutions on demand.",
    image: "https://static.wixstatic.com/media/9e5167_ba1ab6b21b4d47cf8229dcc06703255b~mv2.png",
  },
];

export default function ServicesSection() {
  useEffect(() => {
    const img = new Image();
    img.src = "https://img.freepik.com/free-photo/low-angle-people-working-with-drill_23-2149366670.jpg";
  }, []);

  return (
    <div className="relative min-h-screen py-10 px-4 md:px-16 bg-[#f7f7f7]">
      <h2 className="text-4xl font-bold text-[#4e2a84] mb-10 text-center drop-shadow-md">
        Our Services
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {serviceData.map((service, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.03 }}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="group relative bg-white rounded-xl overflow-hidden shadow-lg transition-all duration-300"
          >
            {/* 📱 Vibrating Call Button (visible on small devices only) */}
            <div className="sm:hidden absolute top-3 right-3 z-30">
              <button
                className="call-button bg-indigo-600 text-white p-3 rounded-full shadow-md"
                onClick={() => window.location.href = "tel:+60187819615"} // 📞 Update phone number here
              >
                <FaPhoneAlt size={20} />
              </button>
            </div>

            {/* Hover Overlay with Book Now Button */}
            <motion.div
              initial={{ opacity: 0 }}
              whileHover={{ opacity: 1 }}
              className="absolute inset-0 bg-[#00000080] flex items-center justify-center z-20 transition-opacity duration-300"
            >
              <motion.button
                onClick={() => (window.location.href = "tel:+60187819615")}
                whileHover={{ scale: 1.1 }}
                className="bg-indigo-600 hover:bg-indigo-700 cursor-pointer text-white py-2 px-6 rounded-full shadow-lg"
              >
                Book Now
              </motion.button>

            </motion.div>

            {/* Service Image */}
            <div
              className="w-full h-44 bg-cover bg-center"
              style={{ backgroundImage: `url(${service.image})` }}
            ></div>

            {/* Card Text Info */}
            <div className="p-4 text-center z-10">
              <div className="text-indigo-600 mb-2">{service.icon}</div>
              <h3 className="font-semibold text-lg text-gray-800 mb-2">{service.text}</h3>
              <p className="text-sm text-gray-600">{service.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
