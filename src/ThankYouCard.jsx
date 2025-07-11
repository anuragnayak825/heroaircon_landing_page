import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { FaCheckCircle } from "react-icons/fa";
import { FaArrowLeftLong } from "react-icons/fa6";
import StickyHeader from "./StickyHeader";
import Footer from "./Footer";
// import thankYouSound from "./assets/sounds/thankyou.mp3"; // ✅ add your sound here

export default function ThankYouCard() {
    useEffect(() => {
        window.gtag('event', 'conversion', {send_to: 'AW-17309566429/zZN4CLOs--0aEN2L7L1A'});
    }, []);
    return (
        <>
            <StickyHeader />
            <div className="w-full fixed z-50  min-h-screen flex items-center justify-center bg-green-100 p-6">
                <div className="bg-white max-w-xl w-full rounded-3xl shadow-xl px-8 py-12 text-center flex flex-col justify-center items-center">
                    {/* ✅ Animated Check Icon */}
                    <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ type: "spring", stiffness: 260, damping: 20 }}
                        className="flex mb-6 justify-center items-center"
                    >
                        <div className="w-24 h-24 bg-green-200 rounded-full flex items-center justify-center">
                            <FaCheckCircle className="text-green-600 text-5xl" />
                        </div>
                    </motion.div>

                    {/* ✅ Headline */}
                    <h1 className="text-xl md:text-2xl font-bold text-gray-800 mb-3">
                        Thank you for reaching out! Our team will get back to you as soon as possible.
                    </h1>

                    {/* ✅ Subtext */}
                    <p className="text-sm md:text-base text-gray-600 leading-relaxed mb-6">
                        Until then, feel free to explore our other services.
                    </p>

                    {/* ✅ Button */}
                    <button
                        className="bg-green-500 flex justify-center items-center hover:bg-green-600 text-white font-medium px-6 py-3 rounded-md transition-all duration-300"
                        onClick={() => { window.history.back() }}
                    >
                        <FaArrowLeftLong className="mr-3" />  Go Back
                    </button>
                </div>
            </div>

            <Footer />
        </>
    );
}
