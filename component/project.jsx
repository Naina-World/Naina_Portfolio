import { useEffect, useState } from "react";
import axios from "axios";


export default function Projects(){
const [projects, setProjects] = useState([]);
const [loading, setLoading] = useState(true);
const base = process.env.NEXT_PUBLIC_API_BASE;


useEffect(()=>{
axios.get(`${base}/projects`).then(r=> setProjects(r.data)).finally(()=> setLoading(false));
},[base]);


return (
<section id="projects" className="py-20">
<div className="mx-auto w-[92%] max-w-6xl">
<h2 className="text-center font-display text-4xl md:text-5xl font-bold bg-gradient-to-r from-neon-green to-neon-blue bg-clip-text text-transparent">Projects</h2>
<p className="mt-3 text-center text-gray-400">Dynamic list fetched from your backend</p>


{loading ? (
<p className="mt-10 text-center text-gray-400">Loading projects...</p>
) : (
<div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
{projects.map((p) => (
<article key={p._id || p.title} className="card p-5 flex flex-col">
<h3 className="text-xl font-semibold">{p.title}</h3>
<p className="mt-2 text-gray-300 flex-1">{p.description}</p>
<a className="mt-4 btn-ghost" href={p.link} target="_blank" rel="noreferrer">View Project</a>
</article>
))}
</div>
)}
</div>
</section>
);
}