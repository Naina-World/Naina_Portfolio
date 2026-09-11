import { ArrowDown, ArrowUpRight, Download } from "lucide-react";
import { Link } from "react-router-dom";

export default function Hero({ profile }) {
  return (
    <section className="min-h-[calc(100vh-76px)] relative flex items-center overflow-hidden py-[100px] pb-[70px] max-[900px]:pt-[70px]">
      <div className="absolute rounded-full blur-[100px] opacity-[.22] w-[420px] h-[420px] bg-[#e22b86] right-[7%] top-[10%]" />
      <div className="absolute rounded-full blur-[100px] opacity-[.22] w-[280px] h-[280px] bg-[#6233dc] left-[-5%] bottom-0" />

      <div className="w-[min(1180px,calc(100%-40px))] mx-auto max-[700px]:w-[min(1180px,calc(100%-28px))] grid grid-cols-[1.05fr_.95fr] gap-20 items-center relative z-[1] max-[900px]:grid-cols-1 max-[900px]:gap-[55px]">
        <div className="max-w-[680px] max-[900px]:text-center max-[900px]:mx-auto">
          <div className="inline-flex items-center gap-[9px] px-3 py-2 border border-white/[.09] bg-white/[.03] rounded-full text-[#c8ccd5] text-xs mb-[25px]">
            <span className="w-[7px] h-[7px] rounded-full bg-[#42d392] shadow-[0_0_15px_#42d392]" />
            {profile.availability}
          </div>

          <p className="uppercase tracking-[.16em] text-[11px] text-[#888f9d] font-bold">{profile.eyebrow}</p>
          <h1 className="text-[clamp(52px,7vw,92px)] leading-[.96] tracking-[-.065em] my-[15px] mb-[25px] max-w-[800px] max-[700px]:text-[clamp(48px,15vw,68px)]">
            I build <span className="bg-gradient-to-r from-[#ff65a8] to-[#a78bfa] bg-clip-text text-transparent">digital products</span> that work.
          </h1>
          <p className="text-[#9da3b1] leading-[1.8] text-[17px] max-w-[630px] max-[700px]:text-sm">{profile.bio}</p>

          <div className="flex flex-wrap gap-3 mt-[30px] max-[900px]:justify-center">
            <Link className="min-h-[45px] inline-flex items-center justify-center gap-2 px-[18px] rounded-[10px] border border-white/[.09] font-bold text-[13px] transition-transform duration-200 transition-colors hover:-translate-y-0.5 hover:border-white/20 bg-gradient-to-br from-[#ff4f9a] to-[#c13cff] border-0 text-white shadow-[0_12px_35px_rgba(255,79,154,.16)]" to="/projects">
              View my work <ArrowUpRight size={18} />
            </Link>
            <a className="min-h-[45px] inline-flex items-center justify-center gap-2 px-[18px] rounded-[10px] border border-white/[.09] font-bold text-[13px] transition-transform duration-200 transition-colors hover:-translate-y-0.5 hover:border-white/20 bg-white/[.03] text-[#e9ebef]" href={profile.resumeUrl}>
              <Download size={17} /> Resume
            </a>
          </div>

          <div className="flex flex-wrap gap-[9px] mt-8 max-[900px]:justify-center [&_span]:border [&_span]:border-white/[.09] [&_span]:bg-white/[.025] [&_span]:rounded-full [&_span]:px-[10px] [&_span]:py-[6px] [&_span]:text-[#9da3b1] [&_span]:text-[11px]">
            <span>React</span>
            <span>Node.js</span>
            <span>Express</span>
            <span>MongoDB</span>
            <span>Next.js</span>
            <span>Django</span>
          </div>
        </div>

        <div className="relative min-h-[550px] grid place-items-center max-[900px]:min-h-[510px] max-[700px]:min-h-[430px]">
          <div className="w-[min(370px,80%)] p-3 border border-white/[.09] rounded-[24px] bg-white/[.045] rotate-[2deg] shadow-[0_40px_100px_rgba(0,0,0,.45)] max-[700px]:w-[285px]">
            <div className="h-[470px] rounded-[17px] overflow-hidden bg-[#1a1d25] max-[700px]:h-[360px]">
              <img className="block w-full h-full object-cover object-top saturate-[.88]" src={profile.avatarUrl} alt="Professional portrait" />
            </div>
            <div className="px-[10px] pt-[17px] pb-2 flex items-center justify-between [&>div:first-child]:flex [&>div:first-child]:flex-col [&>div:first-child]:gap-[3px] [&_strong]:text-base [&_span]:text-[#9da3b1] [&_span]:text-xs">
              <div>
                <strong>{profile.name}</strong>
                <span>{profile.headline}</span>
              </div>
              <div className="w-8 h-8 grid place-items-center rounded-[9px] bg-[#191c25] border border-white/[.09] text-[#c9cdd7] text-[11px] font-extrabold">FS</div>
            </div>
          </div>

          <div className="absolute px-[15px] py-[13px] bg-[#12141b]/[.86] border border-white/[.09] rounded-[13px] shadow-[0_20px_60px_rgba(0,0,0,.35)] backdrop-blur-[10px] top-[90px] left-0 -rotate-[6deg] max-[700px]:top-[45px]">
            <span className="text-[#ff4f9a] mr-2 text-[9px]">●</span>
            <code>&lt;build /&gt;</code>
          </div>

          <div className="absolute px-[15px] py-[13px] bg-[#12141b]/[.86] border border-white/[.09] rounded-[13px] shadow-[0_20px_60px_rgba(0,0,0,.35)] backdrop-blur-[10px] bottom-[70px] right-0 flex gap-[10px] items-center max-[700px]:right-0 max-[700px]:bottom-[25px] [&>span]:text-[#ff4f9a] [&_div]:flex [&_div]:flex-col [&_div]:gap-0.5 [&_small]:text-[#777e8c] [&_small]:text-[10px] [&_strong]:text-xs">
            <span>⌖</span>
            <div><small>Based in</small><strong>{profile.location}</strong></div>
          </div>
        </div>
      </div>

      <a className="absolute bottom-[26px] left-1/2 -translate-x-1/2 flex items-center gap-[7px] text-[#727886] text-[11px]" href="#about">
        <ArrowDown size={17} /> Scroll to explore
      </a>
    </section>
  );
}