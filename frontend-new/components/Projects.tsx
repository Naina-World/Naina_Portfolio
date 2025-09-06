interface Project {
  title: string;
  description: string;
  tech: string[];
  link: string;
  category: "wordpress" | "fullstack";
}

const projects: Project[] = [
  {
    title: "AI Resume Scanner",
    description:
      "An AI-powered tool that scans resumes and provides keyword analysis for better job matching.",
    tech: ["Python", "TensorFlow", "React"],
    link: "https://github.com/your-username/resume-scanner",
    category: "fullstack",
  },
  {
    title: "Netflix Clone",
    description:
      "A full-featured Netflix clone with movie browsing, authentication, and video streaming.",
    tech: ["React", "Node.js", "MongoDB"],
    link: "https://github.com/your-username/netflix-clone",
    category: "fullstack",
  },
  {
    title: "Hospital Management System",
    description:
      "Java-based hospital management system to manage patients, doctors, and appointments.",
    tech: ["Java", "MySQL"],
    link: "https://github.com/your-username/hospital-system",
    category: "fullstack",
  },
  {
    title: "Business Website (WordPress)",
    description:
      "A responsive business website built with WordPress and Elementor.",
    tech: ["WordPress", "Elementor", "PHP"],
    link: "https://your-portfolio.com/business-site",
    category: "wordpress",
  },
  {
    title: "E-commerce Website (WordPress)",
    description:
      "An online store built with WooCommerce and customized WordPress theme.",
    tech: ["WordPress", "WooCommerce", "PHP"],
    link: "https://your-portfolio.com/ecommerce-site",
    category: "wordpress",
  },
];

export default function Projects() {
  // Split projects by category
  const wordpressProjects = projects.filter((p) => p.category === "wordpress");
  const fullstackProjects = projects.filter((p) => p.category === "fullstack");

  return (
    <section id="projects" className="bg-gray-100 py-12">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">
          My Projects
        </h2>

        {/* Full Stack Projects */}
        <h3 className="text-2xl font-semibold mb-6 text-gray-900">
          🚀 Full Stack Projects
        </h3>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {fullstackProjects.map((project, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition"
            >
              <h4 className="text-xl font-semibold mb-2 text-gray-900">
                {project.title}
              </h4>
              <p className="text-gray-600 mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((t, i) => (
                  <span
                    key={i}
                    className="bg-gray-200 text-gray-700 px-2 py-1 text-xs rounded"
                  >
                    {t}
                  </span>
                ))}
              </div>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline font-medium"
              >
                View Project →
              </a>
            </div>
          ))}
        </div>

        {/* WordPress Projects */}
        <h3 className="text-2xl font-semibold mb-6 text-gray-900">
          🌐 WordPress Projects
        </h3>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {wordpressProjects.map((project, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition"
            >
              <h4 className="text-xl font-semibold mb-2 text-gray-900">
                {project.title}
              </h4>
              <p className="text-gray-600 mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((t, i) => (
                  <span
                    key={i}
                    className="bg-gray-200 text-gray-700 px-2 py-1 text-xs rounded"
                  >
                    {t}
                  </span>
                ))}
              </div>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline font-medium"
              >
                View Project →
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}


