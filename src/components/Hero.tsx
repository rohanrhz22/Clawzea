import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-dog.jpg";

const Hero = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <section id="hero" className="mt-16 pt-20 pb-16 bg-card overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="animate-fade-in-left">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[hsl(var(--dark))] leading-tight mb-6">
              Your pet,<br />
              <span className="text-primary relative">our priority</span>
            </h1>
            <p className="text-lg sm:text-xl text-muted-foreground mb-8 leading-relaxed">
              Connecting pet parents with trusted professionals for grooming, walking, boarding, training, and veterinary care.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button
                onClick={() => scrollToSection("join")}
                className="bg-primary text-primary-foreground hover:bg-[hsl(var(--primary-dark))] font-semibold px-8 py-6 text-lg rounded-full shadow-[var(--shadow-primary)] hover:-translate-y-1 transition-all"
              >
                Get Started
              </Button>
              <Button
                onClick={() => scrollToSection("services")}
                variant="outline"
                className="border-2 border-[hsl(var(--dark))] text-[hsl(var(--dark))] hover:bg-[hsl(var(--dark))] hover:text-white font-semibold px-8 py-6 text-lg rounded-full hover:-translate-y-1 transition-all"
              >
                Learn More
              </Button>
            </div>
          </div>

          <div className="relative animate-fade-in-right">
            <img
              src={heroImage}
              alt="Happy dog with owner"
              className="w-full h-auto rounded-[30px] shadow-[var(--shadow-medium)]"
            />
            <div className="absolute top-5 -right-5 bg-secondary text-secondary-foreground px-5 py-3 rounded-full shadow-[var(--shadow-medium)] font-semibold flex items-center gap-2 animate-float hidden sm:flex">
              <span>✓</span> Trusted by 1K+ pet owners
            </div>
            <div className="absolute bottom-8 -left-5 bg-accent text-accent-foreground px-5 py-3 rounded-full shadow-[var(--shadow-medium)] font-semibold flex items-center gap-2 animate-float [animation-delay:1s] hidden sm:flex">
              <span>⭐</span> 4.9/5 Rating
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
