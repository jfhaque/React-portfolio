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
    <section id="contact" className="bg-gradient-to-r from-primaryBlue via-mediumBlue to-accentBlue text-darkBlue py-16 px-6">
      <motion.h2
        className="text-5xl font-bold text-center text-darkBlue"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        Contact Me
      </motion.h2>

      <motion.form
        className="max-w-4xl mx-auto mt-6 bg-white p-8 rounded-lg shadow-xl border-4 border-accentBlue"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        onSubmit={handleSubmit}
      >
        {/* Name */}
        <div className="mb-6">
          <label className="block text-lg font-semibold text-darkBlue">Name</label>
          <input
            type="text"
            name="name"
            className="w-full p-3 border border-mediumBlue rounded-lg mt-1 focus:outline-none focus:ring-2 focus:ring-darkBlue"
            placeholder="Enter your name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>

        {/* Email */}
        <div className="mb-6">
          <label className="block text-lg font-semibold text-darkBlue">Email</label>
          <input
            type="email"
            name="email"
            className="w-full p-3 border border-accentBlue rounded-lg mt-1 focus:outline-none focus:ring-2 focus:ring-darkBlue"
            placeholder="Enter your email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>

        {/* Message */}
        <div className="mb-6">
          <label className="block text-lg font-semibold text-darkBlue">Message</label>
          <textarea
            name="message"
            className="w-full p-3 border border-mediumBlue rounded-lg mt-1 focus:outline-none focus:ring-2 focus:ring-darkBlue"
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
          className="w-full bg-darkBlue text-white p-3 rounded-lg hover:bg-accentBlue transition duration-300"
        >
          Send Message
        </button>
      </motion.form>
    </section>
  );
};

export default Contact;
