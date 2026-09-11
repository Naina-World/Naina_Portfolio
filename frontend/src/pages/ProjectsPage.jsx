import { useMemo } from "react";
import { ArrowUpRight, Github } from "lucide-react";
import { useDispatch, useSelector } from "react-redux";
import PageShell from "../components/layout/PageShell";
import SectionHeading from "../components/common/SectionHeading";
import { setProjectCategory } from "../store/uiSlice";

const filters = ["all", "full-stack", "frontend", "backend", "mini-project"];

export default function ProjectsPage() {
  const dispatch = useDispatch();
  const projects = useSelector((state) => state.portfolio.projects);
  const active = useSelector((state) => state.ui.activeProjectCategory);

  const filtered = useMemo(
    () => active === "all" ? projects : projects.filter((p) => p.category === active),
    [projects, active]
  );

  return (
    <PageShell>
      <section className="py-[110px] pb-[50px] min-h-[50vh] [&_.page-heading]:mb-[30px] [&_.page-heading-h2]:text-[clamp(48px,7vw,82px)] max-[700px]:pt-[75px]">
        <div className="w-[min(1180px,calc(100%-40px))] mx-auto max-[700px]:w-[min(1180px,calc(100%-28px))]">
          <SectionHeading
            eyebrow="Projects"
            title="A closer look at my work."
            description="Explore the applications and experiments behind my full-stack development journey."
          />

          <div className="flex flex-wrap gap-2 mt-[35px]">
            {filters.map((filter) => (
              <button
                key={filter}
                className={`cursor-pointer border border-white/[.09] bg-transparent rounded-full px-[14px] py-[9px] text-[11px] capitalize hover:text-white hover:border-[#ff4f9a]/40 hover:bg-[#ff4f9a]/[.08] ${active === filter ? "text-white border-[#ff4f9a]/40 bg-[#ff4f9a]/[.08]" : "text-[#858b98]"}`}
                onClick={() => dispatch(setProjectCategory(filter))}
              >
                {filter.replace("-", " ")}
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="py-[120px] border-t border-white/[.055] max-[700px]:py-[85px] pt-10">
        <div className="w-[min(1180px,calc(100%-40px))] mx-auto max-[700px]:w-[min(1180px,calc(100%-28px))] grid grid-cols-2 gap-[18px] max-[700px]:grid-cols-1">
          {filtered.map((project, index) => (
            <article className="min-h-[360px] relative overflow-hidden p-[30px] border border-white/[.09] rounded-[18px] bg-gradient-to-br from-white/[.045] to-white/[.015] transition-transform duration-200 transition-colors hover:-translate-y-[5px] hover:border-[#ff4f9a]/25 after:content-[''] after:absolute after:w-[180px] after:h-[180px] after:rounded-full after:right-[-80px] after:top-[-80px] after:bg-[#ff4f9a]/[.07] after:blur-[25px] max-[700px]:min-h-[390px]" key={project.id}>
              <div className="text-[#555b68] text-[11px] tracking-[.1em]">{String(index + 1).padStart(2, "0")}</div>
              <div className="absolute left-[30px] right-[30px] bottom-[30px] [&_h3]:text-[29px] [&_h3]:tracking-[-.04em] [&_h3]:mt-3 [&_h3]:mb-[9px] [&_p]:text-[#8e94a1] [&_p]:text-[13px] [&_p]:leading-[1.65] [&_p]:max-w-[520px]">
                <div className="flex justify-between text-[#777e8c] uppercase tracking-[.1em] text-[9px]"><span>{project.category}</span><span>{project.year}</span></div>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="flex flex-wrap gap-[6px] my-[18px] [&_span]:border [&_span]:border-white/[.09] [&_span]:bg-white/[.025] [&_span]:rounded-full [&_span]:px-2 [&_span]:py-[5px] [&_span]:text-[#9da3b1] [&_span]:text-[9px]">{project.technologies.map((t) => <span key={t}>{t}</span>)}</div>
                <div className="flex gap-[18px] [&_a]:inline-flex [&_a]:items-center [&_a]:gap-[5px] [&_a]:text-[#d6d9e0] [&_a]:text-[11px] [&_a]:font-bold [&_a:hover]:text-[#ff69a9]">
                  <a href={project.liveUrl} target="_blank" rel="noreferrer">Live demo <ArrowUpRight size={15} /></a>
                  <a href={project.githubUrl} target="_blank" rel="noreferrer"><Github size={15} /> Code</a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>
    </PageShell>
  );
}