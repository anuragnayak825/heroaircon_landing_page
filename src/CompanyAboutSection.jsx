import React from "react";
import { motion } from "framer-motion";
import Image1 from "./assets/79241.jpg";
import Image2 from "./assets/1849.jpg";

export default function CompanyAboutSection() {
  return (
    <div className="w-full bg-[#f7f7f7] py-10 px-4 sm:px-6 md:px-12 lg:px-20 xl:px-32 2xl:px-40 h-auto overflow-x-hidden">
      <div className="w-full max-w-full mx-auto flex flex-col lg:flex-row items-center justify-between gap-10 xl:gap-">

        {/* 📷 Image Section */}
        <motion.div
          initial={{ opacity: 0, x: -80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="relative flex flex-col sm:flex-row items-center sm:items-end gap-4 sm:gap-6"
        >
          {/* 🖼️ Image 1 */}
          <div className="rounded-xl overflow-hidden shadow-lg w-[280px] sm:w-[300px] lg:w-[260px] xl:w-[280px] 2xl:w-[300px]">
            <img
              src={Image1}
              alt="Technician 1"
              className="w-full h-[340px] sm:h-[360px] md:h-[400px] lg:h-[380px] xl:h-[420px] 2xl:h-[460px] object-cover"
            />
          </div>

          {/* 🖼️ Image 2 */}
          <div className="rounded-xl hidden md:block overflow-hidden shadow-lg w-[260px] sm:w-[280px] lg:w-[260px] xl:w-[280px] 2xl:w-[300px]">
            <img
              src={Image2}
              alt="Technician 2"
              className="w-full h-[320px] sm:h-[360px] md:h-[400px] lg:h-[380px] xl:h-[420px] 2xl:h-[460px] object-cover"
            />
          </div>
        </motion.div>

        {/* 📝 Text Section */}
        <motion.div
          initial={{ opacity: 0, x: 80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="w-full max-w-2xl text-center lg:text-left"
        >
          {/* 🔖 Label */}
          <div className="flex items-center justify-center lg:justify-start w-fit mx-auto lg:mx-0 bg-white shadow-md text-[#6C2BD9] font-semibold px-4 py-1 rounded mb-3">
            <motion.img
              src="https://next.pixcelsthemes.com/assets/img/bale.png"
              alt="icon"
              className="mr-2 w-5 h-5"
              animate={{
                rotate: [0, -15, 15, -10, 10, -5, 5, 0],
              }}
              transition={{
                repeat: Infinity,
                duration: 2,
                ease: "easeInOut",
              }}
            />
            About Company
          </div>

          {/* 🏢 Title */}
          <h2 className="text-[26px] sm:text-[30px] md:text-[36px] lg:text-[42px] xl:text-[46px] 2xl:text-[50px] font-bold text-[#1f2937] leading-snug mb-4">
            Hero Aircon Services &<br className="hidden sm:block" /> Engineering
          </h2>

          {/* 🧾 Paragraph */}
          <p className="font-semibold mb-2.5 text-base sm:text-lg lg:text-[18px] xl:text-[20px] 2xl:text-[22px] leading-relaxed">
            Looking for expert air conditioner installation, repair, or servicing in Kuala Lumpur? You’ve come to the right place.
          </p>
          <p className="text-gray-600 text-base sm:text-lg lg:text-[18px] xl:text-[20px] 2xl:text-[22px] leading-relaxed mb-6">
            We provide reliable and professional aircon solutions for both residential and commercial spaces. Whether it’s a quick repair, routine maintenance, or a brand-new installation, our team is committed to delivering prompt, high-quality service tailored to your specific needs.
          </p>

          {/* 📅 CTA Button */}
          <div className="flex justify-center lg:justify-start">
            <a
              href="#"
              className="bg-[#6366f1] hover:bg-[#4f46e5] text-white font-semibold px-6 xl:px-8 py-3 xl:py-4 text-base xl:text-lg rounded-md transition-all duration-300"
            >
              Book an Appointment Now!
            </a>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
