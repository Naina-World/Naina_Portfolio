export default function About(){
return (
<section id="about" className="py-20">
<div className="mx-auto w-[92%] max-w-6xl">
<h2 className="text-center font-display text-4xl md:text-5xl font-bold bg-gradient-to-r from-neon-purple to-neon-blue bg-clip-text text-transparent">About Me</h2>
<p className="mt-3 text-center text-gray-400">Crafting digital experiences that push the boundaries of what&apos;s possible</p>


<div className="mt-10 grid gap-6 md:grid-cols-2 items-stretch">
<div className="card p-6 leading-relaxed">
<h3 className="text-xl font-semibold">My Journey</h3>
<p className="mt-3">I&apos;m a passionate <b>Full Stack Developer</b> who transforms ideas into powerful digital experiences. I specialize in the <b>MERN</b> stack and write clean, scalable code.</p>
<ul className="mt-4 space-y-3">
<li className="card p-3">Problem Solver — converting complex requirements into elegant solutions</li>
<li className="card p-3">Quality Focused — writing clean, maintainable code</li>
<li className="card p-3">Performance Optimizer — building fast, responsive apps</li>
</ul>
</div>
<div className="card grid place-items-center">
<div className="h-56 w-56 rounded-3xl bg-gradient-to-br from-neon-purple to-neon-blue grid place-items-center text-5xl font-display">DEV</div>
</div>
</div>
</div>
</section>
);
}