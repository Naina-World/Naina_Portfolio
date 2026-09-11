import { Link } from "react-router-dom";
import PageShell from "../components/layout/PageShell";

export default function NotFound() {
  return (
    <PageShell>
      <section className="min-h-[70vh] grid place-items-center text-center">
        <div>
          <span className="text-[90px] font-black tracking-[-.08em] text-[#ff4f9a]">404</span>
          <h1 className="text-[38px] tracking-[-.05em] m-0 mb-[10px]">Page not found.</h1>
          <p className="text-[#777e8c] mb-[25px]">The page you're looking for doesn't exist.</p>
          <Link className="min-h-[45px] inline-flex items-center justify-center gap-2 px-[18px] rounded-[10px] border border-white/[.09] font-bold text-[13px] transition-transform duration-200 transition-colors hover:-translate-y-0.5 hover:border-white/20 bg-gradient-to-br from-[#ff4f9a] to-[#c13cff] border-0 text-white shadow-[0_12px_35px_rgba(255,79,154,.16)]" to="/">Back home</Link>
        </div>
      </section>
    </PageShell>
  );
}