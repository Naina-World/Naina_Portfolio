import { ArrowUpRight, Github, Linkedin, Mail } from "lucide-react";
import { useSelector } from "react-redux";

export default function Footer() {
  const profile = useSelector((state) => state.portfolio.profile);

  return (
    <footer className="border-t border-white/[.09] py-[55px] pb-[30px]">
      <div className="w-[min(1180px,calc(100%-40px))] mx-auto max-[700px]:w-[min(1180px,calc(100%-28px))] grid grid-cols-2 gap-[35px] max-[700px]:grid-cols-1">
        <div>
          <div className="inline-flex items-center gap-[10px] text-[20px] font-extrabold tracking-[-.04em]">
            <span className="w-8 h-8 rounded-[9px] grid place-items-center bg-gradient-to-br from-[#ff4f9a] to-[#8b5cf6] text-white text-[15px] shadow-[0_8px_30px_rgba(255,79,154,.18)]">N</span>
            <span>Naina<span className="text-[#ff4f9a]">.</span></span>
          </div>
          <p className="text-[#777e8c] text-xs max-w-[300px] leading-[1.7]">
            Building thoughtful digital products with modern full-stack technologies.
          </p>
        </div>

        <div className="flex justify-end gap-5 [&_a]:text-[#888f9d] [&_a]:text-xs [&_a]:inline-flex [&_a]:items-center [&_a]:gap-1.5 [&_a:hover]:text-white max-[900px]:justify-start max-[700px]:flex-wrap">
          <a href={profile?.socialLinks?.github || "https://github.com/Naina-World"} target="_blank" rel="noreferrer">
            <Github size={17} /> GitHub
          </a>
          <a href={profile?.socialLinks?.linkedin || "https://www.linkedin.com/in/naina-kumari-681849373"} target="_blank" rel="noreferrer">
            <Linkedin size={17} /> LinkedIn
          </a>
          <a href={`mailto:${profile?.email || "nainakumarii734@gmail.com"}`}>
            <Mail size={17} /> Email
          </a>
        </div>

        <div className="col-span-full pt-[25px] border-t border-white/[.09] flex justify-between text-[#5e6470] text-[10px] [&_a]:inline-flex [&_a]:items-center [&_a]:gap-1 max-[700px]:col-auto max-[700px]:flex-col max-[700px]:items-start max-[700px]:gap-3">
          <span>© 2026 Naina. All rights reserved.</span>
          <a href="#top">Back to top <ArrowUpRight size={15} /></a>
        </div>
      </div>
    </footer>
  );
}