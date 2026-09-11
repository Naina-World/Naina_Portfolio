import { BriefcaseBusiness, Code2, GraduationCap, Sparkles } from "lucide-react";
import SectionHeading from "../common/SectionHeading";

const points = [
  {
    icon: GraduationCap,
    title: "BCA Graduate",
    text: "Computer Applications background with a strong foundation in software development."
  },
  {
    icon: Code2,
    title: "Full Stack",
    text: "Comfortable working across React frontends, REST APIs and MongoDB-backed services."
  },

  {
    icon: Sparkles,
    title: "Always Learning",
    text: "Currently deepening knowledge of scalable architecture, Next.js and modern backend practices."
  }
];

export default function About({ profile }) {
  
  return (
    <section id="about" className="py-[120px] border-t border-white/[.055] max-[700px]:py-[85px]">
      <div className="w-[min(1180px,calc(100%-40px))] mx-auto max-[700px]:w-[min(1180px,calc(100%-28px))]">
        <SectionHeading
          eyebrow="01 / About"
          title="Developer mindset, product focus."
          description="I care about clean architecture, useful interfaces and code that is easy for the next developer to understand."
        />

        <div className="grid grid-cols-[.9fr_1.1fr] gap-[90px] max-[900px]:grid-cols-1 max-[900px]:gap-[55px]">
          <div className="text-[#adb2bd] leading-[1.85] text-base [&_p]:mt-0 [&_p]:mb-5 [&_strong]:text-white">
            <p>
              I'm <strong>{profile?.name || "Naina Kumari"}</strong>, a fresher full-stack developer focused on
              building practical web applications. My strongest area is the JavaScript
              ecosystem, from component-driven React interfaces to Express APIs and MongoDB.
            </p>
            <p>
              I approach projects by first understanding the user flow, then designing the
              data model and API contract, and finally connecting everything through a clean UI.
            </p>
            <div className="border-l-2 border-[#ff4f9a] pl-[15px] mt-[35px] text-[#e4e6eb] font-bold text-sm">“Build it clearly. Ship it reliably.”</div>
          </div>

          <div className="grid grid-cols-2 gap-[30px] max-[900px]:grid-cols-2 max-[700px]:grid-cols-1">
            {points.map(({ icon: Icon, title, text }) => (
              <div className="flex gap-[14px]" key={title}>
                <div className="shrink-0 w-10 h-10 grid place-items-center border border-white/[.09] rounded-[10px] bg-[#11131a] text-[#ff65a8]"><Icon size={19} /></div>
                <div>
                  <h3>{title}</h3>
                  <p>{text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}