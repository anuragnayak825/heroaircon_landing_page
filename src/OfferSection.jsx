import React from "react";
import { FaCheckCircle, FaBolt, FaPercent, FaRegClock } from "react-icons/fa";
import { IoMdCall } from "react-icons/io";

// 🖼️ You can replace these with your real local image paths
// import img1 from "./assets/clean1.jpg";
// import img2 from "./assets/clean2.jpg";
// import img3 from "./assets/clean3.jpg";
// import img4 from "./assets/clean4.jpg";

const img1 = 'https://heroairconn.com/wp-content/uploads/2024/09/ducted-aircon-service.webp'
const img2 = 'https://heroairconn.com/wp-content/uploads/2024/09/aircon-services-repair-malaysia.webp'
const img3 = 'https://heroairconn.com/wp-content/uploads/2024/09/aircond-repairs-maintenance-service.webp'

export default function OfferSection() {
    return (
        <section className="bg-[#f7f7f7] py-6 px-6 md:px-20">
            <div className="max-w-7xl mx-auto bg-gradient-to-r from-[#283266] via-[#345094] to-[#2895C2] text-white rounded-3xl p-8 md:p-12 shadow-xl grid md:grid-cols-2 gap-10 items-center">

                {/* 📝 Offer Content */}
                <div className="space-y-6 animate-fade-in-up">
                    <h2 className="text-3xl md:text-4xl font-bold leading-tight tracking-wide">
                        Get 10% Discount on Booking Any Service Now
                    </h2>
                    <p className="text-white/90 text-base md:text-lg">
                        Fill in our form to receive a no-obligation FREE quote today, plus a 10% discount on a chemical clean.
                    </p>
                    {/* 🎯 CTA Buttons */}
                    <div className="flex flex-wrap gap-4 pt-4">
                        <a  href="https://wa.me/60187819615" className="bg-white text-[#283266] hover:bg-gray-100 px-6 py-3 rounded-lg font-bold transition-all">
                            Claim My 10% Off
                        </a>
                        <a href="tel:+60187819615" className="flex items-center border border-white px-5 py-3 rounded-lg font-semibold hover:bg-white hover:text-[#283266] transition">
                            <IoMdCall className="mr-2" />
                            Call Now
                        </a>
                    </div>
                </div>

                {/* 📸 Grid of Images */}
                <div className="grid grid-cols-2 gap-4">
                    {[img1 ,img2 ,img3].map((src, index) => (
                        <img
                            key={index}
                            src={src}
                            alt={`Service ${index + 1}`}
                            className="rounded-xl shadow-md hover:scale-105 transition-transform duration-300"
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}
