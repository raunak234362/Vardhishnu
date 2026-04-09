import { useState, useEffect } from "react";
import { Heart, Menu, X } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import data from "../data/data.json";
import Logo from "../assets/logo.svg";

const Navbar = () => {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [windowWidth, setWindowWidth] = useState(typeof window !== "undefined" ? window.innerWidth : 1200);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

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

  const overlayPages = ["/", "anandghar", "communitycollectives", "fellowship", "resources", "our-programs"];
  const isOverlayPage = overlayPages.some(p => 
    location.pathname === "/" ? p === "/" : (location.pathname.includes(p) && p !== "/")
  );

  const isDesktop = windowWidth >= 1024;
  const isSticky = location.pathname === "/" || (!isDesktop && isOverlayPage);

  return (
    <nav
      className={`z-50 w-full transition-all duration-300 ${
        isSticky
          ? "absolute top-0 md:top-9 left-0 bg-black/5"
          : "relative bg-black/5 shadow-lg"
      }`}
    >
      <div className="container-custom py-3 flex justify-between items-center">
        <Link to="/" className="flex items-center gap-2">
          {/* Logo container */}
          <div className="text-2xl font-black text-white tracking-tighter">
            <img src={Logo} alt="Logo" className="w-[60px] h-[60px] rounded-md" />
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
                  className={`relative text-[14px] group nav-link transition-colors font-medium whitespace-nowrap pb-1 ${
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
              <Heart size={14} className="text-primary" />
              <span className="text-[14px] text-primary">{data.header.cta}</span>
            </button>
          </div>
        </div>

        <div className="lg:hidden flex items-center gap-2 flex-shrink-0">
          <button 
            className="p-1.5 text-white flex-shrink-0"
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
            className="fixed inset-0 z-[100] bg-black lg:hidden flex flex-col"
          >
            {/* Header in Menu */}
            <div className="flex justify-between items-center p-8">
              <Link to="/">
                <img src={Logo} alt="Logo" className="w-[50px] h-[50px] rounded-md" />
              </Link>
              <button 
                className="p-2 text-white hover:text-primary transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                <X size={32} />
              </button>
            </div>

            {/* Links and CTA Wrapper */}
            <div className="flex flex-col gap-10 p-6 mt-5">
              {data.header.navLinks.map((link, index) => {
                const isActive = location.pathname === link.url;
                return (
                  <motion.div
                    key={link.label}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.05 }}
                  >
                    <Link
                      to={link.url}
                      className={`text-[16px] font-semibold tracking-tight font-sans ${
                        isActive ? "text-primary" : "text-white"
                      }`}
                    >
                      {link.label}
                    </Link>
                  </motion.div>
                );
              })}

              {/* Donate Now Button as part of the list */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: data.header.navLinks.length * 0.05 }}
              >
                <button className="flex items-center gap-3 text-primary text-[16px] font-semibold tracking-tight hover:opacity-80 transition-opacity">
                  <Heart size={24} />
                  <span>{data.header.cta}</span>
                </button>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;