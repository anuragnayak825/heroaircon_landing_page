import React, { useEffect, useState } from "react";
import { FaWhatsapp, FaPhoneAlt } from "react-icons/fa";

export default function StickyHeader() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* 👇 Zoom Animation Style */}
      <style>
        {`
          @keyframes zoomInOut {
            0%, 100% { transform: scale(1); }
            50% { transform: scale(1.05); }
          }
          .animate-zoom {
            animation: zoomInOut 2s ease-in-out infinite;
          }
        `}
      </style>

      <div
        className={`sticky top-0 left-0 w-full z-50 transition-all duration-300 ${
          scrolled ? "shadow-lg bg-white/95 backdrop-blur" : "bg-white"
        }`}
      >
        <div className="max-w-screen-2xl mx-auto flex items-center justify-between px-4 sm:px-8 md:px-12 lg:px-20 xl:px-32 2xl:px-40 py-2 sm:py-3 md:py-4 lg:py-5 xl:py-6 gap-4">
          {/* 🔹 Logo */}
          <img
            src="https://heroairconn.com/wp-content/uploads/2024/09/logoaircon-768x154.png"
            alt="Hero Aircon Logo"
            className="h-8 sm:h-10 md:h-[40px] lg:h-[60px] xl:h-[70px] 2xl:h-[80px] w-auto object-contain"
          />

          {/* 🔹 Buttons */}
          <div className="flex items-center gap-2 sm:gap-3 md:gap-2 lg:gap-5">
            {/* 📞 Call Button */}
            <a
              href="tel:+60187819615"
              className="group flex items-center justify-center text-white font-semibold rounded-full overflow-hidden transition-all shadow-md hover:shadow-lg bg-[#1b9da4] hover:bg-[#0f7a80]"
            >
              {/* Icon only on small screens */}
              <span className="w-10 h-10 sm:w-auto sm:h-11 flex items-center justify-center rounded-full bg-[#1b9da4] md:hidden">
                <FaPhoneAlt className="text-base sm:hidden" />
              </span>
              {/* Full button on md and above */}
              <span className="hidden sm:flex md:flex items-center gap-2 px-5 py-2.5 xl:px-6 xl:py-3 text-sm xl:text-base 2xl:text-lg">
                <FaPhoneAlt className="text-lg xl:text-xl 2xl:text-2xl" />
                Call Us: +60 18-781 9615
              </span>
            </a>

            {/* 💬 WhatsApp Button */}
            <a
              href="https://wa.me/60187819615"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-center text-white font-semibold rounded-full overflow-hidden transition-all animate-zoom shadow-md hover:shadow-lg bg-green-600 hover:bg-green-700"
            >
              {/* Icon only on small screens */}
              <span className="w-10 h-10 sm:w-11 sm:h-11 flex items-center justify-center rounded-full bg-green-600 md:hidden">
                <FaWhatsapp className="text-base sm:text-lg" />
              </span>
              {/* Full button on md and above */}
              <span className="hidden md:flex items-center gap-2 px-5 py-2.5 xl:px-6 xl:py-3 text-sm xl:text-base 2xl:text-lg">
                <FaWhatsapp className="text-lg xl:text-xl 2xl:text-2xl" />
                Connect on WhatsApp
              </span>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
