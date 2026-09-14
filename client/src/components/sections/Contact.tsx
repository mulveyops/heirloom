import contact from "@/content/contact.json";
import site from "@/content/site.json";

const Contact = () => {
  return (
    <section id="contact" className="py-16 md:py-24 bg-soft-beige">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-4xl font-migra font-bold mb-4 text-dark-text">
            Contact <span className="text-brand-green">Us</span>
          </h2>
          <p className="text-base md:text-lg font-body text-dark-text max-w-2xl mx-auto">
            {contact.intro}
          </p>
        </div>

        <div className="flex flex-col md:flex-row -mx-4">
          <div className="md:w-1/2 px-4 mb-8 md:mb-0">
            <div className="bg-white rounded-lg shadow-md p-6 h-full">
              <h3 className="text-xl md:text-2xl font-migra font-semibold mb-6 text-dark-text">Contact Information</h3>

              <div className="flex items-start mb-6">
                <div className="text-brand-green mr-4">
                  <i className="fas fa-map-marker-alt text-2xl"></i>
                </div>
                <div>
                  <h4 className="font-body font-medium text-dark-text mb-1">Location</h4>
                  <p className="font-body text-dark-text">{site.address}</p>
                </div>
              </div>

              <div className="flex items-start mb-6">
                <div className="text-brand-green mr-4">
                  <i className="fas fa-envelope text-2xl"></i>
                </div>
                <div>
                  <h4 className="font-body font-medium text-dark-text mb-1">Email</h4>
                  <a
                    href={`mailto:${site.email}`}
                    className="font-body text-brand-green hover:underline"
                  >
                    {site.email}
                  </a>
                </div>
              </div>

              <div className="flex items-start mb-6">
                <div className="text-brand-green mr-4">
                  <i className="fas fa-phone text-2xl"></i>
                </div>
                <div>
                  <h4 className="font-body font-medium text-dark-text mb-1">Phone Number</h4>
                  <a
                    href={`tel:${site.phone}`}
                    className="font-body text-brand-green hover:underline"
                  >
                    {site.phone}
                  </a>
                  <p className="font-body text-dark-text italic">{site.phoneNote}</p>
                </div>
              </div>

              <div className="flex items-start mb-6">
                <div className="text-brand-green mr-4">
                  <i className="fas fa-clock text-2xl"></i>
                </div>
                <div>
                  <h4 className="font-body font-medium text-dark-text mb-1">Hours</h4>
                  <p className="font-body text-dark-text mb-1">{site.hours}</p>
                  <p className="font-body text-dark-text italic">{site.hoursNote}</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="text-brand-green mr-4">
                  <i className="fab fa-instagram text-2xl"></i>
                </div>
                <div>
                  <h4 className="font-body font-medium text-dark-text mb-1">Social Media</h4>
                  <a
                    href={site.instagramUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-body text-brand-green hover:underline"
                  >
                    {site.instagramHandle}
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="md:w-1/2 px-4">
            <div className="bg-white rounded-lg shadow-md overflow-hidden h-full">
              <iframe
                src={contact.mapEmbedUrl}
                width="100%"
                height="100%"
                style={{ border: 0, minHeight: "300px" }}
                allowFullScreen={true}
                loading="lazy"
                aria-label={`Google Maps location of ${site.name}`}
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
