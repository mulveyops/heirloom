const Footer = () => {
  return (
    <footer className="bg-brand-green py-10">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <h2 className="text-xl font-migra font-semibold text-white">
              Heirloom Studio
            </h2>
            <p className="font-body text-white mt-2">
              1601 N Van Buren St, Milwaukee, WI 53202
            </p>
          </div>
          
          <div className="flex space-x-6 mb-6 md:mb-0">
            <a 
              href="https://www.instagram.com/heirloomstudiomke/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-white hover:text-white/80 transition-all"
              aria-label="Instagram"
            >
              <i className="fab fa-instagram text-2xl"></i>
            </a>
            <a 
              href="mailto:heirloomstudiomke@gmail.com" 
              className="text-white hover:text-white/80 transition-all"
              aria-label="Email"
            >
              <i className="fas fa-envelope text-2xl"></i>
            </a>
            <a 
              href="https://shop.saloninteractive.com/store/HeirloomStudiomke" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-white hover:text-white/80 transition-all"
              aria-label="Shop"
            >
              <i className="fas fa-shopping-bag text-2xl"></i>
            </a>
          </div>
          
          <div className="text-center md:text-right">
            <p className="font-body text-white">
              &copy; {new Date().getFullYear()} Heirloom Studio. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
