const WhyChooseUs = () => {
  const features = [
    {
      icon: "🛡️",
      title: "Trusted Professionals",
      description: "All service providers are verified and background-checked for your peace of mind.",
    },
    {
      icon: "💰",
      title: "Best Prices",
      description: "Compare prices from multiple providers and choose what fits your budget.",
    },
    {
      icon: "📱",
      title: "Easy Booking",
      description: "Book services in just a few taps with our user-friendly mobile app.",
    },
    {
      icon: "⭐",
      title: "Top Rated",
      description: "Join thousands of satisfied pet parents who trust us with their furry friends.",
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-primary/10 via-background to-secondary/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-4xl sm:text-5xl font-extrabold text-[hsl(var(--dark))] mb-4">
            Why Choose Fetchy?
          </h2>
          <p className="text-lg text-muted-foreground">
            We're committed to providing the best care for your beloved pets.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="text-center animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-16 h-16 mx-auto mb-4 bg-card rounded-2xl flex items-center justify-center text-4xl shadow-[var(--shadow-medium)]">
                {feature.icon}
              </div>
              <h4 className="text-xl font-semibold text-[hsl(var(--dark))] mb-2">
                {feature.title}
              </h4>
              <p className="text-sm text-muted-foreground">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
