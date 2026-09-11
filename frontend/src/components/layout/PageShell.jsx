import Header from "./Header";
import Footer from "./Footer";

export default function PageShell({ children }) {
  return (
    <div id="top" className="min-h-screen bg-[#08090c] text-[#f3f4f6] antialiased font-sans">
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
}