import { useState } from "react";
import { Button } from "@/components/ui/button";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
      setIsOpen(false);
    }
  };

  return (
    <nav className="fixed top-0 w-full bg-white shadow-sm z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center gap-1 cursor-pointer" onClick={() => scrollToSection("hero")}>
            <img
            src="/img/logobasenobg.png"        // replace with your logo file path
            alt="Clawzea Logo"
            className="w-10 h-10 object-contain rounded-xl" // adjust size & styling as needed
            />
            <span className="font-baahr text-3xl font-extrabold text-gray-800">Clawzea</span>
          </div>
          
          <div className="hidden md:flex items-center gap-8">
            <button
              onClick={() => scrollToSection("aboutus")}
              className="text-gray-600 font-medium hover:text-primary transition-colors"
            >
              About Us
            </button>
            <button
              onClick={() => scrollToSection("services")}
              className="text-gray-600 font-medium hover:text-primary transition-colors"
            >
              Services
            </button>
            <Button
              onClick={() => scrollToSection("join")}
              className="bg-primary text-gray-800 hover:bg-primary/90 font-semibold px-6 rounded-full transition-all hover:-translate-y-0.5"
            >
              Join Us
            </Button>
          </div>

          <button
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-200">
          <div className="px-4 py-4 space-y-3">
            <button
              onClick={() => scrollToSection("aboutus")}
              className="font-reddit block w-full text-left px-3 py-2 rounded-md hover:bg-gray-100"
            >
              About Us
            </button>
            <button
              onClick={() => scrollToSection("services")}
              className="font-reddit block w-full text-left px-3 py-2 rounded-md hover:bg-gray-100"
            >
              Services
            </button>
            <Button
              onClick={() => scrollToSection("join")}
              className="font-reddit w-full bg-primary text-gray-800 hover:bg-primary/90"
            >
              Join Us
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;