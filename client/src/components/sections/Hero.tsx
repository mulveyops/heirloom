const Hero = () => {
  const handleScrollToStylists = () => {
    const stylistsSection = document.getElementById("stylists");
    if (stylistsSection) {
      const yOffset = -80;
      const y = stylistsSection.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  const handleScrollToContact = () => {
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      const yOffset = -80;
      const y = contactSection.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen bg-cover bg-center flex items-center justify-center"
      style={{
        backgroundImage: "url('/images/window.jpg')",
      }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      <div className="relative z-10 flex flex-col items-center text-center text-white bg-black bg-opacity-70 px-6 py-4 rounded-lg max-w-xl">
        <h2 className="text-3xl md:text-5xl font-migra font-bold mb-2 leading-tight">
          Welcome to <span className="text-brand-green">Heirloom Studio</span>
        </h2>
        <p className="text-base md:text-lg font-body mb-4">
          Your destination for personalized hair experiences in Milwaukee's east side.
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <button
            onClick={handleScrollToStylists}
            className="px-6 py-3 bg-brand-green text-white font-body font-medium rounded-full shadow-md hover:bg-opacity-90 transition-all text-center booking-btn"
          >
            Find Your Stylist
          </button>
          <button
            onClick={handleScrollToContact}
            className="px-6 py-3 border-2 border-brand-green text-brand-green font-body font-medium rounded-full hover:bg-brand-green hover:text-white transition-all text-center booking-btn"
          >
            Contact Us
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;