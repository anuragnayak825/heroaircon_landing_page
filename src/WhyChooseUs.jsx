import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { FaHardHat, FaHandHoldingUsd, FaClock, FaUsers } from "react-icons/fa";

export default function WhyChooseUs() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <motion.section
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, ease: "easeInOut" }}
      className="bg-white w-full px-4 sm:px-6 md:px-10 lg:px-20 py-12 text-center overflow-hidden"
    >
      {/* Section Badge */}
      <div className="mb-4">
        <span className="bg-orange-400 text-white px-4 py-2 rounded-full text-sm font-bold">
          TOP 4 REASONS
        </span>
      </div>

      {/* Heading */}
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
        Why Clients Trust Us
      </h2>
      <p className="text-gray-600 max-w-3xl mx-auto font-sans mb-10 tracking-wide font-medium">
        Whether it's your home or your business, we know how important it is to stay cool in Malaysia’s tropical weather. That’s why we offer reliable, fast, and expert AC services tailored to your lifestyle.
      </p>

      {/* Features Grid */}
      <motion.div
        className="flex flex-wrap justify-center gap-6 md:gap-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeInOut" }}
      >
        <ReasonCard
          icon={<FaHardHat size={45} />}
          title="Certified & Skilled Technicians"
          description="Our technicians are fully trained and certified to handle all types of air conditioning systems with accuracy and professionalism."
          delay={0.1}
          direction="left"
        />
        <ReasonCard
          icon={<FaHandHoldingUsd size={45} />}
          title="Transparent & Fair Pricing"
          description="We offer honest pricing with no hidden fees, ensuring you get the best value for high-quality aircon services in Kuala Lumpur."
          delay={0.2}
          direction="right"
        />
        <ReasonCard
          icon={<FaClock size={45} />}
          title="Fast Response & On-Time Service"
          description="We understand urgency. That’s why we prioritize fast turnarounds and always arrive on schedule for installations and repairs."
          delay={0.3}
          direction="left"
        />
        <ReasonCard
          icon={<FaUsers size={45} />}
          title="Backed by a Strong Base of Happy Clients"
          description="Customer satisfaction is our top priority. We've built long-term trust through reliable, consistent, and friendly service."
          delay={0.4}
          direction="right"
        />
      </motion.div>
    </motion.section>
  );
}

function ReasonCard({ icon, title, description, delay = 0, direction = "left" }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "0px 0px -50px 0px" });

  const initialX = direction === "left" ? -40 : 40;

  return (
    <motion.div
      ref={ref}
      initial={{ x: initialX }}
      animate={isInView ? { x: 0 } : {}}
      transition={{ duration: 0.5, delay, ease: "easeInOut" }}
      className="border w-full sm:max-w-sm md:max-w-md flex items-start space-x-5 border-cyan-600 rounded-lg px-6 py-7 text-left bg-white shadow hover:shadow-md transition-all duration-300 transform hover:-translate-y-1"
    >
      <div className="text-cyan-700">{icon}</div>
      <div className="space-y-3">
        <h3 className="font-bold text-lg text-gray-800">{title}</h3>
        <p className="text-sm text-gray-600">{description}</p>
      </div>
    </motion.div>
  );
}
