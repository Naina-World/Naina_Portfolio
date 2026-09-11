import { ArrowUpRight, CalendarDays } from "lucide-react";
import SectionHeading from "../common/SectionHeading";

export default function Experience() {
  return (
    <section id="experience" className="py-[120px] border-t border-white/[.055] max-[700px]:py-[85px] bg-[#0a0b0f]">
      <div className="w-[min(1180px,calc(100%-40px))] mx-auto max-[700px]:w-[min(1180px,calc(100%-28px))]">
        <SectionHeading
          eyebrow="04 / Experience"
          title="Learning through real work."
          description="Early-career experience focused on shipping usable websites and strengthening full-stack fundamentals."
        />

        <div className="max-w-[850px] ml-[50px] border-l border-[#292d36] max-[700px]:ml-[10px]">
          <article className="relative pb-[70px] pl-[45px] last:pb-0 max-[700px]:pl-[30px]">
            <div className="absolute w-[9px] h-[9px] bg-[#ff4f9a] rounded-full left-[-5px] top-1 shadow-[0_0_0_6px_#0a0b0f,0_0_20px_rgba(255,79,154,.5)]" />
            <div className="inline-flex gap-[6px] items-center text-[#6f7684] text-[10px] mb-[13px]"><CalendarDays size={15} /> 3 months</div>
            <div className="[&_h3]:text-[25px] [&_h3]:mt-[7px] [&_h3]:mb-[10px] [&_h3]:tracking-[-.03em] [&_p]:text-[#8e94a1] [&_p]:leading-[1.75] [&_p]:text-[13px] [&_p]:max-w-[720px] [&_p]:mb-[17px]">
              <span className="text-[#ff4f9a] text-[11px] uppercase tracking-[.12em] font-extrabold">Techies Gateway</span>
              <h3>WordPress Developer Intern</h3>
              <p>
                Worked on e-commerce websites using WordPress, Elementor and plugins.
                Focused on responsive layouts, page implementation and practical website delivery.
              </p>
              <a href="#contact" className="inline-flex items-center gap-[5px] text-[#d7dae1] text-xs font-bold border-b border-[#454956] pb-1 hover:text-white hover:border-[#ff4f9a]">Discuss an opportunity <ArrowUpRight size={15} /></a>
            </div>
          </article>

          <article className="relative pb-[70px] pl-[45px] last:pb-0 max-[700px]:pl-[30px]">
            <div className="absolute w-[9px] h-[9px] bg-[#ff4f9a] rounded-full left-[-5px] top-1 shadow-[0_0_0_6px_#0a0b0f,0_0_20px_rgba(255,79,154,.5)]" />
            <div className="inline-flex gap-[6px] items-center text-[#6f7684] text-[10px] mb-[13px]"><CalendarDays size={15} /> 2023 — 2026</div>
            <div className="[&_h3]:text-[25px] [&_h3]:mt-[7px] [&_h3]:mb-[10px] [&_h3]:tracking-[-.03em] [&_p]:text-[#8e94a1] [&_p]:leading-[1.75] [&_p]:text-[13px] [&_p]:max-w-[720px] [&_p]:mb-[17px]">
              <span className="text-[#ff4f9a] text-[11px] uppercase tracking-[.12em] font-extrabold">VBU</span>
              <h3>Bachelor of Computer Applications</h3>
              <p>
                Built a foundation in programming, OOP, DSA, DBMS, operating systems,
                computer networks and software engineering while developing web projects.
              </p>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}