import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";

const phone = "+91 98765 43210";
const email = "info@alimraninstitutions.edu";
const address = "123 Main Road, City, State, 123456";

const HeaderLine = () => {
  return (
    <div className="w-full bg-primary-foreground/5 text-xs text-foreground flex items-center justify-between px-4 py-1 border-b border-border">
      <div className="flex items-center gap-4">
        <span className="hidden sm:inline">📞 {phone}</span>
        <span className="hidden sm:inline">✉️ {email}</span>
        <span className="hidden md:inline">📍 {address}</span>
      </div>
      <div className="flex items-center gap-3">
        <a
          href="https://facebook.com"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Facebook"
          className="hover:text-primary"
        >
          <FaFacebookF size={16} />
        </a>
        <a
          href="https://twitter.com"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Twitter"
          className="hover:text-primary"
        >
          <FaTwitter size={16} />
        </a>
        <a
          href="https://instagram.com"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Instagram"
          className="hover:text-primary"
        >
          <FaInstagram size={16} />
        </a>
      </div>
    </div>
  );
};

export default HeaderLine;
