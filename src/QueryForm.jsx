import React, { useRef, useState } from "react";
import emailjs from "emailjs-com";
import { HiOutlineMail } from "react-icons/hi";
import { useNavigate } from "react-router-dom";

export default function QueryForm() {
  const form = useRef();
  const [loading, setLoading] = useState(false);
  const [phone, setPhone] = useState("");
  const navigate = useNavigate();

  // Format phone number to XXX-XXX XXXX
  const formatPhoneNumber = (value) => {
    const digits = value.replace(/\D/g, ""); // Remove non-digits
    if (digits.length <= 3) {
      return digits;
    } else if (digits.length <= 6) {
      return `${digits.slice(0, 3)}-${digits.slice(3)}`;
    } else if (digits.length <= 10) {
      return `${digits.slice(0, 3)}-${digits.slice(3, 6)} ${digits.slice(6)}`;
    } else {
      return `${digits.slice(0, 3)}-${digits.slice(3, 6)} ${digits.slice(6, 10)}`;
    }
  };

  const isValidPhone = (phone) => {
    const regex = /^01[0-9]-\d{3}\s\d{4}$/;
    return regex.test(phone);
  };

  const sendEmail = (e) => {
    e.preventDefault();

    if (!isValidPhone(phone)) {
      alert("❌ Please enter a valid Malaysian phone number (e.g., 018-781 9615)");
      return;
    }

    setLoading(true);

    emailjs
      .sendForm(
        "service_5ezhz9b",
        "template_s4acvaw",
        form.current,
        "Sucm6Ho9Tm5d4Ehuo"
      )
      .then(
        () => {
          form.current.reset();
          setPhone(""); // reset phone input
          setLoading(false);
          navigate("thank-you");
        },
        (error) => {
          console.log(error);
          setLoading(false);
          alert("❌ Failed to send message. Try again.");
        }
      );
  };

  return (
    <form
      ref={form}
      onSubmit={sendEmail}
      className="w-full max-w-md md:max-w-lg lg:max-w-[570px] mx-auto flex flex-col space-y-2.5 p-5 md:p-6 bg-white/90 backdrop-blur-md rounded-xl shadow-2xl"
    >
      <h2 className="text-2xl font-bold text-black font-serif mb-1">
        Send Your Query
      </h2>

      {/* Name */}
      <div>
        <label className="text-base font-semibold text-black block mb-1">
          Name <span className="text-red-600">*</span>
        </label>
        <input
          type="text"
          name="user_name"
          required
          placeholder="Enter your name"
          className="w-full border border-gray-300 bg-gray-50 px-4 py-2.5 rounded-lg outline-none placeholder-gray-400"
        />
      </div>

      {/* Phone */}
      <div>
        <label className="text-base font-semibold text-black block mb-1">
          Phone Number <span className="text-red-600">*</span>
        </label>
        <div className="flex border border-gray-300 rounded-lg bg-gray-50 overflow-hidden">
          <span className="flex items-center px-3 py-2 border-r border-gray-300 bg-gray-100">
            <img
              src="https://flagcdn.com/w40/my.png"
              alt="Flag"
              className="w-6 h-4 object-cover"
            />
          </span>
          <input
            type="tel"
            name="user_phone"
            value={phone}
            onChange={(e) => setPhone(formatPhoneNumber(e.target.value))}
            required
            placeholder="018-781 9615"
            maxLength={13}
            className="flex-1 px-4 py-2 bg-transparent text-base outline-none placeholder-gray-400"
          />
        </div>
      </div>

      {/* Address */}
      <div>
        <label className="text-base font-semibold text-black block mb-1">
          Address <span className="text-red-600">*</span>
        </label>
        <input
          type="text"
          name="user_address"
          required
          placeholder="Enter your address"
          className="w-full border border-gray-300 bg-gray-50 px-4 py-2.5 rounded-lg outline-none placeholder-gray-400"
        />
      </div>

      {/* Additional Info */}
      <div>
        <label className="text-base font-semibold text-black block mb-1">
          Additional Information <span className="text-red-600">*</span>
        </label>
        <input
          type="text"
          name="message"
          required
          placeholder="Enter details"
          className="w-full border border-gray-300 bg-gray-50 px-4 py-2.5 rounded-lg outline-none placeholder-gray-400"
        />
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        disabled={loading}
        className="bg-[#0f74b5] hover:bg-[#0c5d91] text-white py-3 px-6 rounded-lg font-semibold flex items-center justify-center gap-2 transition-all"
      >
        {loading ? (
          <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
        ) : (
          <>
            <HiOutlineMail className="text-xl" />
            Submit
          </>
        )}
      </button>
    </form>
  );
}
