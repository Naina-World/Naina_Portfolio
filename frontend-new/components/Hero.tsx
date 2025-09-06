import React from "react";

export default function Hero() {
  return (
    <section
      id="hero"
      className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 text-white py-20"
    >
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center">
        {/* Left Content */}
        <div className="flex-1 text-center md:text-left">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Hi, I’m <span className="text-yellow-300">Your Name</span>
          </h1>
          <h2 className="text-2xl md:text-3xl font-semibold mb-6">
            Aspiring Software Developer & AI Engineer
          </h2>
          <p className="text-lg text-gray-200 mb-6 max-w-xl">
            I’m a passionate student who loves building web applications and AI
            projects. Always excited to learn new technologies and solve
            real-world problems.
          </p>
          <div className="flex justify-center md:justify-start gap-4">
            <a
              href="#projects"
              className="bg-yellow-400 text-gray-900 px-6 py-3 rounded-lg font-semibold hover:bg-yellow-300 transition"
            >
              View My Work
            </a>
            <a
              href="#contact"
              className="border-2 border-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-gray-900 transition"
            >
              Contact Me
            </a>
          </div>
        </div>

        {/* Right Image */}
        <div className="flex-1 mt-10 md:mt-0 flex justify-center">
          <img
            src="/profile.png"
            alt="Profile"
            className="w-60 h-60 md:w-72 md:h-72 rounded-full border-4 border-yellow-400 shadow-lg"
          />
        </div>
      </div>
    </section>
  );
}
