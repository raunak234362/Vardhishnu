import { useState, useEffect } from "react";
import { Heart, Menu, X } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import data from "../data/data.json";
import Logo from "../assets/logo.svg";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const isHomePage = location.pathname === "/";

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMenuOpen]);

  // Close menu on navigation
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location.pathname]);

  return (
    <nav
      className={`z-50 w-full transition-all duration-300 ${
        isHomePage
          ? "bg-black/5  backdrop-blur-sm"
          : "relative bg-black shadow-lg"
      }`}
    >
      <div className="container-custom py-3 flex justify-between items-center">
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
          <button 
            className="p-2 text-white"
            onClick={() => setIsMenuOpen(true)}
          >
            <Menu size={24} />
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed inset-0 z-100 bg-black/80 backdrop-blur-xl lg:hidden flex flex-col pt-24 "
          >
            <button 
              className="absolute top-8 right-8 p-2 text-white/60 hover:text-white"
              onClick={() => setIsMenuOpen(false)}
            >
              <X size={32} />
            </button>

            <div className="flex flex-col gap-8 bg-black/70">
              {data.header.navLinks.map((link, index) => {
                const isActive = location.pathname === link.url;
                return (
                  <motion.div
                    key={link.label}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05 }}
                  >
                    <Link
                      to={link.url}
                      className={`text-xl md:text-3xl font-medium tracking-tight font-sans ${
                        isActive ? "text-primary" : "text-white/80"
                      }`}
                    >
                      {link.label}
                    </Link>
                  </motion.div>
                );
              })}
            </div>

            <div className="mt-auto pb-20">
              <button className="w-full btn-primary h-16 text-xl">
                <Heart size={24} fill="currentColor" />
                <span>{data.header.cta}</span>
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
