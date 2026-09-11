import { useSelector } from "react-redux";
import SectionHeading from "../common/SectionHeading";

const categoryLabels = {
  frontend: "Frontend",
  backend: "Backend",
  database: "Database",
  language: "Languages",
  tools: "Tools",
  other: "Core"
};

export default function Skills() {
  const skills = useSelector((state) => state.portfolio.skills);

  const grouped = skills.reduce((acc, skill) => {
    acc[skill.category] ||= [];
    acc[skill.category].push(skill);
    return acc;
  }, {});

  return (
    <section id="skills" className="py-[120px] border-t border-white/[.055] max-[700px]:py-[85px] bg-[#0a0b0f]">
      <div className="w-[min(1180px,calc(100%-40px))] mx-auto max-[700px]:w-[min(1180px,calc(100%-28px))]">
        <SectionHeading
          eyebrow="02 / Skills"
          title="Tools I use to build."
          description="A practical stack for modern frontend and backend development."
        />

        <div className="grid grid-cols-2 gap-x-[70px] gap-y-11 max-[700px]:grid-cols-1">
          {Object.entries(grouped).map(([category, items]) => (
            <div className="[&_h3]:text-xs [&_h3]:uppercase [&_h3]:tracking-[.14em] [&_h3]:text-[#777e8c] [&_h3]:m-0 [&_h3]:mb-[17px]" key={category}>
              <h3>{categoryLabels[category] || category}</h3>
              <div className="flex flex-wrap gap-2">
                {items.map((skill) => (
                  <div className="flex items-center gap-[9px] border border-white/[.09] rounded-[9px] px-3 py-[10px] bg-white/[.025] [&_span]:text-[13px] [&_span]:text-[#d9dce3] [&_small]:text-[9px] [&_small]:uppercase [&_small]:text-[#686f7d]" key={skill.id}>
                    <span>{skill.name}</span>
                    <small>{skill.level}</small>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}