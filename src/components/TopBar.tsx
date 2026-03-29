import {
  Phone,
  Mail,
  Twitter,
  Instagram,
  Facebook,
  Youtube,
} from "lucide-react";
import data from "../data/data.json";

const TopBar = () => {
  const getSocialIcon = (platform: string) => {
    switch (platform.toLowerCase()) {
      case "twitter":
        return <Twitter size={14} />;
      case "instagram":
        return <Instagram size={14} />;
      case "facebook":
        return <Facebook size={14} />;
      case "youtube":
        return <Youtube size={14} />;
      default:
        return null;
    }
  };

  return (
    <div className="bg-dark text-white py-2 hidden md:block border-b border-white/5">
      <div className="container-custom flex justify-between items-center text-xs opacity-90">
        <div className="flex items-center gap-6">
          <a
            href={`tel:${data.header.contact.phone}`}
            className="flex items-center gap-2 hover:text-primary transition-colors"
          >
            <Phone size={14} />
            <span>{data.header.contact.phone}</span>
          </a>
          <a
            href={`mailto:${data.header.contact.email}`}
            className="flex items-center gap-2 hover:text-primary transition-colors"
          >
            <Mail size={14} />
            <span>{data.header.contact.email}</span>
          </a>
        </div>
        <div className="flex items-center gap-4">
          {data.header.socials.map((social) => (
            <a
              key={social.platform}
              href={social.url}
              className="hover:text-primary transition-all duration-300 hover:scale-110"
              target="_blank"
              rel="noopener noreferrer"
              aria-label={social.platform}
            >
              {getSocialIcon(social.platform)}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TopBar;
