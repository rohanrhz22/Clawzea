const Services = () => {
  const servicesLeft = [
    {
      title: "Spa for Paws",
      description: "Your pet’s happy place. massages, bubbles, and a whole lot of love.",
      icon: "/img/pet_spa_icon.png",
    },
    {
      title: "Health in Their Paw-cket",
      description: "All their medical records in one loving space, because peace of mind should be this simple.",
      icon: "/img/pet_health_passport.png",
    },
    {
      title: "Vets Who Truly Care",
      description: "Because furry emergencies don’t keep office hours. care, check-ups, and prescriptions, always within reach",
      icon: "/img/vet_care_icon.png",
    },
  ];

  const servicesRight = [
    {
      title: "From Ruff to Fluff",
      description: "Find the best groomers in town because messy fur is cute, but shiny fur gets extra cuddles.",
      icon: "/img/pet_grooming_icon.png",
    },
    {
      title: "Home Away From Home",
      description: "Because they deserve cuddles, even when you can’t be there",
      icon: "/img/pet_boarding_icon.png",
    },
    {
      title: "Happy Walks, Loving Sits",
      description: "Book trusted walkers and sitters nearby. because paws deserve company, not loneliness.",
      icon: "/img/pet_walk_icon.png",
    },
  ];

  return (
    <section id="services" className="py-20 px-8 bg-white">
      <div className="text-center max-w-2xl mx-auto mb-16">
        <h2 className="text-4xl lg:text-5xl font-extrabold text-gray-800 mb-4">
          Everything they need, all in one place.
        </h2>
        <p className="text-lg text-gray-600/80">
          An All in one super app! From vet visits and vaccinations to spa pampering and health tracking, Clawzea makes caring for your furry family simple, joyful, and full of love.
        </p>
      </div>
      <div className="flex flex-col lg:flex-row justify-center items-center lg:items-start max-w-7xl mx-auto mt-16 gap-8">
        <div className="flex flex-col gap-12 flex-1 lg:items-end">
          {servicesLeft.map((service, index) => (
            <div key={index} className="flex flex-col-reverse lg:flex-row items-center gap-6 max-w-sm text-center lg:text-right">
              <div className="service-text">
                <h3 className="text-lg font-semibold text-gray-800 mb-2">{service.title}</h3>
                <p className="text-sm text-gray-600/80">{service.description}</p>
              </div>
              <div className="bg-primary rounded-full flex items-center justify-center flex-shrink-0">
                <img src={service.icon} alt={service.title} className="w-[170px] h-[170px]" />
              </div>
            </div>
          ))}
        </div>
        <div className="flex-[1.5] text-center order-first lg:order-none">
          <img src="/img/service-img.jpeg" alt="Happy dog with owner" className="max-w-full rounded-3xl" />
        </div>
        <div className="flex flex-col gap-12 flex-1 lg:items-start">
          {servicesRight.map((service, index) => (
            <div key={index} className="flex flex-col lg:flex-row items-center gap-6 max-w-sm text-center lg:text-left">
              <div className="bg-primary rounded-full flex items-center justify-center flex-shrink-0">
                <img src={service.icon} alt={service.title} className="w-[170px] h-[170px]" />
              </div>
              <div className="service-text">
                <h3 className="text-lg font-semibold text-gray-800 mb-2">{service.title}</h3>
                <p className="text-sm text-gray-600/80">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;