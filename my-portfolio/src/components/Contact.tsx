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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await fetch("https://formspree.io/f/mnnjzobo", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        alert("Message sent successfully!");
        setFormData({ name: "", email: "", message: "" });
      } else {
        alert("Oops! Something went wrong.");
      }
    } catch (error) {
      console.error("Error sending message:", error);
      alert("Oops! Something went wrong.");
    }
  };

  return (
    <section id="contact" className="bg-blue-50 text-darkBlue min-h-[90vh] py-32 px-6 relative">
      <motion.h2
        className="text-4xl font-bold text-center"
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
          <label className="block text-lg font-semibold">Name</label>
          <input
            type="text"
            name="name"
            className="w-full p-3 border border-gray-300 rounded-lg mt-1"
            placeholder="Enter your name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>

        {/* Email */}
        <div className="mb-4">
          <label className="block text-lg font-semibold">Email</label>
          <input
            type="email"
            name="email"
            className="w-full p-3 border border-gray-300 rounded-lg mt-1"
            placeholder="Enter your email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>

        {/* Message */}
        <div className="mb-4">
          <label className="block text-lg font-semibold">Message</label>
          <textarea
            name="message"
            className="w-full p-3 border border-gray-300 rounded-lg mt-1"
            placeholder="Write your message"
            rows={5}
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-darkBlue text-white p-3 rounded-lg hover:bg-lightBlue transition duration-300"
        >
          Send Message
        </button>
      </motion.form>
    </section>
  );
};

export default Contact;
