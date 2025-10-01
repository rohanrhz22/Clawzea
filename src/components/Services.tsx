import serviceDog from "@/assets/service-dog.jpg";

const Services = () => {
  const leftServices = [
    {
      icon: "📱",
      title: "All-in-One Super App",
      description: "Everything your pet needs: grooming, vet care, walking, sitting, training, and shopping in one place.",
    },
    {
      icon: "📋",
      title: "Digital Health Passport",
      description: "Store vaccines, prescriptions, lab results, and share instantly with vets.",
    },
    {
      icon: "🏥",
      title: "Vet Care Anytime",
      description: "Online consultations, offline bookings, and quick prescription refills.",
    },
  ];

  const rightServices = [
    {
      icon: "✂️",
      title: "Grooming Made Easy",
      description: "Compare stations, check prices, and book grooming in seconds.",
    },
    {
      icon: "🏠",
      title: "Boarding & Daycare",
      description: "Find safe, trusted spaces for your pet when you're away.",
    },
    {
      icon: "🚶",
      title: "Walking & Sitting",
      description: "Book trusted walkers and sitters nearby, on-demand.",
    },
  ];

  return (
    <section id="services" className="py-20 bg-card">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-4xl sm:text-5xl font-extrabold text-[hsl(var(--dark))] mb-4">
            Our Services
          </h2>
          <p className="text-lg text-muted-foreground">
            Explore our wide range of services designed to keep your pet happy and healthy.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
          {/* Left Services */}
          <div className="flex flex-col gap-8 lg:flex-1 lg:items-end">
            {leftServices.map((service, index) => (
              <div
                key={index}
                className="flex items-center gap-4 max-w-md animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="lg:order-2 text-right flex-1">
                  <h3 className="text-lg font-semibold text-[hsl(var(--dark))] mb-2">
                    {service.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {service.description}
                  </p>
                </div>
                <div className="lg:order-1 w-20 h-20 bg-primary rounded-full flex items-center justify-center text-3xl flex-shrink-0 shadow-[var(--shadow-medium)]">
                  {service.icon}
                </div>
              </div>
            ))}
          </div>

          {/* Center Image */}
          <div className="lg:flex-[1.5] my-8 lg:my-0">
            <img
              src={serviceDog}
              alt="Happy pet"
              className="w-full max-w-md mx-auto rounded-[30px] shadow-[var(--shadow-medium)]"
            />
          </div>

          {/* Right Services */}
          <div className="flex flex-col gap-8 lg:flex-1 lg:items-start">
            {rightServices.map((service, index) => (
              <div
                key={index}
                className="flex items-center gap-4 max-w-md animate-fade-in-up"
                style={{ animationDelay: `${(index + 3) * 0.1}s` }}
              >
                <div className="w-20 h-20 bg-primary rounded-full flex items-center justify-center text-3xl flex-shrink-0 shadow-[var(--shadow-medium)]">
                  {service.icon}
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-[hsl(var(--dark))] mb-2">
                    {service.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {service.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
