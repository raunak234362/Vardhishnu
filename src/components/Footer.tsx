import {
  Mail,
  Phone,
  MapPin,
  Twitter,
  Instagram,
  Facebook,
  Youtube,
} from "lucide-react";
import data from "../data/data.json";
import Logo from "../assets/Logo_Vardhishnu.jpg";

const Footer = () => {
  return (
    <footer className="bg-white pt-24">
      {/* Newsletter Section */}
      <div className="container-custom mb-24">
        <div className="bg-[#f8f9fa] rounded-lg p-12 md:p-16 flex flex-col lg:flex-row items-center justify-between gap-10 shadow-sm border border-black/5">
          <div className="max-w-md">
            <h3 className="text-3xl mb-4 text-dark tracking-tighter">
              Stay Updated With Us
            </h3>
            <p className="text-dark/50 text-xl">
              Get updates, stories to support our mission
            </p>
          </div>
          <div className="w-full lg:w-auto flex flex-col sm:flex-row gap-4 flex-1 lg:max-w-xl">
            <input
              type="email"
              placeholder="Your Email"
              className="flex-1 px-8 py-3 rounded-lg bg-white border border-gray-200 shadow-inner text-lg outline-none focus:ring-2 focus:ring-primary/20 transition-all"
            />
            <button className="bg-primary hover:bg-primary/90 text-white px-10 py-5 rounded-lg font-bold text-lg shadow-lg transition-all hover:-translate-y-1">
              Subscribe
            </button>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="container-custom pb-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-16">
          {/* Organization Info */}
          <div className="lg:col-span-5 space-y-8">
            <div className="flex items-center gap-3">
              <img src={Logo} alt="Vardhishnu Logo" className="w-20" />
            </div>
            <p className="text-dark/70 text-lg leading-relaxed max-w-lg">
              Vardhishnu - Social Research & Development Society is a Jalgaon
              based not-for-profit organisation trying to provide a safe, secure
              and happy childhood to street children specially child waste
              pickers, child labors as well as children from economically
              disadvantaged background.
            </p>
            <div className="flex gap-5">
              {[Twitter, Instagram, Facebook, Youtube].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-12 h-12 rounded-full border border-dark/10 flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-all transform hover:-translate-y-1"
                >
                  <Icon size={20} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links 1 */}
          <div className="lg:col-span-2 space-y-8">
            <h4 className="text-2xl font-black text-dark tracking-tight">
              Menu
            </h4>
            <ul className="space-y-4 text-lg text-dark/60 font-medium">
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Who we are
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Why Children
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Our Programs
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Resources
                </a>
              </li>
              <li>
                <a href="#" className="text-primary font-bold hover:underline">
                  Donate Now
                </a>
              </li>
            </ul>
          </div>

          {/* Quick Links 2 */}
          <div className="lg:col-span-2 space-y-8">
            <h4 className="text-2xl font-black text-dark tracking-tight">
              About us
            </h4>
            <ul className="space-y-4 text-lg text-dark/60 font-medium">
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  How it work?
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Contact us
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  FAQ
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Help
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="lg:col-span-3 space-y-8">
            <h4 className="text-2xl font-black text-dark tracking-tight">
              Contacts Info
            </h4>
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex shrink-0 items-center justify-center text-primary shadow-sm">
                  <Phone size={20} />
                </div>
                <div>
                  <div className="text-dark font-black">Call us</div>
                  <a
                    href={`tel:${data.footer.contact.phone}`}
                    className="text-dark/60 font-medium hover:text-primary"
                  >
                    {data.footer.contact.phone}
                  </a>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex shrink-0 items-center justify-center text-primary shadow-sm">
                  <Mail size={20} />
                </div>
                <div>
                  <div className="text-dark font-black">Mail Us</div>
                  <a
                    href={`mailto:${data.footer.contact.email}`}
                    className="text-dark/60 font-medium hover:text-primary"
                  >
                    {data.footer.contact.email}
                  </a>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex shrink-0 items-center justify-center text-primary shadow-sm">
                  <MapPin size={20} />
                </div>
                <div>
                  <div className="text-dark font-black">Visit Us</div>
                  <p className="text-dark/60 font-medium leading-tight">
                    {data.footer.address}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="bg-black py-8">
        <div className="container-custom text-center text-white/50 text-lg font-medium">
          Vardhishnu © 2025 All Rights Reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
