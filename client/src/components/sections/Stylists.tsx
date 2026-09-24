import stylistsContent from "@/content/stylists.json";

// Content comes from Pages CMS, where editors can save a stylist with any
// subset of fields filled in — every field must be treated as optional.
interface Stylist {
  name?: string;
  title?: string;
  image?: string;
  bio?: string;
  specialties?: string[];
  bookingUrl?: string;
  instagramUrl?: string;
}

const Stylists = () => {
  const { intro } = stylistsContent;
  const stylists = stylistsContent.stylists as Stylist[];

  return (
    <section id="stylists" className="py-16 md:py-24 bg-soft-beige">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-4xl font-migra font-bold mb-4 text-dark-text">
            Our <span className="text-brand-green">Stylists</span>
          </h2>
          <p className="text-base md:text-lg font-body text-dark-text max-w-2xl mx-auto">
            {intro}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 md:gap-10">
          {stylists.map((stylist, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden transition-all hover:shadow-lg">
              {stylist.image && (
                <div className="aspect-w-16 aspect-h-9 relative">
                  <img
                    src={stylist.image}
                    alt={`${stylist.name} - Hair Stylist`}
                    className="w-full h-auto object-cover"
                  />
                </div>
              )}
              <div className="p-6">
                <div className="flex justify-between items-center mb-4">
                  <h3 className="text-2xl font-migra font-semibold text-dark-text">{stylist.name}</h3>
                  {stylist.instagramUrl && (
                    <a
                      href={stylist.instagramUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-brand-green hover:text-opacity-80 transition-all"
                      aria-label={`${stylist.name}'s Instagram`}
                    >
                      <i className="fab fa-instagram text-xl"></i>
                    </a>
                  )}
                </div>
                {stylist.title && (
                  <p className="text-sm font-body text-dark-text mb-4 italic">{stylist.title}</p>
                )}
                {stylist.bio && (
                  <p className="text-base font-body text-dark-text mb-6">
                    {stylist.bio}
                  </p>
                )}
                {(stylist.specialties ?? []).length > 0 && (
                  <>
                    <p className="text-sm font-body text-dark-text font-medium mb-4">Specialties:</p>
                    <div className="flex flex-wrap gap-2 mb-6">
                      {(stylist.specialties ?? []).map((specialty, spIndex) => (
                        <span key={spIndex} className="px-3 py-1 bg-soft-beige text-dark-text text-xs font-body rounded-full">
                          {specialty}
                        </span>
                      ))}
                    </div>
                  </>
                )}
                {stylist.bookingUrl && (
                  <a
                    href={stylist.bookingUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full block py-3 bg-brand-green text-white font-body font-medium rounded-lg text-center shadow hover:bg-opacity-90 transition-all booking-btn"
                  >
                    Book with {stylist.name}
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stylists;
