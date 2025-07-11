import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaWhatsapp,
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-t from-gray-50 to-white text-gray-700 py-6">

      {/* Top Grid Section */}
      <div className="max-w-7xl mx-auto px-6 sm:px-6 lg:px-8 py-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">

        {/* Logo & Description */}
        <div className="space-y-6">
          <img
            src="https://heroairconn.com/wp-content/uploads/2024/09/logoaircon-768x154.png"
            alt="Hero Aircon Logo"
            className="w-52 mb-4"
          />
          <p className="text-lg leading-relaxed text-gray-600">
            Trusted aircon solutions for residential and commercial spaces across Malaysia — your comfort is what matters most.
          </p>
        </div>

        {/* Contact Info */}
        <div className="space-y-6">
          <h4 className="text-xl font-semibold text-gray-900">Contact Us</h4>
          <ul className="space-y-4">
            <li className="flex items-center gap-3">
              <FaEnvelope className="text-teal-500" />
              <span>heroairconn@gmail.com</span>
            </li>
            <li className="flex items-center gap-3">
              <FaPhoneAlt className="text-teal-500" />
              <span>+60 187-8196 15</span>
            </li>
            <li className="flex items-center gap-3">
              <FaMapMarkerAlt className="text-teal-500" />
              <span>Kuala Lumpur, Malaysia</span>
            </li>
          </ul>
        </div>

        {/* Consumer Policy */}
        <div className="space-y-6">
          <h4 className="text-xl font-semibold text-gray-900">Consumer Policy</h4>
          <ul className="space-y-2">
            <li>
              <a href="#" className="text-teal-500 hover:text-teal-600 transition">
                Terms and Conditions
              </a>
            </li>
            <li>
              <a href="https://heroairconn.com/privacy-policy" className="text-teal-500 hover:text-teal-600 transition">
                Privacy Policy
              </a>
            </li>
          </ul>
        </div>

        {/* Call Button */}
        <div className="flex flex-col justify-center items-center lg:justify-start space-y-3">
          <a
            href="tel:+60187819615"
            className="bg-teal-600 hover:bg-teal-700 text-white font-semibold rounded-full py-3 px-6 flex items-center justify-center gap-4 transition-all"
          >
            <FaPhoneAlt className="text-lg" />
            <span>+60 18-781 9615</span>
          </a>
          <div className="mt-6 text-center text-gray-500 text-sm">
            <p>Providing you with top-notch air conditioning solutions.</p>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="bg-gray-100 py-4 text-center text-gray-600 text-sm">
        <p>&copy; 2025 Hero Aircon. All rights reserved.</p>
      </div>
    </footer>
  );
}
