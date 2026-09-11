import { ArrowUpRight, Github } from "lucide-react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import SectionHeading from "../common/SectionHeading";

export default function ProjectsPreview() {
  const projects = useSelector((state) => state.portfolio.projects);
  const featured = projects.filter((project) => project.featured);

  return (
    <section id="projects" className="py-[120px] border-t border-white/[.055] max-[700px]:py-[85px]">
      <div className="w-[min(1180px,calc(100%-40px))] mx-auto max-[700px]:w-[min(1180px,calc(100%-28px))]">
        <div className="flex justify-between items-end gap-[30px] max-[700px]:block [&_.page-heading]:mb-[45px] max-[700px]:[&_.page-heading]:mb-10 [&_.text-link]:max-[700px]:mb-10">
          <SectionHeading
            eyebrow="03 / Selected work"
            title="Projects with purpose."
            description="A few applications that demonstrate my frontend, backend and full-stack skills."
          />
          <Link className="inline-flex items-center gap-[5px] text-[#d7dae1] text-xs font-bold border-b border-[#454956] pb-1 hover:text-white hover:border-[#ff4f9a]" to="/projects">View all projects <ArrowUpRight size={16} /></Link>
        </div>

        <div className="grid grid-cols-2 gap-[18px] max-[700px]:grid-cols-1">
          {featured.map((project, index) => (
            <article className="min-h-[390px] relative overflow-hidden p-[30px] border border-white/[.09] rounded-[18px] bg-gradient-to-br from-white/[.045] to-white/[.015] transition-transform duration-200 transition-colors hover:-translate-y-[5px] hover:border-[#ff4f9a]/25 after:content-[''] after:absolute after:w-[180px] after:h-[180px] after:rounded-full after:right-[-80px] after:top-[-80px] after:bg-[#ff4f9a]/[.07] after:blur-[25px] max-[700px]:min-h-[390px]" key={project.id}>
              <div className="text-[#555b68] text-[11px] tracking-[.1em]">0{index + 1}</div>
              <div className="absolute left-[30px] right-[30px] bottom-[30px] [&_h3]:text-[29px] [&_h3]:tracking-[-.04em] [&_h3]:mt-3 [&_h3]:mb-[9px] [&_p]:text-[#8e94a1] [&_p]:text-[13px] [&_p]:leading-[1.65] [&_p]:max-w-[520px]">
                <div className="flex justify-between text-[#777e8c] uppercase tracking-[.1em] text-[9px]">
                  <span>{project.category}</span>
                  <span>{project.year}</span>
                </div>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="flex flex-wrap gap-[6px] my-[18px] [&_span]:border [&_span]:border-white/[.09] [&_span]:bg-white/[.025] [&_span]:rounded-full [&_span]:px-2 [&_span]:py-[5px] [&_span]:text-[#9da3b1] [&_span]:text-[9px]">
                  {project.technologies.map((tech) => <span key={tech}>{tech}</span>)}
                </div>
                <div className="flex gap-[18px] [&_a]:inline-flex [&_a]:items-center [&_a]:gap-[5px] [&_a]:text-[#d6d9e0] [&_a]:text-[11px] [&_a]:font-bold [&_a:hover]:text-[#ff69a9]">
                  <a href={project.liveUrl} target="_blank" rel="noreferrer">Live demo <ArrowUpRight size={15} /></a>
                  <a href={project.githubUrl} target="_blank" rel="noreferrer"><Github size={15} /> Code</a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}