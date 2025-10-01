const Footer = () => {
  const links = [
    { label: "About Us", href: "#about" },
    { label: "Services", href: "#services" },
    { label: "Contact", href: "#contact" },
    { label: "Privacy Policy", href: "#privacy" },
    { label: "Terms of Service", href: "#terms" },
  ];

  return (
    <footer id="contact" className="bg-[hsl(var(--dark))] text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap justify-center gap-6 mb-6">
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
        <p className="text-center text-white/90">
          &copy; 2025 Fetchy. Made with ❤️ for pets and their humans.
        </p>
        <p className="text-center text-white/70 mt-2 text-sm">
          Coming soon to Mumbai and major cities across India
        </p>
      </div>
    </footer>
  );
};

export default Footer;
