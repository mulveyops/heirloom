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
    <section id="hero" className="pt-24 pb-16 md:pt-32 md:pb-24 bg-soft-beige">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <h2 className="text-3xl md:text-5xl font-display font-bold mb-4 text-dark-text leading-tight">
              Welcome to <span className="text-brand-green">Heirloom Studio</span>
            </h2>
            <p className="text-lg md:text-xl font-body mb-6 text-dark-text">
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
          <div className="md:w-1/2">
            <img 
              src="https://images.unsplash.com/photo-1560066984-138dadb4c035?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
              alt="Heirloom Studio salon interior" 
              className="rounded-lg shadow-lg w-full h-auto object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
