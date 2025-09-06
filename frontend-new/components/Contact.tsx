import React from "react";

export default function Contact() {
  return (
    <section id="contact" className="py-16 bg-gray-100">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">Contact Me</h2>
        <p className="text-lg text-gray-600 mb-10 max-w-2xl mx-auto">
          Contact me for <span className="font-semibold">collaboration</span> and{" "}
          <span className="font-semibold">services of Website Development in WordPress</span> 
          and <span className="font-semibold">Real Code Web Development</span>.  
          I am always excited to work on innovative projects and provide 
          professional solutions.
        </p>

        {/* Contact Options */}
        <div className="flex flex-col md:flex-row justify-center gap-6">
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
      </div>
    </section>
  );
}
