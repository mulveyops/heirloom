import { useState, useEffect } from "react";

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  const handleNavClick = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const yOffset = -80;
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
    closeMobileMenu();
  };

  return (
    <header className={`bg-white fixed w-full z-50 transition-all ${isScrolled ? "shadow-md" : "shadow-sm"}`}>
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <a href="#" className="flex items-center" onClick={() => handleNavClick("hero")}>
          <h1 className="text-2xl md:text-3xl font-display font-semibold text-dark-text">
            Heirloom <span className="text-brand-green">Studio</span>
          </h1>
        </a>
        
        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-dark-text focus:outline-none"
          onClick={toggleMobileMenu}
          aria-label="Toggle mobile menu"
        >
          <i className={`fas ${mobileMenuOpen ? "fa-times" : "fa-bars"} text-2xl`}></i>
        </button>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8 items-center">
          <a 
            href="#about" 
            className="nav-link text-dark-text hover:text-brand-green font-body font-medium"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick("about");
            }}
          >
            About
          </a>
          <a 
            href="#stylists" 
            className="nav-link text-dark-text hover:text-brand-green font-body font-medium"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick("stylists");
            }}
          >
            Stylists
          </a>
          <a 
            href="#instagram" 
            className="nav-link text-dark-text hover:text-brand-green font-body font-medium"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick("instagram");
            }}
          >
            Instagram
          </a>
          <a 
            href="#contact" 
            className="nav-link text-dark-text hover:text-brand-green font-body font-medium"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick("contact");
            }}
          >
            Contact
          </a>
          <a 
            href="#join" 
            className="nav-link text-dark-text hover:text-brand-green font-body font-medium"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick("join");
            }}
          >
            Join Our Team
          </a>
          <a 
            href="https://shop.saloninteractive.com/store/HeirloomStudiomke" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="nav-link text-dark-text hover:text-brand-green font-body font-medium"
          >
            Shop
          </a>
        </nav>
      </div>
      
      {/* Mobile Navigation Menu */}
      <nav className={`px-4 py-3 bg-white md:hidden ${mobileMenuOpen ? "block" : "hidden"}`}>
        <div className="flex flex-col space-y-4">
          <a 
            href="#about" 
            className="nav-link text-dark-text hover:text-brand-green font-body font-medium py-2"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick("about");
            }}
          >
            About
          </a>
          <a 
            href="#stylists" 
            className="nav-link text-dark-text hover:text-brand-green font-body font-medium py-2"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick("stylists");
            }}
          >
            Stylists
          </a>
          <a 
            href="#instagram" 
            className="nav-link text-dark-text hover:text-brand-green font-body font-medium py-2"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick("instagram");
            }}
          >
            Instagram
          </a>
          <a 
            href="#contact" 
            className="nav-link text-dark-text hover:text-brand-green font-body font-medium py-2"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick("contact");
            }}
          >
            Contact
          </a>
          <a 
            href="#join" 
            className="nav-link text-dark-text hover:text-brand-green font-body font-medium py-2"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick("join");
            }}
          >
            Join Our Team
          </a>
          <a 
            href="https://shop.saloninteractive.com/store/HeirloomStudiomke" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="nav-link text-dark-text hover:text-brand-green font-body font-medium py-2"
          >
            Shop
          </a>
        </div>
      </nav>
    </header>
  );
};

export default Header;
