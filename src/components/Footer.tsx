import {
  Mail,
  MapPin,
  Twitter,
  Instagram,
  Facebook,
  Youtube,
  PhoneIcon,
} from "lucide-react";
import data from "../data/data.json";
import Logo from "../assets/Logo_Vardhishnu.jpg";

const Footer = () => {
  return (
    <footer className="bg-white pt-10 md:pt-24 font-sans">
      {/* Newsletter Section */}
      <div className="container-custom mb-32">
        <div className="bg-gray-100 rounded-xl p-4 md:p-20 flex flex-col lg:row-span-1 lg:flex-row items-center justify-between gap-8 shadow-sm">
          <div className="max-w-md">
            <h2 className="text-[24px] md:text-4xl font-semibold mb-3 text-dark tracking-tight">
              Stay Updated With Us
            </h2>
            <p className="text-gray-500 font-medium">
              Get updates, stories to support our mission
            </p>
          </div>
          <div className="w-full lg:w-auto flex flex-col sm:flex-row gap-4 flex-1 lg:max-w-2xl">
            <input
              type="email"
              placeholder="Your Email"
              className="flex-1 px-8 py-4 rounded-xl bg-white border border-gray-100 shadow-sm text-lg outline-none focus:ring-2 focus:ring-primary/10 transition-all placeholder:text-gray-300"
            />
            <button className="bg-primary hover:bg-primary-dark text-white px-20 py-4 rounded-xl font-semibold text-xl shadow-lg shadow-primary/20 transition-all hover:-translate-y-1">
              Subscribe
            </button>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="container-custom pb-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-16 lg:gap-8">
          {/* Organization Info */}
          <div className="lg:col-span-4 space-y-10">
            <div className="flex items-center gap-3">
              <img src={Logo} alt="Vardhishnu Logo" className="w-24" />
            </div>
            <p className="text-gray-500 text-[16px] leading-relaxed max-w-sm">
              Vardhishnu - Social Research & Development Society is a Jalgaon
              based not-for-profit organisation trying to provide a safe, secure
              and happy childhood to street children specially child waste
              pickers, child labors as well as children from economically
              disadvantaged background.
            </p>
            <div className="flex gap-4">
              {[Twitter, Instagram, Facebook, Youtube].map((Icon, i) => (
                <a
                  key={i}
                  href={data.header.socials[i]?.url || "#"}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full border border-gray-100 flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-all transform hover:-translate-y-1"
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links 1 */}
          <div className="lg:col-span-2 space-y-8 lg:pl-4">
            <h4 className="text-[20px] font-bold text-dark tracking-tight">
              Menu
            </h4>
            <ul className="space-y-5 text-[16px] text-gray-500 font-medium">
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
                <a
                  href="#"
                  className="text-primary hover:underline transition-all"
                >
                  Donate Now
                </a>
              </li>
            </ul>
          </div>

          {/* Quick Links 2 */}
          {/* <div className="lg:col-span-2 space-y-8">
            <h4 className="text-[20px] font-bold text-dark tracking-tight">
              About us
            </h4>
            <ul className="space-y-5 text-[16px] text-gray-500 font-medium">
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
          </div> */}

          {/* Contact Info */}
          <div className="lg:col-span-4 space-y-8">
            <h4 className="text-[20px] font-bold text-dark tracking-tight">
              Contacts Info
            </h4>
            <div className="space-y-8">
              <div className="flex gap-5 items-center">
                <div className="w-12 h-12 rounded-full bg-primary flex shrink-0 items-center justify-center text-primary border border-primary/10">
                  <PhoneIcon size={20} className="text-white" />
                </div>
                <div className="space-y-1">
                  <div className="text-dark font-bold text-[14px]">Call us</div>
                  <a
                    href={`tel:${data.footer.contact.phone}`}
                    className="text-gray-500 font-medium text-[14px] hover:text-primary transition-colors"
                  >
                    {data.footer.contact.phone}
                  </a>
                </div>
              </div>
              <div className="flex gap-5 items-center">
                <div className="w-12 h-12 rounded-full bg-primary flex shrink-0 items-center justify-center text-primary border border-primary/10">
                  <Mail size={20} className="text-white" />
                </div>
                <div className="space-y-1">
                  <div className="text-dark font-bold text-[14px]">Mail Us</div>
                  <a
                    href={`mailto:${data.footer.contact.email}`}
                    className="text-gray-500 font-medium text-[14px] hover:text-primary transition-colors"
                  >
                    {data.footer.contact.email}
                  </a>
                </div>
              </div>
              <div className="flex gap-5 items-center">
                <div className="w-12 h-12 rounded-full bg-primary flex shrink-0 items-center justify-center text-primary border border-primary/10">
                  <MapPin size={20} className="text-white" />
                </div>
                <div className="space-y-1">
                  <div className="text-dark font-bold text-[14px]">
                    Visit Us
                  </div>
                  <p className="text-gray-500 text-[14px] font-medium leading-snug">
                    {data.footer.address}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="bg-black py-10">
        <div className="container-custom  flex flex-row justify-between">
          <div className=" text-center text-white/40 text-lg font-medium">
            Vardhishnu © 2026 All Rights Reserved.
          </div>
          <div className=" text-center text-white/40 text-lg font-medium">
            Designed with love ❤️ from Inside Dynamics
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
