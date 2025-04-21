const About = () => {
  return (
    <section id="about" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-8 md:mb-0 md:pr-12">
            <img 
              src="https://images.unsplash.com/photo-1605497788044-5a32c7078486?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
              alt="Heirloom Studio team" 
              className="rounded-lg shadow-lg w-full h-auto object-cover"
            />
          </div>
          <div className="md:w-1/2">
            <h2 className="text-2xl md:text-4xl font-display font-bold mb-6 text-dark-text leading-tight">
              About <span className="text-brand-green">Us</span>
            </h2>
            <p className="text-base md:text-lg font-body mb-6 text-dark-text leading-relaxed">
              At Heirloom Studio, we are passionate about teamwork, collaboration, balance, and creating a positive and welcoming environment to Milwaukee's east side. Our stylist values are detail oriented, like-minded, producing quality over quantity and priding ourselves in making you look and feel your best.
            </p>
            
            <div className="bg-soft-beige p-6 rounded-lg mb-6">
              <h3 className="text-xl font-display font-semibold mb-3 text-dark-text">Hours</h3>
              <p className="font-body text-dark-text mb-1">Monday - Saturday: 10am - 8pm</p>
              <p className="font-body text-dark-text italic mb-0">By appointment only</p>
            </div>
            
            <div className="mb-6">
              <h3 className="text-xl font-display font-semibold mb-3 text-dark-text">Location</h3>
              <p className="font-body text-dark-text">1601 N Van Buren St, Milwaukee, WI 53202</p>
            </div>
            
            <div>
              <h3 className="text-xl font-display font-semibold mb-3 text-dark-text">Contact</h3>
              <p className="font-body text-dark-text mb-1">
                Email: <a href="mailto:heirloomstudiomke@gmail.com" className="text-brand-green hover:underline">heirloomstudiomke@gmail.com</a>
              </p>
              <p className="font-body text-dark-text">
                Follow us on <a href="https://www.instagram.com/heirloomstudiomke/" target="_blank" rel="noopener noreferrer" className="text-brand-green hover:underline">Instagram</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
