import React, { useState } from "react";
import { motion } from "framer-motion";

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Message Sent! (This is a placeholder action)");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section id="contact" className="bg-blue-300 text-darkBlue min-h-[90vh] py-32 px-6 relative">

      <motion.h2
        className="text-4xl font-bold text-center text-white z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        Contact Me
      </motion.h2>

      <motion.form
        className="max-w-4xl mx-auto mt-6 bg-white p-8 rounded-lg shadow-lg"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        onSubmit={handleSubmit}
      >
        {/* Name */}
        <div className="mb-4">
          <label className="block text-lg font-semibold text-darkBlue">Name</label>
          <input
            type="text"
            name="name"
            className="w-full p-3 border border-gray-300 rounded-lg mt-1 text-darkBlue"
            placeholder="Enter your name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>

        {/* Email */}
        <div className="mb-4">
          <label className="block text-lg font-semibold text-darkBlue">Email</label>
          <input
            type="email"
            name="email"
            className="w-full p-3 border border-gray-300 rounded-lg mt-1 text-darkBlue"
            placeholder="Enter your email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>

        {/* Message */}
        <div className="mb-4">
          <label className="block text-lg font-semibold text-darkBlue">Message</label>
          <textarea
            name="message"
            className="w-full p-3 border border-gray-300 rounded-lg mt-1 text-darkBlue"
            placeholder="Write your message..."
            rows={5}
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-blue-500 text-white p-3 rounded-lg transition-none opacity-100 visible"
          style={{ backgroundColor: "#4A90E2" }}
        >
          Send Message
        </button>




      </motion.form>
    </section>
  );
};

export default Contact;
