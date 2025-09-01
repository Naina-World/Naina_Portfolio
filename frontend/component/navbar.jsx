import Link from "next/link";
export default function NavBar(){
return (
<header className="fixed top-0 left-0 right-0 z-50">
<nav className="mx-auto mt-4 w-[92%] max-w-6xl card flex items-center justify-between px-4 py-3">
<div className="flex items-center gap-3">
<div className="h-9 w-9 rounded-full bg-gradient-to-br from-neon-green to-neon-blue shadow-glow" />
<span className="font-display text-lg tracking-wide">Dev <span className="text-neon-purple">Portfolio</span></span>
</div>
<div className="hidden md:flex items-center gap-4 text-sm">
<a href="#home" className="btn-ghost">Home</a>
<a href="#about" className="btn-ghost">About</a>
<a href="#projects" className="btn-ghost">Projects</a>
<a href="#contact" className="btn-ghost">Contact</a>
<Link className="btn-primary" href="/resume.pdf" target="_blank">Resume</Link>
</div>
</nav>
</header>
);
}