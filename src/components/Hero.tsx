import { Button } from "@/components/ui/button";

const Hero = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
<section id="hero" className="mt-16 pt-20 pb-0 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* Hero Text */}
          <div className="animate-fade-in-left z-10">
            <h1 className="font-reddit text-4xl sm:text-5xl lg:text-6xl font-extrabold text-gray-800 leading-tight mb-6">
              Because every wag, purr, and cuddle<span className="text-primary"> matters.</span>
            </h1>
            <p className="font-reddit text-lg sm:text-xl text-gray-600 mb-8 leading-relaxed">
              Vet visits, vaccinations, spa days, and health records managed with love, all in one place.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button
                onClick={() => scrollToSection("join")}
                className="bg-primary text-gray-800 hover:bg-primary/90 font-semibold px-8 py-6 text-lg rounded-full shadow-lg hover:-translate-y-1 transition-all border-2 border-white"
              >
                Join Us
              </Button>
            </div>
          </div>

          {/* Pet Image with Heart Behind */}
          <div className="relative animate-fade-in-right">
            {/* Heart Background */}
            <img
              src="/img/yellow-heart.png"
              alt="Background heart"
              className="absolute top-1/2 left-1/2 w-[700px] max-w-none h-auto -translate-x-1/2 -translate-y-1/2 z-0 rotate-[15deg]"
            />

            {/* Pet Image */}
            <img
              src="/img/happy_pets_and_parents.png"
              alt="Happy dog with owner"
              className="w-full h-auto rounded-[30px] relative z-10"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;