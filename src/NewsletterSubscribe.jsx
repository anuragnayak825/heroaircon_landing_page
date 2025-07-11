import React from "react";

export default function NewsletterSubscribe() {
  return (
    <div className="w-full  max-w-5xl mx-auto absolute px-6">
      <div className="bg-[#ff5722] rounded-xl text-white p-8 md:p-10 shadow-xl relative -mb-20 z-10">
        {/* 🌿 Background Decoration (optional) */}
        <div className="absolute inset-0 opacity-10 bg-[url('http://html.laralink.com/donaty/assets/img/leaf_shape.svg')] bg-no-repeat bg-right bg-contain pointer-events-none" />

        {/* 📬 Content */}
        <h2 className="text-xl md:text-2xl font-bold mb-2">Subscribe Our Newsletter</h2>
        <p className="text-sm md:text-base mb-4">Join the style revolution and subscribe to our fashion shop</p>

        <div className="flex flex-col sm:flex-row items-center gap-3">
          <input
            type="email"
            placeholder="Enter your email address ..."
            className="px-5 py-3 rounded-full w-full sm:w-[60%] text-gray-700 outline-none"
          />
          <button className="bg-yellow-400 hover:bg-yellow-500 text-black font-semibold px-6 py-3 rounded-full transition">
            Subscribe
          </button>
        </div>
      </div>
    </div>
  );
}
