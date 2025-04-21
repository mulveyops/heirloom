const Shop = () => {
  return (
    <section id="shop" className="py-16 md:py-24 bg-soft-beige">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-2xl md:text-4xl font-migra font-bold mb-6 text-dark-text">
          Shop Our <span className="text-brand-green">Products</span>
        </h2>
        <p className="text-base md:text-lg font-body text-dark-text max-w-2xl mx-auto mb-10">
          Shop amika and your favorite hair care products online. Quality products for quality hair.
        </p>
        
        <div className="flex justify-center">
          <a 
            href="https://shop.saloninteractive.com/store/HeirloomStudiomke" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center px-8 py-4 bg-brand-green text-white font-body font-medium rounded-lg shadow-md hover:bg-opacity-90 transition-all text-lg booking-btn"
          >
            <i className="fas fa-shopping-bag mr-2"></i> Shop Now
          </a>
        </div>
      </div>
    </section>
  );
};

export default Shop;
