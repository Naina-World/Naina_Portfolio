"use client";

import React, { useState } from "react";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    project: "",
    address: "",
    email: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form Submitted:", form);

    alert("Thanks for contacting me! I’ll reply soon.");
    setForm({ name: "", project: "", address: "", email: "", message: "" });
  };

  return (
    <section id="contact" className="py-16 bg-gray-100">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold text-black mb-6">Contact Me</h2>
        <p className="text-lg text-black mb-10 max-w-2xl mx-auto">
          Contact me for <span className="font-semibold">collaboration</span> and{" "}
          <span className="font-semibold">services of Website Development in WordPress</span> 
          and <span className="font-semibold">Real Code Web Development</span>.  
          I am always excited to work on innovative projects and provide 
          professional solutions.
        </p>

        {/* Contact Options */}
        <div className="flex flex-col md:flex-row justify-center gap-6 mb-12">
          <a
            href="mailto:youremail@example.com"
            className="bg-indigo-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-indigo-500 transition"
          >
            📧 Email Me
          </a>
          <a
            href="https://linkedin.com/in/yourprofile"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-500 transition"
          >
            🔗 LinkedIn
          </a>
          <a
            href="https://github.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gray-800 text-white px-6 py-3 rounded-lg font-medium hover:bg-gray-700 transition"
          >
            💻 GitHub
          </a>
        </div>

        {/* Contact Form */}
        <form
          onSubmit={handleSubmit}
          className="bg-white shadow-lg rounded-2xl p-8 max-w-2xl mx-auto space-y-6 text-black"
        >
          <div>
            <label className="block text-left text-sm font-semibold mb-2 text-black">Name</label>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border rounded-lg text-black placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              placeholder="Enter your name"
            />
          </div>

          <div>
            <label className="block text-left text-sm font-semibold mb-2 text-black">Project</label>
            <input
              type="text"
              name="project"
              value={form.project}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border rounded-lg text-black placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              placeholder="What project do you need?"
            />
          </div>

          <div>
            <label className="block text-left text-sm font-semibold mb-2 text-black">Address</label>
            <input
              type="text"
              name="address"
              value={form.address}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-lg text-black placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              placeholder="Enter your address"
            />
          </div>

          <div>
            <label className="block text-left text-sm font-semibold mb-2 text-black">Email</label>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border rounded-lg text-black placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              placeholder="Enter your email"
            />
          </div>

          <div>
            <label className="block text-left text-sm font-semibold mb-2 text-black">Message</label>
            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              rows={4}
              required
              className="w-full px-4 py-2 border rounded-lg text-black placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              placeholder="Write about your project detail .."
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full bg-indigo-600 text-white py-3 rounded-lg font-semibold hover:bg-indigo-700 transition"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}
