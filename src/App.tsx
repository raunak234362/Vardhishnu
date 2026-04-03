import TopBar from "./components/TopBar";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import "./App.css";
import { useLocation, Outlet } from "react-router-dom";

function App() {
  const location = useLocation();
  const isHomePage = location.pathname === "/";

  return (
    <div className="min-h-screen flex flex-col">
      <header
        className={
          isHomePage
            ? "absolute top-0 left-0 w-full z-50"
            : "relative border-b border-white/5"
        }
      >
        <TopBar />
        <Navbar />
      </header>
      <main className="grow">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default App;