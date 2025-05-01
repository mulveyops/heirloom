import { useEffect } from 'react';

const Instagram = () => {
  useEffect(() => {
    const scriptId = 'EmbedSocialHashtagScript';

    if (!document.getElementById(scriptId)) {
      const script = document.createElement('script');
      script.src = 'https://embedsocial.com/cdn/ht.js';
      script.async = true;
      script.id = scriptId;
      document.body.appendChild(script);
    }

    return () => {
      const existingScript = document.getElementById(scriptId);
      if (existingScript) {
        document.body.removeChild(existingScript);
      }
    };
  }, []);


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
        
        {/* EmbedSocial Instagram Feed Widget */}
        <div className="embedsocial-hashtag" data-ref="20ce088e662e178112a3f3628539c41c448c57a8">
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
