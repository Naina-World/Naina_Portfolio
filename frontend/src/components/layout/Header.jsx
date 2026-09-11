import { Link, NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { useDispatch, useSelector } from "react-redux";
import { closeMobileMenu, toggleMobileMenu } from "../../store/uiSlice";

const links = [
  { to: "/", label: "Home" },
  { to: "/#about", label: "About" },
  { to: "/#skills", label: "Skills" },
  { to: "/projects", label: "Projects" },
];

export default function Header() {
  const dispatch = useDispatch();
  const open = useSelector((state) => state.ui.mobileMenuOpen);

  const handleClick = () => dispatch(closeMobileMenu());

  return (
    <header className="sticky top-0 z-20 border-b border-white/[.06] bg-[#08090c]/[.78] backdrop-blur-[18px]">
      <div className="w-[min(1180px,calc(100%-40px))] mx-auto max-[700px]:w-[min(1180px,calc(100%-28px))] h-[76px] flex items-center justify-between max-[700px]:h-[68px]">
        <Link to="/" className="inline-flex items-center gap-[10px] text-[20px] font-extrabold tracking-[-.04em]" onClick={handleClick}>
          <span className="w-8 h-8 rounded-[9px] grid place-items-center bg-gradient-to-br from-[#ff4f9a] to-[#8b5cf6] text-white text-[15px] shadow-[0_8px_30px_rgba(255,79,154,.18)]">N</span>
          <span>Naina<span className="text-[#ff4f9a]">.</span></span>
        </Link>

        <nav className={`flex items-center gap-7 [&_a]:text-[#aeb3bf] [&_a]:text-sm [&_a]:transition-colors [&_a]:duration-200 [&_a:hover]:text-white [&_a.active]:text-white max-[700px]:absolute max-[700px]:top-[68px] max-[700px]:left-0 max-[700px]:right-0 max-[700px]:p-5 max-[700px]:hidden max-[700px]:flex-col max-[700px]:items-stretch max-[700px]:gap-1 max-[700px]:bg-[#08090c]/[.98] max-[700px]:border-b max-[700px]:border-white/[.09] ${open ? "max-[700px]:flex" : ""}`}>
          {links.map((link) =>
            link.to.includes("#") ? (
              <a key={link.label} href={link.to} onClick={handleClick}>{link.label}</a>
            ) : (
              <NavLink key={link.to} to={link.to} onClick={handleClick}>
                {link.label}
              </NavLink>
            )
          )}
          <Link className="border border-white/[.09] px-[15px] py-[10px] rounded-full !text-white max-[700px]:text-center max-[700px]:mt-2" to="/contact" onClick={handleClick}>Let's talk</Link>
        </nav>

        <button
          className="hidden border-0 text-white bg-transparent max-[700px]:block"
          onClick={() => dispatch(toggleMobileMenu())}
          aria-label="Toggle menu"
        >
          {open ? <X size={23} /> : <Menu size={23} />}
        </button>
      </div>
    </header>
  );
}