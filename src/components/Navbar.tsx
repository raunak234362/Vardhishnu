import { Heart, Menu } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import data from "../data/data.json";
import Logo from "../assets/logo.svg";

const Navbar = () => {
  const location = useLocation();
  const isHomePage = location.pathname === "/";

  return (
    <nav
      className={`z-50 w-full transition-all duration-300 ${
        isHomePage
          ? "bg-black/5  backdrop-blur-sm"
          : "relative bg-black shadow-lg"
      }`}
    >
      <div className="container-custom py-4 flex justify-between items-center">
        <Link to="/" className="flex items-center gap-2">
          {/* Logo container */}
          <div className="text-2xl font-black text-white tracking-tighter">
            <img src={Logo} alt="Logo" className="w-18 h-18 rounded-md" />
          </div>
        </Link>

        <div className="hidden lg:flex items-center gap-8">
          <div className="flex items-center gap-8 pr-8 border-r border-white/20">
            {data.header.navLinks.map((link) => {
              const isActive = location.pathname === link.url;
              return (
                <Link
                  key={link.label}
                  to={link.url}
                  className={`relative group nav-link transition-colors font-medium whitespace-nowrap pb-1 ${
                    isActive
                      ? "text-primary! font-semibold"
                      : "text-white/80! hover:text-primary!"
                  }`}
                >
                  {link.label}
                  <span
                    className={`absolute -bottom-0.5 left-0 h-0.5 bg-primary transition-all duration-300 ${
                      isActive ? "w-8" : "w-0 group-hover:w-8"
                    }`}
                  />
                </Link>
              );
            })}
          </div>
          <div className="flex items-center gap-4">
            <button className="flex items-center gap-2">
              <Heart size={18} className="text-primary" />
              <span className="text-primary">{data.header.cta}</span>
            </button>
          </div>
        </div>

        <div className="lg:hidden flex items-center gap-4">
          <button className="btn-primary scale-90">
            <Heart size={18} fill="currentColor" />
            <span>{data.header.cta}</span>
          </button>
          <button className="p-2 text-white">
            <Menu size={24} />
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
