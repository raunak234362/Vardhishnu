import { useState, useEffect } from "react";
import TopBar from "./components/TopBar";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import "./App.css";
import { useLocation, Outlet } from "react-router-dom";

function App() {
  const location = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);
  const isHomePage = location.pathname === "/";

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <header
        className={`fixed top-0 left-0 w-full z-100 transition-all duration-500 ${
          isHomePage
            ? isScrolled
              ? "bg-black shadow-2xl py-0"
              : "bg-transparent backdrop-blur-sm py-4"
            : "sticky top-0 bg-black shadow-lg"
        }`}
      >
        <TopBar />
        <Navbar />
      </header>
      <main className={`grow ${isHomePage ? "" : ""}`}>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default App;
