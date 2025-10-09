import { Link } from 'react-router-dom';

const Footer = () => {
  const links = [
    { label: "About Us", href: "#aboutus" },
    { label: "Services", href: "#services" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <footer id="contact" className="bg-gray-800 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="flex flex-wrap justify-center gap-6 mb-8">
          {links.map((link, index) => (
            <a
              key={index}
              href={link.href}
              className="text-white/80 hover:text-white transition-colors"
            >
              {link.label}
            </a>
          ))}
        </div>
        <p className="text-white/90">
          &copy; 2025 Clawzea. Made with ❤️ for pets and their humans.
        </p>
        <Link to="">
          <p className="text-white/70 mt-2 text-sm">
            Coming soon ...
          </p>
        </Link>
      </div>
    </footer>
  );
};

export default Footer;