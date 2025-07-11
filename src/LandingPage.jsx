import React, { useState } from "react";
import { FaWhatsapp, FaStar } from "react-icons/fa";
import { LuPhoneCall } from "react-icons/lu";
import { HiOutlineMail } from "react-icons/hi";
import { IoMdCall } from "react-icons/io";
import Hero_Section_img from "./assets/48975.jpg"; // Your local hero background image
import { motion } from "framer-motion";
import { FaCheckCircle } from "react-icons/fa";
import About_section_img from "./assets/cropped-hand-starting-air-conditioner-with-remote-control-home.jpg"
import { FaStackExchange } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import ScheduleSection from "./ScheduleSection";
import StickyHeader from "./StickyHeader";
import QueryForm from "./QueryForm";
import CustomerTrustSection from "./CustomerTrustSection";
import WhyChooseUs from "./WhyChooseUs";
import ServicesFeatures from "./ServicesFeatures";
import AchievementsSection from "./AchievementsSection";
import Footer from "./Footer";
import CompanyAboutSection from './CompanyAboutSection'
import NewsletterCard from "./NewsletterSubscribe";
import NewsletterSubscribe from "./NewsletterSubscribe";
import OfferSection from "./OfferSection";
import { s } from "framer-motion/client";
import ThankYouCard from "./ThankYouCard";



export default function LandingPage() {
   
    return (
        <>

            <StickyHeader />
            {/* 🌇 Hero Section */}
            <div className="overflow-hidden">
                <div
                    className="w-full min-h-[75vh] bg-cover bg-center bg-no-repeat flex flex-col md:flex-row justify-between px-6 md:px-20 py-4 lg:p-12 gap-5 lg:gap-10"
                    style={{
                        backgroundImage: `linear-gradient(rgba(40,50,102,0.85), rgba(40,50,102,0.85)), url(${Hero_Section_img})`,
                    }}
                >
                    {/* 📄 Left Content with animation */}
                    <motion.div
                        initial={{ x: -80, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        transition={{ duration: 1, ease: "easeOut" }}
                        viewport={{ once: true }}
                        className="text-white max-w-xl w-full"
                    >
                        <h1 className="text-4xl lg:text-5xl sm:text-2xl font-bold tracking-wider leading-tight lg:mt-3">
                            Your Trusted <span className="text-5xl ">Aircon Service</span> Experts in Kuala Lumpur
                        </h1>

                        <p className="mt-2 text-base md:text-lg leading-relaxed text-gray-200">
                            Reliable aircon servicing, repairs, water leak fixes, troubleshooting, and installations — all under one roof.
                        </p>

                        {/* 🎯 Buttons */}
                        <div className="mt-4 lg:mt-8 flex flex-wrap gap-4">
                            <a
                                href="tel:+60187819615"
                                className="bg-transparent border-2 border-white hover:bg-white hover:text-[#1b2a41] text-white px-3 md:px-6 lg:px-6 py-2 rounded font-semibold flex items-center transition-all"
                            >
                                <LuPhoneCall className="mr-2" />
                                Call us Now!
                            </a>

                            <a
                                href="https://wa.me/60187819615"
                                className="bg-white text-green-600 hover:bg-green-700 hover:text-white px-3 py-3 rounded font-semibold flex items-center transition-all"
                            >
                                <FaWhatsapp className="mr-2" />
                                Whatsapp Now!
                            </a>
                        </div>
                    </motion.div>

                    {/* 📩 Contact Form with animation */}
                    <motion.div
                        initial={{ x: 80, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
                        viewport={{ once: true }}
                        className="w-full md:w-[500px]"
                    >
                        <QueryForm />
                    </motion.div>

                    {/* 💬 WhatsApp Floating Button */}
                    <a
                        href="https://wa.me/60187819615"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="fixed bottom-6 right-6 bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-green-600 z-50"
                    >
                        <FaWhatsapp className="text-2xl" />
                    </a>
                </div>
            </div>


            {/* 🔹 About Section */}
            <CompanyAboutSection />

            <div className="w-full h-auto bg-[#f7f7f7] px-4 py-3">
                <div className="w-full max-w-6xl mx-auto bg-gradient-to-r from-[#283266] via-[#345094] to-[#2895C2] text-white p-4 md:p-6 rounded-xl shadow-lg flex flex-col md:flex-row items-center justify-between gap-6 md:gap-4">

                    {/* 📢 Icon + Text */}
                    <div className="flex items-start md:items-center gap-4 w-full md:w-auto">
                        <div className="bg-white text-[#283266] w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold shadow-md shrink-0">
                            %
                        </div>
                        <div className="flex-1">
                            <h2 className="text-lg md:text-xl font-bold">
                                Limited Time Offer!
                            </h2>
                            <p className="text-sm md:text-base font-medium">
                                Fill in our form to receive a no-obligation FREE quote today plus a{" "}
                                <span className="underline font-bold">20% discount</span> on a chemical clean.
                            </p>
                        </div>
                    </div>

                    {/* 🎯 Button */}
                    <div className="w-full md:w-auto">
                        <a
                            href="tel:+60187819615"
                            className="block text-center bg-white text-[#283266] font-bold px-5 py-3 rounded-lg hover:bg-gray-100 transition-all w-full md:w-auto"
                        >
                            Claim Now
                        </a>
                    </div>

                </div>
            </div>

            <ScheduleSection />
            <CustomerTrustSection />
            <ServicesFeatures />
            <WhyChooseUs />
            <OfferSection />
            <AchievementsSection />
            <Footer />
        </>
    );
}
