

export default function About() {
  return (
    <section id="about" className="py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center gap-10">
        {/* Left Image */}
        <div className="flex-1 flex justify-center">
          <img
            src="/profile.png"
            alt="Naina Kumari"
            className="w-64 h-64 md:w-72 md:h-72 rounded-full shadow-lg border-4 border-indigo-500"
          />
        </div>

        {/* Right Content */}
        <div className="flex-1 text-center md:text-left">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">About Me</h2>
          <h3 className="text-xl font-semibold text-indigo-600 mb-2">
            Naina Kumari
          </h3>
          <p className="text-gray-600 mb-6">
            I am a passionate <span className="font-semibold">Full Stack Developer</span>, 
            <span className="font-semibold"> WordPress Website Developer</span>, and a 
            dedicated <span className="font-semibold">BCA Student</span>.  
            I love learning new technologies and building innovative digital solutions 
            that solve real-world problems.
          </p>

          {/* Skills Section */}
          <div>
            <h4 className="text-lg font-semibold text-gray-700 mb-3">Skills:</h4>
            <ul className="flex flex-wrap gap-3 justify-center md:justify-start">
              <li className="bg-indigo-100 text-indigo-700 px-4 py-2 rounded-full text-sm font-medium">
                Full Stack Development
              </li>
              <li className="bg-indigo-100 text-indigo-700 px-4 py-2 rounded-full text-sm font-medium">
                WordPress Development
              </li>
              <li className="bg-indigo-100 text-indigo-700 px-4 py-2 rounded-full text-sm font-medium">
                React & Node.js
              </li>
              <li className="bg-indigo-100 text-indigo-700 px-4 py-2 rounded-full text-sm font-medium">
                HTML, CSS, JavaScript
              </li>
              <li className="bg-indigo-100 text-indigo-700 px-4 py-2 rounded-full text-sm font-medium">
                Java & Python (Basics)
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
