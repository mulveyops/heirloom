const instagramImages = [
  "https://images.unsplash.com/photo-1562322140-8baeececf3df?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1605497788044-5a32c7078486?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1492106087820-71f1a00d2b11?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1580618672591-eb180b1a973f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1565764024333-25c333a581a1?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1554519934-e32b1629d9ee?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1470259078422-826894b933aa?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1519699047748-de8e457a634e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
];

const Instagram = () => {
  return (
    <section id="instagram" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-4xl font-migra font-bold mb-4 text-dark-text">
            Follow Us on <span className="text-brand-green">Instagram</span>
          </h2>
          <p className="text-base md:text-lg font-body text-dark-text max-w-2xl mx-auto">
            Check out our latest work and get inspired for your next visit.{" "}
            <a 
              href="https://www.instagram.com/heirloomstudiomke/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-brand-green hover:underline"
            >
              @heirloomstudiomke
            </a>
          </p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {instagramImages.map((image, index) => (
            <a 
              key={index}
              href="https://www.instagram.com/heirloomstudiomke/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="block overflow-hidden rounded-lg transform transition-all duration-300 hover:scale-105"
              aria-label="Instagram post"
            >
              <img 
                src={image} 
                alt="Instagram post" 
                className="w-full h-full object-cover"
              />
            </a>
          ))}
        </div>
        
        <div className="text-center mt-10">
          <a 
            href="https://www.instagram.com/heirloomstudiomke/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center px-6 py-3 bg-brand-green text-white font-body font-medium rounded-full shadow-md hover:bg-opacity-90 transition-all booking-btn"
          >
            <i className="fab fa-instagram mr-2"></i> View More on Instagram
          </a>
        </div>
      </div>
    </section>
  );
};

export default Instagram;
