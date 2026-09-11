import { ArrowUpRight, Mail } from "lucide-react";
import { Link } from "react-router-dom";

export default function ContactCTA({ profile }) {
  return (
    <section id="contact" className="py-[40px] pb-[120px]">
      <div className="w-[min(1180px,calc(100%-40px))] mx-auto max-[700px]:w-[min(1180px,calc(100%-28px))]">
        <div className="text-center py-[75px] px-[25px] border border-white/[.09] rounded-[24px] bg-[radial-gradient(circle_at_50%_0%,rgba(255,79,154,.1),transparent_45%),#101218] [&_h2]:text-[clamp(38px,6vw,65px)] [&_h2]:tracking-[-.06em] [&_h2]:my-[10px] [&_h2]:mb-[14px] [&>p:not(.eyebrow)]:text-[#858b98] [&>p:not(.eyebrow)]:max-w-[540px] [&>p:not(.eyebrow)]:mx-auto [&>p:not(.eyebrow)]:leading-[1.7] [&_.hero-actions]:justify-center">
          <div className="w-[45px] h-[45px] mx-auto mb-5 grid place-items-center rounded-[13px] bg-[#ff4f9a]/10 text-[#ff4f9a]"><Mail size={22} /></div>
          <p className="uppercase tracking-[.16em] text-[11px] text-[#888f9d] font-bold">Have a role or project?</p>
          <h2>Let's build something useful.</h2>
          <p>I'm open to full-time opportunities, internships and selected freelance work.</p>
          <div className="flex flex-wrap gap-3 mt-[30px] max-[900px]:justify-center">
            <a className="min-h-[45px] inline-flex items-center justify-center gap-2 px-[18px] rounded-[10px] border border-white/[.09] font-bold text-[13px] transition-transform duration-200 transition-colors hover:-translate-y-0.5 hover:border-white/20 bg-white/[.03] text-[#e9ebef]" href={`mailto:${profile.email}`}>{profile.email}</a>
          </div>
        </div>
      </div>
    </section>
  );
}