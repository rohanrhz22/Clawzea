import serviceDog from "@/assets/service-dog.jpg";
import { Card } from "@/components/ui/card";

const Services = () => {
  const services = [
    {
      icon: "📱",
      title: "All-in-One Super App",
      description: "Everything your pet needs: grooming, vet care, walking, sitting, training, and shopping in one place.",
      gradient: "from-primary/20 via-primary/10 to-transparent",
    },
    {
      icon: "📋",
      title: "Digital Health Passport",
      description: "Store vaccines, prescriptions, lab results, and share instantly with vets.",
      gradient: "from-secondary/20 via-secondary/10 to-transparent",
    },
    {
      icon: "🏥",
      title: "Vet Care Anytime",
      description: "Online consultations, offline bookings, and quick prescription refills.",
      gradient: "from-accent/20 via-accent/10 to-transparent",
    },
    {
      icon: "✂️",
      title: "Grooming Made Easy",
      description: "Compare stations, check prices, and book grooming in seconds.",
      gradient: "from-primary/20 via-primary/10 to-transparent",
    },
    {
      icon: "🏠",
      title: "Boarding & Daycare",
      description: "Find safe, trusted spaces for your pet when you're away.",
      gradient: "from-secondary/20 via-secondary/10 to-transparent",
    },
    {
      icon: "🚶",
      title: "Walking & Sitting",
      description: "Book trusted walkers and sitters nearby, on-demand.",
      gradient: "from-accent/20 via-accent/10 to-transparent",
    },
  ];

  return (
    <section id="services" className="py-20 bg-gradient-to-b from-background via-card/50 to-background relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-[100px] animate-float"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary/10 rounded-full blur-[120px] animate-float" style={{ animationDelay: "2s" }}></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-in-up">
          <div className="inline-block mb-4">
            <span className="px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-semibold backdrop-blur-sm border border-primary/20">
              What We Offer
            </span>
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold bg-gradient-to-r from-foreground via-primary to-foreground bg-clip-text text-transparent mb-6">
            Premium Pet Care Services
          </h2>
          <p className="text-lg text-muted-foreground">
            Experience the future of pet care with our comprehensive suite of services
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-12">
          {services.map((service, index) => (
            <Card
              key={index}
              className="group relative overflow-hidden border-2 border-border/50 bg-card/50 backdrop-blur-sm hover:border-primary/50 transition-all duration-500 hover:shadow-2xl hover:shadow-primary/20 hover:-translate-y-2 animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Gradient background */}
              <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
              
              {/* Content */}
              <div className="relative p-6 sm:p-8">
                {/* Icon */}
                <div className="mb-6 relative">
                  <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-gradient-to-br from-primary via-primary to-secondary flex items-center justify-center text-3xl sm:text-4xl shadow-lg group-hover:scale-110 group-hover:rotate-6 transition-transform duration-500">
                    {service.icon}
                  </div>
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-accent rounded-full blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>

                {/* Text */}
                <h3 className="text-xl sm:text-2xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                  {service.description}
                </p>

                {/* Hover indicator */}
                <div className="mt-6 flex items-center text-primary opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-0 group-hover:translate-x-2">
                  <span className="text-sm font-semibold">Learn more</span>
                  <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Center Feature Image */}
        <div className="relative max-w-4xl mx-auto mt-16 animate-fade-in-up" style={{ animationDelay: "0.6s" }}>
          <div className="absolute inset-0 bg-gradient-to-r from-primary via-secondary to-accent opacity-20 blur-3xl rounded-full"></div>
          <div className="relative rounded-3xl overflow-hidden border-4 border-primary/30 shadow-2xl shadow-primary/30 hover:scale-[1.02] transition-transform duration-500">
            <img
              src={serviceDog}
              alt="Happy pet enjoying premium care services"
              className="w-full h-auto"
            />
            {/* Overlay gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent"></div>
            
            {/* Floating badges */}
            <div className="absolute bottom-6 left-6 right-6 flex flex-wrap gap-3 justify-center sm:justify-start">
              <span className="px-4 py-2 rounded-full bg-card/90 backdrop-blur-md border border-primary/30 text-sm font-semibold text-foreground shadow-lg">
                🛡️ Trusted Professionals
              </span>
              <span className="px-4 py-2 rounded-full bg-card/90 backdrop-blur-md border border-secondary/30 text-sm font-semibold text-foreground shadow-lg">
                ⭐ Top Rated
              </span>
              <span className="px-4 py-2 rounded-full bg-card/90 backdrop-blur-md border border-accent/30 text-sm font-semibold text-foreground shadow-lg">
                💰 Best Prices
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
