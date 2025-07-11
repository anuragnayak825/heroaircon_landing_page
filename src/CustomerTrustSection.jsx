import React from "react";
import { FaPhoneAlt } from "react-icons/fa";
import { BsWhatsapp } from "react-icons/bs";
import {
    MdOutlineGroups,
    MdOutlineVisibility,
    MdOutlineBadge,
    MdOutlineHourglassEmpty,
    MdOutlineMap,
    MdHandshake,
} from "react-icons/md";

export default function CustomerTrustSection() {
    return (
        <div className="bg-[#f7f7f7] px-6 md:px-20 py-6 flex justify-center ">
            {/* Floating Call Button */}

            {/* Main Section */}
            <div className="flex flex-col lg:flex-row justify-between items-center gap-12">
                {/* Left Content */}
                <div className="max-w-xl text-center lg:text-left">
                    <h2 className="text-6xl mb-7 font-bold text-orange-500">40,000+</h2>
                    <h1 className="text-4xl pb-5 font-semibold text-gray-900">
                       Your trusted partner for aircond services.
                    </h1>
                    <span className="text-3xl font-bold">Learn Why Customers Choose Us</span>
                    <p className="text-gray-700 text-xl font-semibold mt-4">
                       Bringing you high-performance aircon solutions with the latest technology.
                    </p>
                    {/* Offer Button with Call Action */}
                    <a href="tel:+60187819615">
                        <button className="mt-6 bg-[#283266] text-white font-semibold px-6 py-3 rounded-md shadow-md hover:bg-[#1f274f] transition-all">
                            Get Special 10% Off
                        </button>
                    </a>

                </div>

                {/* Right Features Grid */}
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-6">
                    <FeatureCard icon={<MdOutlineGroups size={50} />} label="RELIABILITY" />
                    <FeatureCard icon={<MdOutlineVisibility size={50} />} label="TRANSPARENCY" />
                    <FeatureCard icon={<MdOutlineBadge size={50} />} label="EXPERTISE" />
                    <FeatureCard icon={<MdOutlineHourglassEmpty size={50} />} label="SERVICE" />
                    <FeatureCard icon={<MdOutlineMap size={50} />} label="WIDE COVERAGE" />
                    <FeatureCard icon={<MdHandshake size={50} />} label="HIGH-QUALITY SERVICING" />
                </div>
            </div>

        </div>
    );
}

function FeatureCard({ icon, label }) {
    return (
        <div className="border border-gray-300 bg-white rounded-md h-[35vh] py-4 px-2.5 flex flex-col items-center justify-center space-y-5 shadow-md hover:shadow-lg transition duration-300 e">
            <div className="w-24 h-24 rounded-full border-1 border-gray-400 flex justify-center items-center">
                <div className="text-[#2895C2] text-">{icon}</div>
            </div>
            <p className="text-sm font-semibold text-gray-700 tracking-wide">{label}</p>
        </div>
    );
}
