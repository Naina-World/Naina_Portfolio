import { Quote } from "lucide-react";
import { useSelector } from "react-redux";
import SectionHeading from "../common/SectionHeading";

export default function Testimonials() {
  const testimonials = useSelector((state) => state.portfolio.testimonials);

  return (
    <section className="py-[120px] border-t border-white/[.055] max-[700px]:py-[85px] pb-[100px]">
      <div className="w-[min(1180px,calc(100%-40px))] mx-auto max-[700px]:w-[min(1180px,calc(100%-28px))]">
        <SectionHeading eyebrow="05 / Feedback" title="What people say." center />

        <div className="grid grid-cols-2 gap-[18px] max-[700px]:grid-cols-1">
          {testimonials.map((item) => (
            <article className="p-[30px] border border-white/[.09] rounded-[17px] bg-white/[.025] [&>svg]:text-[#ff4f9a] [&_p]:text-base [&_p]:leading-[1.7] [&_p]:text-[#c5c9d1] [&_p]:my-[22px] [&_p]:mb-7 [&_div]:flex [&_div]:flex-col [&_div]:gap-1 [&_strong]:text-[13px] [&_span]:text-[#6f7684] [&_span]:text-[11px]" key={item.id}>
              <Quote size={25} />
              <p>“{item.quote}”</p>
              <div>
                <strong>{item.name}</strong>
                <span>{item.role} · {item.company}</span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}