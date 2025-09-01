import { useState } from "react";
import axios from "axios";


export default function Contact(){
const base = process.env.NEXT_PUBLIC_API_BASE;
const [form, setForm] = useState({ name: "", email: "", message: "" });
const [status, setStatus] = useState("");


const submit = async (e)=>{
e.preventDefault();
setStatus("Sending...");
try{
await axios.post(`${base}/contact`, form);
setStatus("Thanks! I will get back to you soon.");
setForm({ name: "", email: "", message: "" });
}catch(err){ setStatus("Failed to send. Try again."); }
};


return (
<section id="contact" className="py-20">
<div className="mx-auto w-[92%] max-w-3xl">
<h2 className="text-center font-display text-4xl md:text-5xl font-bold bg-gradient-to-r from-neon-blue to-neon-purple bg-clip-text text-transparent">Contact</h2>
<p className="mt-3 text-center text-gray-400">Let&apos;s build something great together</p>


<form onSubmit={submit} className="mt-10 card p-6 space-y-4">
<input className="w-full rounded-xl bg-white/5 border border-white/10 p-3 outline-none focus:border-neon-blue" placeholder="Your name" value={form.name} onChange={e=> setForm({...form, name:e.target.value})} required />
<input type="email" className="w-full rounded-xl bg-white/5 border border-white/10 p-3 outline-none focus:border-ne