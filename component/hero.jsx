export default function Hero(){
return (
<section id="home" className="relative pt-28 md:pt-36 pb-16 md:pb-24 bg-hero">
<div className="absolute inset-0 bg-grid opacity-30" />
<div className="relative mx-auto w-[92%] max-w-6xl text-center">
<p className="text-neon-blue/90 tracking-[0.25em] text-sm md:text-base">&gt; INITIALIZING PORTFOLIO...</p>
<p className="mt-6 text-gray-300">Hello, World! I&apos;m</p>
<h1 className="mt-2 font-display text-5xl md:text-7xl font-extrabold bg-gradient-to-r from-neon-blue via-neon-purple to-neon-green bg-clip-text text-transparent">Dev Kant Kumar</h1>
<p className="mt-3 text-lg md:text-xl text-gray-300">Full Stack Developer &amp; Digital Architect</p>
<div className="mx-auto mt-8 max-w-xl card p-6">
<p className="text-sm text-gray-400">CURRENT_ROLE :</p>
<p className="mt-2 text-xl md:text-2xl text-neon-green">Clean Code Advocate</p>
</div>
<div className="mt-6 flex flex-wrap items-center justify-center gap-3">
{["React","Node.js","MongoDB","Express","TypeScript","Next_js"].map(t=> (
<span key={t} className="tag">{t}</span>
))}
</div>
<div className="mt-10 flex flex-wrap items-center justify-center gap-4">
<a href="#projects" className="btn-primary">EXPLORE PORTFOLIO</a>
<a href="#contact" className="btn-ghost">HIRE ME NOW</a>
<a className="btn-ghost" href="/resume.pdf" target="_blank">DOWNLOAD RESUME</a>
</div>
</div>
</section>
);
}