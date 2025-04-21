const Contact = () => {
  return (
    <section id="contact" className="py-16 md:py-24 bg-soft-beige">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-4xl font-display font-bold mb-4 text-dark-text">
            Contact <span className="text-brand-green">Us</span>
          </h2>
          <p className="text-base md:text-lg font-body text-dark-text max-w-2xl mx-auto">
            Have questions or want to get in touch? Reach out to us using the information below.
          </p>
        </div>
        
        <div className="flex flex-col md:flex-row -mx-4">
          <div className="md:w-1/2 px-4 mb-8 md:mb-0">
            <div className="bg-white rounded-lg shadow-md p-6 h-full">
              <h3 className="text-xl md:text-2xl font-display font-semibold mb-6 text-dark-text">Contact Information</h3>
              
              <div className="flex items-start mb-6">
                <div className="text-brand-green mr-4">
                  <i className="fas fa-map-marker-alt text-2xl"></i>
                </div>
                <div>
                  <h4 className="font-body font-medium text-dark-text mb-1">Location</h4>
                  <p className="font-body text-dark-text">1601 N Van Buren St, Milwaukee, WI 53202</p>
                </div>
              </div>
              
              <div className="flex items-start mb-6">
                <div className="text-brand-green mr-4">
                  <i className="fas fa-envelope text-2xl"></i>
                </div>
                <div>
                  <h4 className="font-body font-medium text-dark-text mb-1">Email</h4>
                  <a 
                    href="mailto:heirloomstudiomke@gmail.com" 
                    className="font-body text-brand-green hover:underline"
                  >
                    heirloomstudiomke@gmail.com
                  </a>
                </div>
              </div>
              
              <div className="flex items-start mb-6">
                <div className="text-brand-green mr-4">
                  <i className="fas fa-clock text-2xl"></i>
                </div>
                <div>
                  <h4 className="font-body font-medium text-dark-text mb-1">Hours</h4>
                  <p className="font-body text-dark-text mb-1">Monday - Saturday: 10am - 8pm</p>
                  <p className="font-body text-dark-text italic">By appointment only</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="text-brand-green mr-4">
                  <i className="fab fa-instagram text-2xl"></i>
                </div>
                <div>
                  <h4 className="font-body font-medium text-dark-text mb-1">Social Media</h4>
                  <a 
                    href="https://www.instagram.com/heirloomstudiomke/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="font-body text-brand-green hover:underline"
                  >
                    @heirloomstudiomke
                  </a>
                </div>
              </div>
            </div>
          </div>
          
          <div className="md:w-1/2 px-4">
            <div className="bg-white rounded-lg shadow-md overflow-hidden h-full">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2916.8089457244827!2d-87.90371048451535!3d43.044897979146855!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8805182f983f5d7d%3A0x3f69b178b77c123a!2s1601%20N%20Van%20Buren%20St%2C%20Milwaukee%2C%20WI%2053202!5e0!3m2!1sen!2sus!4v1625172315883!5m2!1sen!2sus" 
                width="100%" 
                height="100%" 
                style={{ border: 0, minHeight: "300px" }} 
                allowFullScreen={true} 
                loading="lazy"
                aria-label="Google Maps location of Heirloom Studio"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
