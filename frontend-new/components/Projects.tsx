

interface Project {
  title: string;
  description: string;
  tech: string[];
  link: string;
}

const projects: Project[] = [
  {
    title: "AI Resume Scanner",
    description:
      "An AI-powered tool that scans resumes and provides keyword analysis for better job matching.",
    tech: ["Python", "TensorFlow", "React"],
    link: "https://github.com/your-username/resume-scanner",
  },
  {
    title: "Netflix Clone",
    description:
      "A full-featured Netflix clone with movie browsing, authentication, and video streaming.",
    tech: ["React", "Node.js", "MongoDB"],
    link: "https://github.com/your-username/netflix-clone",
  },
  {
    title: "Hospital Management System",
    description:
      "Java-based hospital management system to manage patients, doctors, and appointments.",
    tech: ["Java", "MySQL"],
    link: "https://github.com/your-username/hospital-system",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="bg-gray-100 py-12">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">
          My Projects
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition"
            >
              <h3 className="text-xl font-semibold mb-2 text-gray-900">
                {project.title}
              </h3>
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