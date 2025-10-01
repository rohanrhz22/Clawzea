const StatsBar = () => {
  const stats = [
    { number: "500+", label: "Verified Service Providers" },
    { number: "1K+", label: "Happy Pet Parents" },
    { number: "50+", label: "Cities Covered" },
    { number: "24/7", label: "Support Available" },
  ];

  return (
    <section className="bg-primary py-8 mt-[-2px]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {stats.map((stat, index) => (
            <div key={index} className="animate-fade-in-up" style={{ animationDelay: `${index * 0.1}s` }}>
              <div className="text-3xl sm:text-4xl font-extrabold text-gray-800">
                {stat.number}
              </div>
              <div className="text-sm sm:text-base text-gray-800/80 mt-1">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsBar;